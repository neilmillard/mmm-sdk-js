#!/usr/bin/env npx jbash

set("-x");
set("-e");

const rootFolder = require("path").join(__dirname, "../");
const specFilename = `schema-v1-swagger.json`;
const swaggerConfigFilename = `config.json`;

cd(rootFolder);

// Download latest spec from the API
if ($1 == "--useLocal") {
  echo(
    `WARNING: --useLocalSpec passed in so the local spec file (schema-v1-swagger.json) will be used.`
  );
} else {
  exec(
    `wget http://127.0.0.1:8000/schema/ -O ./.swagger-codegen/${specFilename}`
  );
}

// Update config file with latest package info
const package = require("../package.json");
swaggerConfig = require(`./${swaggerConfigFilename}`);
swaggerConfig.npmName = package.name;
swaggerConfig.npmVersion = package.version;
writeFile(
  `./.swagger-codegen/${swaggerConfigFilename}`,
  JSON.stringify(swaggerConfig, null, 2)
);

// Copy ignore file to src/ (workaround for ignore-file-override option not working)
// exec(`cp ./.swagger-codegen/.swagger-codegen-ignore ./src`);

// Share the current folder with docker, and then run the typescript-fetch generator, pointing to the given template
const codegenVersion = "2.4.14";
exec(`docker pull swaggerapi/swagger-codegen-cli:${codegenVersion} && docker run --rm -v ${rootFolder}:/local swaggerapi/swagger-codegen-cli:${codegenVersion} generate \
    -DmodelPropertyNaming=original \
    --type-mappings DateTime=string \
    -i "/local/.swagger-codegen/${specFilename}" \
    -l "typescript-fetch" \
    -c "/local/.swagger-codegen/${swaggerConfigFilename}" \
    -o "/local/src"`);

// Move VERSION file out of src/ and into root .swagger-codegen folder for consistent organization
exec(
  "mv ./src/.swagger-codegen/VERSION ./.swagger-codegen/ && rm -rf ./src/.swagger-codegen"
);

// Remove ignore file from src/
// exec(`rm  ./src/.swagger-codegen-ignore`);
