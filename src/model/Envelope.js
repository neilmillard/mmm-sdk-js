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
* The Envelope model module.
* @module model/Envelope
* @version Unknown
*/
export default class Envelope {
    /**
    * Constructs a new <code>Envelope</code>.
    * @alias module:model/Envelope
    * @class
    * @param url {String} 
    * @param month {String} 
    * @param category {String} 
    */

    constructor(url, month, category) {
        
        
        this['url'] = url;
        this['month'] = month;
        this['category'] = category;
        
    }

    /**
    * Constructs a <code>Envelope</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Envelope} obj Optional instance to populate.
    * @return {module:model/Envelope} The populated <code>Envelope</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Envelope();
                        
            
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('budgeted')) {
                obj['budgeted'] = ApiClient.convertToType(data['budgeted'], 'Number');
            }
            if (data.hasOwnProperty('activity')) {
                obj['activity'] = ApiClient.convertToType(data['activity'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} url
    */
    'url' = undefined;
    /**
    * @member {String} month
    */
    'month' = undefined;
    /**
    * @member {String} category
    */
    'category' = undefined;
    /**
    * @member {Number} budgeted
    */
    'budgeted' = undefined;
    /**
    * @member {Number} activity
    */
    'activity' = undefined;
    /**
    * @member {Number} balance
    */
    'balance' = undefined;




}
