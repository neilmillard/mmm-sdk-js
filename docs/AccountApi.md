# ControlYourMoneyApi.AccountApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountCreate**](AccountApi.md#accountCreate) | **POST** /v1/budgets/{budget_id}/account/ | 
[**accountList**](AccountApi.md#accountList) | **GET** /v1/budgets/{budget_id}/account/ | 
[**accountPartialUpdate**](AccountApi.md#accountPartialUpdate) | **PATCH** /v1/budgets/{budget_id}/account/{id}/ | 
[**accountRetrieve**](AccountApi.md#accountRetrieve) | **GET** /v1/budgets/{budget_id}/account/{id}/ | 
[**accountTransactionList**](AccountApi.md#accountTransactionList) | **GET** /v1/budgets/{budget_id}/account/{account_id}/transaction/ | 

<a name="accountCreate"></a>
# **accountCreate**
> Account accountCreate(bodyname2note2type2onBudget2balance2clearedBalance2unclearedBalance2closed2namenotetypeonBudgetbalanceclearedBalanceunclearedBalanceclosedbudgetId)



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

let apiInstance = new ControlYourMoneyApi.AccountApi();
let body = new ControlYourMoneyApi.AccountRequest(); // AccountRequest | 
let name2 = "name_example"; // String | 
let note2 = "note_example"; // String | 
let type2 = "type_example"; // String | 
let onBudget2 = true; // Boolean | 
let balance2 = 56; // Number | 
let clearedBalance2 = 56; // Number | 
let unclearedBalance2 = 56; // Number | 
let closed2 = true; // Boolean | 
let name = "name_example"; // String | 
let note = "note_example"; // String | 
let type = "type_example"; // String | 
let onBudget = true; // Boolean | 
let balance = 56; // Number | 
let clearedBalance = 56; // Number | 
let unclearedBalance = 56; // Number | 
let closed = true; // Boolean | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.accountCreate(bodyname2note2type2onBudget2balance2clearedBalance2unclearedBalance2closed2namenotetypeonBudgetbalanceclearedBalanceunclearedBalanceclosedbudgetId, (error, data, response) => {
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
 **body** | [**AccountRequest**](AccountRequest.md)|  | 
 **name2** | **String**|  | 
 **note2** | **String**|  | 
 **type2** | **String**|  | 
 **onBudget2** | **Boolean**|  | 
 **balance2** | **Number**|  | 
 **clearedBalance2** | **Number**|  | 
 **unclearedBalance2** | **Number**|  | 
 **closed2** | **Boolean**|  | 
 **name** | **String**|  | 
 **note** | **String**|  | 
 **type** | **String**|  | 
 **onBudget** | **Boolean**|  | 
 **balance** | **Number**|  | 
 **clearedBalance** | **Number**|  | 
 **unclearedBalance** | **Number**|  | 
 **closed** | **Boolean**|  | 
 **budgetId** | [**String**](.md)|  | 

### Return type

[**Account**](Account.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="accountList"></a>
# **accountList**
> [Account] accountList(budgetId)



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

let apiInstance = new ControlYourMoneyApi.AccountApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.accountList(budgetId, (error, data, response) => {
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

[**[Account]**](Account.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountPartialUpdate"></a>
# **accountPartialUpdate**
> Account accountPartialUpdate(budgetIdid, opts)



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

let apiInstance = new ControlYourMoneyApi.AccountApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new ControlYourMoneyApi.PatchedAccountRequest() // PatchedAccountRequest | 
  'name2': "name_example" // String | 
  'note2': "note_example" // String | 
  'type2': "type_example" // String | 
  'onBudget2': true // Boolean | 
  'balance2': 56 // Number | 
  'clearedBalance2': 56 // Number | 
  'unclearedBalance2': 56 // Number | 
  'closed2': true // Boolean | 
  'name': "name_example" // String | 
  'note': "note_example" // String | 
  'type': "type_example" // String | 
  'onBudget': true // Boolean | 
  'balance': 56 // Number | 
  'clearedBalance': 56 // Number | 
  'unclearedBalance': 56 // Number | 
  'closed': true // Boolean | 
};
apiInstance.accountPartialUpdate(budgetIdid, opts, (error, data, response) => {
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
 **body** | [**PatchedAccountRequest**](PatchedAccountRequest.md)|  | [optional] 
 **name2** | **String**|  | [optional] 
 **note2** | **String**|  | [optional] 
 **type2** | **String**|  | [optional] 
 **onBudget2** | **Boolean**|  | [optional] 
 **balance2** | **Number**|  | [optional] 
 **clearedBalance2** | **Number**|  | [optional] 
 **unclearedBalance2** | **Number**|  | [optional] 
 **closed2** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **note** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **onBudget** | **Boolean**|  | [optional] 
 **balance** | **Number**|  | [optional] 
 **clearedBalance** | **Number**|  | [optional] 
 **unclearedBalance** | **Number**|  | [optional] 
 **closed** | **Boolean**|  | [optional] 

### Return type

[**Account**](Account.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="accountRetrieve"></a>
# **accountRetrieve**
> Account accountRetrieve(budgetId, id)



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

let apiInstance = new ControlYourMoneyApi.AccountApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.accountRetrieve(budgetId, id, (error, data, response) => {
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

[**Account**](Account.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="accountTransactionList"></a>
# **accountTransactionList**
> [Transaction] accountTransactionList(accountId, budgetId)



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

let apiInstance = new ControlYourMoneyApi.AccountApi();
let accountId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.accountTransactionList(accountId, budgetId, (error, data, response) => {
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
 **accountId** | [**String**](.md)|  | 
 **budgetId** | [**String**](.md)|  | 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

