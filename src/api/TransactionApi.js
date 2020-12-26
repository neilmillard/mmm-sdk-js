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

import ApiClient from "../ApiClient";
import ClearedEnum from '../model/ClearedEnum';
import PatchedTransactionRequest from '../model/PatchedTransactionRequest';
import Transaction from '../model/Transaction';
import TransactionRequest from '../model/TransactionRequest';

/**
* Transaction service.
* @module api/TransactionApi
* @version Unknown
*/
export default class TransactionApi {

    /**
    * Constructs a new TransactionApi. 
    * @alias module:api/TransactionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the transactionCreate operation.
     * @callback module:api/TransactionApi~transactionCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Concrete view for listing a queryset or creating a model instance.
     * @param {module:api/TransactionApi~transactionCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    transactionCreate(body, _date, amount, memo, cleared, approved, account, payee, category, payeeName, _date, amount, memo, cleared, approved, account, payee, category, payeeName, budgetId, callback) {
      let postBody = body;

      let pathParams = {
        'budget_id': budgetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'date': _date,
        'amount': amount,
        'memo': memo,
        'cleared': cleared,
        'approved': approved,
        'account': account,
        'payee': payee,
        'category': category,
        'payee_name': payeeName,
        'date': _date,
        'amount': amount,
        'memo': memo,
        'cleared': cleared,
        'approved': approved,
        'account': account,
        'payee': payee,
        'category': category,
        'payee_name': payeeName
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/transaction/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the transactionList operation.
     * @callback module:api/TransactionApi~transactionListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Transaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Concrete view for listing a queryset or creating a model instance.
     * @param {module:api/TransactionApi~transactionListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Transaction>}
     */
    transactionList(budgetId, callback) {
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
      let returnType = [Transaction];

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/transaction/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the transactionPartialUpdate operation.
     * @callback module:api/TransactionApi~transactionPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:api/TransactionApi~transactionPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    transactionPartialUpdate(budgetId, id, opts, callback) {
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
        'date': opts['_date'],
        'amount': opts['amount'],
        'memo': opts['memo'],
        'cleared': opts['cleared'],
        'approved': opts['approved'],
        'account': opts['account'],
        'payee': opts['payee'],
        'category': opts['category'],
        'payee_name': opts['payeeName'],
        'date': opts['_date'],
        'amount': opts['amount'],
        'memo': opts['memo'],
        'cleared': opts['cleared'],
        'approved': opts['approved'],
        'account': opts['account'],
        'payee': opts['payee'],
        'category': opts['category'],
        'payee_name': opts['payeeName']
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/transaction/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the transactionRetrieve operation.
     * @callback module:api/TransactionApi~transactionRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TransactionApi~transactionRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    transactionRetrieve(budgetId, id, callback) {
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
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/transaction/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the transactionUpdate operation.
     * @callback module:api/TransactionApi~transactionUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TransactionApi~transactionUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    transactionUpdate(body, _date, amount, memo, cleared, approved, account, payee, category, payeeName, _date, amount, memo, cleared, approved, account, payee, category, payeeName, budgetId, id, callback) {
      let postBody = body;

      let pathParams = {
        'budget_id': budgetId,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'date': _date,
        'amount': amount,
        'memo': memo,
        'cleared': cleared,
        'approved': approved,
        'account': account,
        'payee': payee,
        'category': category,
        'payee_name': payeeName,
        'date': _date,
        'amount': amount,
        'memo': memo,
        'cleared': cleared,
        'approved': approved,
        'account': account,
        'payee': payee,
        'category': category,
        'payee_name': payeeName
      };

      let authNames = ['basicAuth', 'cookieAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/v1/budgets/{budget_id}/transaction/{id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
