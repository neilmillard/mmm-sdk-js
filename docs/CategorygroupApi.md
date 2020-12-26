# MasterMyMoneyApi.CategorygroupApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categorygroupCreate**](CategorygroupApi.md#categorygroupCreate) | **POST** /v1/budgets/{budget_id}/categorygroup/ | 
[**categorygroupList**](CategorygroupApi.md#categorygroupList) | **GET** /v1/budgets/{budget_id}/categorygroup/ | 
[**categorygroupPartialUpdate**](CategorygroupApi.md#categorygroupPartialUpdate) | **PATCH** /v1/budgets/{budget_id}/categorygroup/{id}/ | 
[**categorygroupRetrieve**](CategorygroupApi.md#categorygroupRetrieve) | **GET** /v1/budgets/{budget_id}/categorygroup/{id}/ | 
[**categorygroupUpdate**](CategorygroupApi.md#categorygroupUpdate) | **PUT** /v1/budgets/{budget_id}/categorygroup/{id}/ | 

<a name="categorygroupCreate"></a>
# **categorygroupCreate**
> CategoryGroup categorygroupCreate(bodyname2hidden2deleted2namehiddendeletedbudgetId)



Concrete view for listing a queryset or creating a model instance.

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

let apiInstance = new MasterMyMoneyApi.CategorygroupApi();
let body = new MasterMyMoneyApi.CategoryGroupRequest(); // CategoryGroupRequest | 
let name2 = "name_example"; // String | 
let hidden2 = true; // Boolean | 
let deleted2 = true; // Boolean | 
let name = "name_example"; // String | 
let hidden = true; // Boolean | 
let deleted = true; // Boolean | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categorygroupCreate(bodyname2hidden2deleted2namehiddendeletedbudgetId, (error, data, response) => {
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
 **body** | [**CategoryGroupRequest**](CategoryGroupRequest.md)|  | 
 **name2** | **String**|  | 
 **hidden2** | **Boolean**|  | 
 **deleted2** | **Boolean**|  | 
 **name** | **String**|  | 
 **hidden** | **Boolean**|  | 
 **deleted** | **Boolean**|  | 
 **budgetId** | [**String**](.md)|  | 

### Return type

[**CategoryGroup**](CategoryGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="categorygroupList"></a>
# **categorygroupList**
> [CategoryGroup] categorygroupList(budgetId)



Concrete view for listing a queryset or creating a model instance.

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

let apiInstance = new MasterMyMoneyApi.CategorygroupApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categorygroupList(budgetId, (error, data, response) => {
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

[**[CategoryGroup]**](CategoryGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categorygroupPartialUpdate"></a>
# **categorygroupPartialUpdate**
> CategoryGroup categorygroupPartialUpdate(budgetIdid, opts)



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

let apiInstance = new MasterMyMoneyApi.CategorygroupApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new MasterMyMoneyApi.PatchedCategoryGroupRequest() // PatchedCategoryGroupRequest | 
  'name2': "name_example" // String | 
  'hidden2': true // Boolean | 
  'deleted2': true // Boolean | 
  'name': "name_example" // String | 
  'hidden': true // Boolean | 
  'deleted': true // Boolean | 
};
apiInstance.categorygroupPartialUpdate(budgetIdid, opts, (error, data, response) => {
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
 **body** | [**PatchedCategoryGroupRequest**](PatchedCategoryGroupRequest.md)|  | [optional] 
 **name2** | **String**|  | [optional] 
 **hidden2** | **Boolean**|  | [optional] 
 **deleted2** | **Boolean**|  | [optional] 
 **name** | **String**|  | [optional] 
 **hidden** | **Boolean**|  | [optional] 
 **deleted** | **Boolean**|  | [optional] 

### Return type

[**CategoryGroup**](CategoryGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="categorygroupRetrieve"></a>
# **categorygroupRetrieve**
> CategoryGroup categorygroupRetrieve(budgetId, id)



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

let apiInstance = new MasterMyMoneyApi.CategorygroupApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categorygroupRetrieve(budgetId, id, (error, data, response) => {
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

[**CategoryGroup**](CategoryGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categorygroupUpdate"></a>
# **categorygroupUpdate**
> CategoryGroup categorygroupUpdate(bodyname2hidden2deleted2namehiddendeletedbudgetIdid)



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

let apiInstance = new MasterMyMoneyApi.CategorygroupApi();
let body = new MasterMyMoneyApi.CategoryGroupRequest(); // CategoryGroupRequest | 
let name2 = "name_example"; // String | 
let hidden2 = true; // Boolean | 
let deleted2 = true; // Boolean | 
let name = "name_example"; // String | 
let hidden = true; // Boolean | 
let deleted = true; // Boolean | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categorygroupUpdate(bodyname2hidden2deleted2namehiddendeletedbudgetIdid, (error, data, response) => {
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
 **body** | [**CategoryGroupRequest**](CategoryGroupRequest.md)|  | 
 **name2** | **String**|  | 
 **hidden2** | **Boolean**|  | 
 **deleted2** | **Boolean**|  | 
 **name** | **String**|  | 
 **hidden** | **Boolean**|  | 
 **deleted** | **Boolean**|  | 
 **budgetId** | [**String**](.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**CategoryGroup**](CategoryGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

