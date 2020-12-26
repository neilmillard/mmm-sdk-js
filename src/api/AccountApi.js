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

import ApiClient from "../ApiClient";
import Account from '../model/Account';
import AccountRequest from '../model/AccountRequest';
import PatchedAccountRequest from '../model/PatchedAccountRequest';
import Transaction from '../model/Transaction';

/**
* Account service.
* @module api/AccountApi
* @version Unknown
*/
export default class AccountApi {

    /**
    * Constructs a new AccountApi. 
    * @alias module:api/AccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the accountCreate operation.
     * @callback module:api/AccountApi~accountCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Concrete view for listing a queryset or creating a model instance.
     * @param {module:api/AccountApi~accountCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Account}
     */
    accountCreate(body, name, note, type, onBudget, balance, clearedBalance, unclearedBalance, closed, name, note, type, onBudget, balance, clearedBalance, unclearedBalance, closed, budgetId, callback) {
      let postBody = body;

      let pathParams = {
        'budget_id': budgetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name,
        'note': note,
        'type': type,
        'on_budget': onBudget,
        'balance': balance,
        'cleared_balance': clearedBalance,
        'uncleared_balance': unclearedBalance,
        'closed': closed,
        'name': name,
        'note': note,
        'type': type,
        'on_budget': onBudget,
        'balance': balance,
        'cleared_balance': clearedBalance,
        'uncleared_balance': unclearedBalance,
        'closed': closed
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Account;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/account/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountList operation.
     * @callback module:api/AccountApi~accountListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Account>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Concrete view for listing a queryset or creating a model instance.
     * @param {module:api/AccountApi~accountListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Account>}
     */
    accountList(budgetId, callback) {
      let postBody = null;

      let pathParams = {
        'budget_id': budgetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Account];

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/account/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountPartialUpdate operation.
     * @callback module:api/AccountApi~accountPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:api/AccountApi~accountPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Account}
     */
    accountPartialUpdate(budgetId, id, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        'budget_id': budgetId,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'note': opts['note'],
        'type': opts['type'],
        'on_budget': opts['onBudget'],
        'balance': opts['balance'],
        'cleared_balance': opts['clearedBalance'],
        'uncleared_balance': opts['unclearedBalance'],
        'closed': opts['closed'],
        'name': opts['name'],
        'note': opts['note'],
        'type': opts['type'],
        'on_budget': opts['onBudget'],
        'balance': opts['balance'],
        'cleared_balance': opts['clearedBalance'],
        'uncleared_balance': opts['unclearedBalance'],
        'closed': opts['closed']
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Account;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/account/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountRetrieve operation.
     * @callback module:api/AccountApi~accountRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AccountApi~accountRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Account}
     */
    accountRetrieve(budgetId, id, callback) {
      let postBody = null;

      let pathParams = {
        'budget_id': budgetId,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Account;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/account/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the accountTransactionList operation.
     * @callback module:api/AccountApi~accountTransactionListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Transaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AccountApi~accountTransactionListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Transaction>}
     */
    accountTransactionList(accountId, budgetId, callback) {
      let postBody = null;

      let pathParams = {
        'account_id': accountId,
        'budget_id': budgetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Transaction];

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/account/{account_id}/transaction/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
