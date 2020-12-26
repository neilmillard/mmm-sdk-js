# ControlYourMoneyApi.PayeeApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payeeCreate**](PayeeApi.md#payeeCreate) | **POST** /v1/budgets/{budget_id}/payee/ | 
[**payeeList**](PayeeApi.md#payeeList) | **GET** /v1/budgets/{budget_id}/payee/ | 
[**payeePartialUpdate**](PayeeApi.md#payeePartialUpdate) | **PATCH** /v1/budgets/{budget_id}/payee/{id}/ | 
[**payeeRetrieve**](PayeeApi.md#payeeRetrieve) | **GET** /v1/budgets/{budget_id}/payee/{id}/ | 
[**payeeUpdate**](PayeeApi.md#payeeUpdate) | **PUT** /v1/budgets/{budget_id}/payee/{id}/ | 

<a name="payeeCreate"></a>
# **payeeCreate**
> Payee payeeCreate(bodyname2transferAccountId2deleted2nametransferAccountIddeletedbudgetId)



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

let apiInstance = new ControlYourMoneyApi.PayeeApi();
let body = new ControlYourMoneyApi.PayeeRequest(); // PayeeRequest | 
let name2 = "name_example"; // String | 
let transferAccountId2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let deleted2 = true; // Boolean | 
let name = "name_example"; // String | 
let transferAccountId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let deleted = true; // Boolean | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.payeeCreate(bodyname2transferAccountId2deleted2nametransferAccountIddeletedbudgetId, (error, data, response) => {
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
 **body** | [**PayeeRequest**](PayeeRequest.md)|  | 
 **name2** | **String**|  | 
 **transferAccountId2** | [**String**](.md)|  | 
 **deleted2** | **Boolean**|  | 
 **name** | **String**|  | 
 **transferAccountId** | [**String**](.md)|  | 
 **deleted** | **Boolean**|  | 
 **budgetId** | [**String**](.md)|  | 

### Return type

[**Payee**](Payee.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="payeeList"></a>
# **payeeList**
> [Payee] payeeList(budgetId)



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

let apiInstance = new ControlYourMoneyApi.PayeeApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.payeeList(budgetId, (error, data, response) => {
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

[**[Payee]**](Payee.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payeePartialUpdate"></a>
# **payeePartialUpdate**
> Payee payeePartialUpdate(budgetIdid, opts)



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

let apiInstance = new ControlYourMoneyApi.PayeeApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new ControlYourMoneyApi.PatchedPayeeRequest() // PatchedPayeeRequest | 
  'name2': "name_example" // String | 
  'transferAccountId2': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'deleted2': true // Boolean | 
  'name': "name_example" // String | 
  'transferAccountId': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'deleted': true // Boolean | 
};
apiInstance.payeePartialUpdate(budgetIdid, opts, (error, data, response) => {
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
 **body** | [**PatchedPayeeRequest**](PatchedPayeeRequest.md)|  | [optional] 
 **name2** | **String**|  | [optional] 
 **transferAccountId2** | [**String**](.md)|  | [optional] 
 **deleted2** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **transferAccountId** | [**String**](.md)|  | [optional] 
 **deleted** | **Boolean**|  | [optional] 

### Return type

[**Payee**](Payee.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="payeeRetrieve"></a>
# **payeeRetrieve**
> Payee payeeRetrieve(budgetId, id)



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

let apiInstance = new ControlYourMoneyApi.PayeeApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.payeeRetrieve(budgetId, id, (error, data, response) => {
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

[**Payee**](Payee.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payeeUpdate"></a>
# **payeeUpdate**
> Payee payeeUpdate(bodyname2transferAccountId2deleted2nametransferAccountIddeletedbudgetIdid)



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

let apiInstance = new ControlYourMoneyApi.PayeeApi();
let body = new ControlYourMoneyApi.PayeeRequest(); // PayeeRequest | 
let name2 = "name_example"; // String | 
let transferAccountId2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let deleted2 = true; // Boolean | 
let name = "name_example"; // String | 
let transferAccountId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let deleted = true; // Boolean | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.payeeUpdate(bodyname2transferAccountId2deleted2nametransferAccountIddeletedbudgetIdid, (error, data, response) => {
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
 **body** | [**PayeeRequest**](PayeeRequest.md)|  | 
 **name2** | **String**|  | 
 **transferAccountId2** | [**String**](.md)|  | 
 **deleted2** | **Boolean**|  | 
 **name** | **String**|  | 
 **transferAccountId** | [**String**](.md)|  | 
 **deleted** | **Boolean**|  | 
 **budgetId** | [**String**](.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**Payee**](Payee.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

