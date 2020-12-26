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
* The PatchedCategoryGroupRequest model module.
* @module model/PatchedCategoryGroupRequest
* @version Unknown
*/
export default class PatchedCategoryGroupRequest {
    /**
    * Constructs a new <code>PatchedCategoryGroupRequest</code>.
    * @alias module:model/PatchedCategoryGroupRequest
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>PatchedCategoryGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PatchedCategoryGroupRequest} obj Optional instance to populate.
    * @return {module:model/PatchedCategoryGroupRequest} The populated <code>PatchedCategoryGroupRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedCategoryGroupRequest();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Boolean');
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
    * @member {Boolean} deleted
    */
    'deleted' = undefined;




}
