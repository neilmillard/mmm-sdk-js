# MasterMyMoneyApi.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootCreate**](DefaultApi.md#rootCreate) | **POST** /v1/budgets/ | 
[**rootDestroy**](DefaultApi.md#rootDestroy) | **DELETE** /v1/budgets/{id}/ | 
[**rootList**](DefaultApi.md#rootList) | **GET** /v1/budgets/ | 
[**rootPartialUpdate**](DefaultApi.md#rootPartialUpdate) | **PATCH** /v1/budgets/{id}/ | 
[**rootRetrieve**](DefaultApi.md#rootRetrieve) | **GET** /v1/budgets/{id}/ | 
[**rootUpdate**](DefaultApi.md#rootUpdate) | **PUT** /v1/budgets/{id}/ | 

<a name="rootCreate"></a>
# **rootCreate**
> Budget rootCreate(bodyname2name)



### Example
```javascript
import MasterMyMoneyApi from 'master_my_money_api';
let defaultClient = MasterMyMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new MasterMyMoneyApi.DefaultApi();
let body = new MasterMyMoneyApi.BudgetRequest(); // BudgetRequest | 
let name2 = "name_example"; // String | 
let name = "name_example"; // String | 

apiInstance.rootCreate(bodyname2name, (error, data, response) => {
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
 **body** | [**BudgetRequest**](BudgetRequest.md)|  | 
 **name2** | **String**|  | 
 **name** | **String**|  | 

### Return type

[**Budget**](Budget.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="rootDestroy"></a>
# **rootDestroy**
> rootDestroy(id)



### Example
```javascript
import MasterMyMoneyApi from 'master_my_money_api';
let defaultClient = MasterMyMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new MasterMyMoneyApi.DefaultApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rootDestroy(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rootList"></a>
# **rootList**
> [Budget] rootList()



### Example
```javascript
import MasterMyMoneyApi from 'master_my_money_api';
let defaultClient = MasterMyMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new MasterMyMoneyApi.DefaultApi();
apiInstance.rootList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Budget]**](Budget.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootPartialUpdate"></a>
# **rootPartialUpdate**
> Budget rootPartialUpdate(id, opts)



### Example
```javascript
import MasterMyMoneyApi from 'master_my_money_api';
let defaultClient = MasterMyMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new MasterMyMoneyApi.DefaultApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new MasterMyMoneyApi.PatchedBudgetRequest() // PatchedBudgetRequest | 
  'name2': "name_example" // String | 
  'name': "name_example" // String | 
};
apiInstance.rootPartialUpdate(id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 
 **body** | [**PatchedBudgetRequest**](PatchedBudgetRequest.md)|  | [optional] 
 **name2** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**Budget**](Budget.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="rootRetrieve"></a>
# **rootRetrieve**
> Budget rootRetrieve(id)



### Example
```javascript
import MasterMyMoneyApi from 'master_my_money_api';
let defaultClient = MasterMyMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new MasterMyMoneyApi.DefaultApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rootRetrieve(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**Budget**](Budget.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootUpdate"></a>
# **rootUpdate**
> Budget rootUpdate(bodyname2nameid)



### Example
```javascript
import MasterMyMoneyApi from 'master_my_money_api';
let defaultClient = MasterMyMoneyApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new MasterMyMoneyApi.DefaultApi();
let body = new MasterMyMoneyApi.BudgetRequest(); // BudgetRequest | 
let name2 = "name_example"; // String | 
let name = "name_example"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.rootUpdate(bodyname2nameid, (error, data, response) => {
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
 **body** | [**BudgetRequest**](BudgetRequest.md)|  | 
 **name2** | **String**|  | 
 **name** | **String**|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**Budget**](Budget.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

