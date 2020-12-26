# ControlYourMoneyApi.TransactionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transactionCreate**](TransactionApi.md#transactionCreate) | **POST** /v1/budgets/{budget_id}/transaction/ | 
[**transactionList**](TransactionApi.md#transactionList) | **GET** /v1/budgets/{budget_id}/transaction/ | 
[**transactionPartialUpdate**](TransactionApi.md#transactionPartialUpdate) | **PATCH** /v1/budgets/{budget_id}/transaction/{id}/ | 
[**transactionRetrieve**](TransactionApi.md#transactionRetrieve) | **GET** /v1/budgets/{budget_id}/transaction/{id}/ | 
[**transactionUpdate**](TransactionApi.md#transactionUpdate) | **PUT** /v1/budgets/{budget_id}/transaction/{id}/ | 

<a name="transactionCreate"></a>
# **transactionCreate**
> Transaction transactionCreate(body_date2amount2memo2cleared2approved2account2payee2category2payeeName2_dateamountmemoclearedapprovedaccountpayeecategorypayeeNamebudgetId)



Concrete view for listing a queryset or creating a model instance.

### Example
```javascript
import ControlYourMoneyApi from 'control_your_money_api';
let defaultClient = ControlYourMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new ControlYourMoneyApi.TransactionApi();
let body = new ControlYourMoneyApi.TransactionRequest(); // TransactionRequest | 
let _date2 = new Date("2013-10-20"); // Date | 
let amount2 = 56; // Number | 
let memo2 = "memo_example"; // String | 
let cleared2 = new ControlYourMoneyApi.ClearedEnum(); // ClearedEnum | 
let approved2 = true; // Boolean | 
let account2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payee2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let category2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payeeName2 = "payeeName_example"; // String | 
let _date = new Date("2013-10-20"); // Date | 
let amount = 56; // Number | 
let memo = "memo_example"; // String | 
let cleared = new ControlYourMoneyApi.ClearedEnum(); // ClearedEnum | 
let approved = true; // Boolean | 
let account = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payee = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let category = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payeeName = "payeeName_example"; // String | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.transactionCreate(body_date2amount2memo2cleared2approved2account2payee2category2payeeName2_dateamountmemoclearedapprovedaccountpayeecategorypayeeNamebudgetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransactionRequest**](TransactionRequest.md)|  | 
 **_date2** | **Date**|  | 
 **amount2** | **Number**|  | 
 **memo2** | **String**|  | 
 **cleared2** | [**ClearedEnum**](.md)|  | 
 **approved2** | **Boolean**|  | 
 **account2** | [**String**](.md)|  | 
 **payee2** | [**String**](.md)|  | 
 **category2** | [**String**](.md)|  | 
 **payeeName2** | **String**|  | 
 **_date** | **Date**|  | 
 **amount** | **Number**|  | 
 **memo** | **String**|  | 
 **cleared** | [**ClearedEnum**](.md)|  | 
 **approved** | **Boolean**|  | 
 **account** | [**String**](.md)|  | 
 **payee** | [**String**](.md)|  | 
 **category** | [**String**](.md)|  | 
 **payeeName** | **String**|  | 
 **budgetId** | [**String**](.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="transactionList"></a>
# **transactionList**
> [Transaction] transactionList(budgetId)



Concrete view for listing a queryset or creating a model instance.

### Example
```javascript
import ControlYourMoneyApi from 'control_your_money_api';
let defaultClient = ControlYourMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new ControlYourMoneyApi.TransactionApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.transactionList(budgetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)|  | 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="transactionPartialUpdate"></a>
# **transactionPartialUpdate**
> Transaction transactionPartialUpdate(budgetIdid, opts)



### Example
```javascript
import ControlYourMoneyApi from 'control_your_money_api';
let defaultClient = ControlYourMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new ControlYourMoneyApi.TransactionApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new ControlYourMoneyApi.PatchedTransactionRequest() // PatchedTransactionRequest | 
  '_date2': new Date("2013-10-20") // Date | 
  'amount2': 56 // Number | 
  'memo2': "memo_example" // String | 
  'cleared2': new ControlYourMoneyApi.ClearedEnum() // ClearedEnum | 
  'approved2': true // Boolean | 
  'account2': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'payee2': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'category2': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'payeeName2': "payeeName_example" // String | 
  '_date': new Date("2013-10-20") // Date | 
  'amount': 56 // Number | 
  'memo': "memo_example" // String | 
  'cleared': new ControlYourMoneyApi.ClearedEnum() // ClearedEnum | 
  'approved': true // Boolean | 
  'account': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'payee': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'category': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'payeeName': "payeeName_example" // String | 
};
apiInstance.transactionPartialUpdate(budgetIdid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)|  | 
 **id** | [**String**](.md)|  | 
 **body** | [**PatchedTransactionRequest**](PatchedTransactionRequest.md)|  | [optional] 
 **_date2** | **Date**|  | [optional] 
 **amount2** | **Number**|  | [optional] 
 **memo2** | **String**|  | [optional] 
 **cleared2** | [**ClearedEnum**](.md)|  | [optional] 
 **approved2** | **Boolean**|  | [optional] 
 **account2** | [**String**](.md)|  | [optional] 
 **payee2** | [**String**](.md)|  | [optional] 
 **category2** | [**String**](.md)|  | [optional] 
 **payeeName2** | **String**|  | [optional] 
 **_date** | **Date**|  | [optional] 
 **amount** | **Number**|  | [optional] 
 **memo** | **String**|  | [optional] 
 **cleared** | [**ClearedEnum**](.md)|  | [optional] 
 **approved** | **Boolean**|  | [optional] 
 **account** | [**String**](.md)|  | [optional] 
 **payee** | [**String**](.md)|  | [optional] 
 **category** | [**String**](.md)|  | [optional] 
 **payeeName** | **String**|  | [optional] 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="transactionRetrieve"></a>
# **transactionRetrieve**
> Transaction transactionRetrieve(budgetId, id)



### Example
```javascript
import ControlYourMoneyApi from 'control_your_money_api';
let defaultClient = ControlYourMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new ControlYourMoneyApi.TransactionApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.transactionRetrieve(budgetId, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **budgetId** | [**String**](.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="transactionUpdate"></a>
# **transactionUpdate**
> Transaction transactionUpdate(body_date2amount2memo2cleared2approved2account2payee2category2payeeName2_dateamountmemoclearedapprovedaccountpayeecategorypayeeNamebudgetIdid)



### Example
```javascript
import ControlYourMoneyApi from 'control_your_money_api';
let defaultClient = ControlYourMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new ControlYourMoneyApi.TransactionApi();
let body = new ControlYourMoneyApi.TransactionRequest(); // TransactionRequest | 
let _date2 = new Date("2013-10-20"); // Date | 
let amount2 = 56; // Number | 
let memo2 = "memo_example"; // String | 
let cleared2 = new ControlYourMoneyApi.ClearedEnum(); // ClearedEnum | 
let approved2 = true; // Boolean | 
let account2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payee2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let category2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payeeName2 = "payeeName_example"; // String | 
let _date = new Date("2013-10-20"); // Date | 
let amount = 56; // Number | 
let memo = "memo_example"; // String | 
let cleared = new ControlYourMoneyApi.ClearedEnum(); // ClearedEnum | 
let approved = true; // Boolean | 
let account = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payee = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let category = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let payeeName = "payeeName_example"; // String | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.transactionUpdate(body_date2amount2memo2cleared2approved2account2payee2category2payeeName2_dateamountmemoclearedapprovedaccountpayeecategorypayeeNamebudgetIdid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransactionRequest**](TransactionRequest.md)|  | 
 **_date2** | **Date**|  | 
 **amount2** | **Number**|  | 
 **memo2** | **String**|  | 
 **cleared2** | [**ClearedEnum**](.md)|  | 
 **approved2** | **Boolean**|  | 
 **account2** | [**String**](.md)|  | 
 **payee2** | [**String**](.md)|  | 
 **category2** | [**String**](.md)|  | 
 **payeeName2** | **String**|  | 
 **_date** | **Date**|  | 
 **amount** | **Number**|  | 
 **memo** | **String**|  | 
 **cleared** | [**ClearedEnum**](.md)|  | 
 **approved** | **Boolean**|  | 
 **account** | [**String**](.md)|  | 
 **payee** | [**String**](.md)|  | 
 **category** | [**String**](.md)|  | 
 **payeeName** | **String**|  | 
 **budgetId** | [**String**](.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

