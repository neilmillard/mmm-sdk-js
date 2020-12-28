module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "browser/mmm.js",
    library: "mmm",
    libraryTarget: "var"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                outDir: "../dist",
                declaration: false,
                composite: false
              }
            }
          }
        ]
      }
    ]
  }
};