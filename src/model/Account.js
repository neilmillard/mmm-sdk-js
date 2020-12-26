/**
 * Master My Money API
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
* The Account model module.
* @module model/Account
* @version Unknown
*/
export default class Account {
    /**
    * Constructs a new <code>Account</code>.
    * @alias module:model/Account
    * @class
    * @param id {String} 
    * @param name {String} 
    * @param type {String} 
    * @param onBudget {Boolean} 
    */

    constructor(id, name, type, onBudget) {
        
        
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['on_budget'] = onBudget;
        
    }

    /**
    * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Account} obj Optional instance to populate.
    * @return {module:model/Account} The populated <code>Account</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Account();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('on_budget')) {
                obj['on_budget'] = ApiClient.convertToType(data['on_budget'], 'Boolean');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('cleared_balance')) {
                obj['cleared_balance'] = ApiClient.convertToType(data['cleared_balance'], 'Number');
            }
            if (data.hasOwnProperty('uncleared_balance')) {
                obj['uncleared_balance'] = ApiClient.convertToType(data['uncleared_balance'], 'Number');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    'id' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} note
    */
    'note' = undefined;
    /**
    * @member {String} type
    */
    'type' = undefined;
    /**
    * @member {Boolean} on_budget
    */
    'on_budget' = undefined;
    /**
    * @member {Number} balance
    */
    'balance' = undefined;
    /**
    * @member {Number} cleared_balance
    */
    'cleared_balance' = undefined;
    /**
    * @member {Number} uncleared_balance
    */
    'uncleared_balance' = undefined;
    /**
    * @member {Boolean} closed
    */
    'closed' = undefined;




}
