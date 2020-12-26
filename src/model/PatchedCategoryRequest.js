/**
 * Control Your Money API
 * Direct access to your budgets. Or use the APP
 *
 * OpenAPI spec version: Unknown
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The PatchedCategoryRequest model module.
* @module model/PatchedCategoryRequest
* @version Unknown
*/
export default class PatchedCategoryRequest {
    /**
    * Constructs a new <code>PatchedCategoryRequest</code>.
    * @alias module:model/PatchedCategoryRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PatchedCategoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PatchedCategoryRequest} obj Optional instance to populate.
    * @return {module:model/PatchedCategoryRequest} The populated <code>PatchedCategoryRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedCategoryRequest();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('category_group')) {
                obj['category_group'] = ApiClient.convertToType(data['category_group'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Boolean} hidden
    */
    'hidden' = undefined;
    /**
    * @member {String} category_group
    */
    'category_group' = undefined;




}