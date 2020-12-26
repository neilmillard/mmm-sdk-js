# ControlYourMoneyApi.CategoryApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryCreate**](CategoryApi.md#categoryCreate) | **POST** /v1/budgets/{budget_id}/category/ | 
[**categoryList**](CategoryApi.md#categoryList) | **GET** /v1/budgets/{budget_id}/category/ | 
[**categoryPartialUpdate**](CategoryApi.md#categoryPartialUpdate) | **PATCH** /v1/budgets/{budget_id}/category/{id}/ | 
[**categoryRetrieve**](CategoryApi.md#categoryRetrieve) | **GET** /v1/budgets/{budget_id}/category/{id}/ | 
[**categoryTransactionList**](CategoryApi.md#categoryTransactionList) | **GET** /v1/budgets/{budget_id}/category/{category_id}/transaction/ | 
[**categoryUpdate**](CategoryApi.md#categoryUpdate) | **PUT** /v1/budgets/{budget_id}/category/{id}/ | 

<a name="categoryCreate"></a>
# **categoryCreate**
> Category categoryCreate(bodyname2hidden2categoryGroup2namehiddencategoryGroupbudgetId)



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

let apiInstance = new ControlYourMoneyApi.CategoryApi();
let body = new ControlYourMoneyApi.CategoryRequest(); // CategoryRequest | 
let name2 = "name_example"; // String | 
let hidden2 = true; // Boolean | 
let categoryGroup2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let name = "name_example"; // String | 
let hidden = true; // Boolean | 
let categoryGroup = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categoryCreate(bodyname2hidden2categoryGroup2namehiddencategoryGroupbudgetId, (error, data, response) => {
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
 **body** | [**CategoryRequest**](CategoryRequest.md)|  | 
 **name2** | **String**|  | 
 **hidden2** | **Boolean**|  | 
 **categoryGroup2** | [**String**](.md)|  | 
 **name** | **String**|  | 
 **hidden** | **Boolean**|  | 
 **categoryGroup** | [**String**](.md)|  | 
 **budgetId** | [**String**](.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="categoryList"></a>
# **categoryList**
> [Category] categoryList(budgetId)



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

let apiInstance = new ControlYourMoneyApi.CategoryApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categoryList(budgetId, (error, data, response) => {
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

[**[Category]**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoryPartialUpdate"></a>
# **categoryPartialUpdate**
> Category categoryPartialUpdate(budgetIdid, opts)



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

let apiInstance = new ControlYourMoneyApi.CategoryApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new ControlYourMoneyApi.PatchedCategoryRequest() // PatchedCategoryRequest | 
  'name2': "name_example" // String | 
  'hidden2': true // Boolean | 
  'categoryGroup2': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
  'name': "name_example" // String | 
  'hidden': true // Boolean | 
  'categoryGroup': "38400000-8cf0-11bd-b23e-10b96e4ef00d" // String | 
};
apiInstance.categoryPartialUpdate(budgetIdid, opts, (error, data, response) => {
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
 **body** | [**PatchedCategoryRequest**](PatchedCategoryRequest.md)|  | [optional] 
 **name2** | **String**|  | [optional] 
 **hidden2** | **Boolean**|  | [optional] 
 **categoryGroup2** | [**String**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **hidden** | **Boolean**|  | [optional] 
 **categoryGroup** | [**String**](.md)|  | [optional] 

### Return type

[**Category**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="categoryRetrieve"></a>
# **categoryRetrieve**
> Category categoryRetrieve(budgetId, id)



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

let apiInstance = new ControlYourMoneyApi.CategoryApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categoryRetrieve(budgetId, id, (error, data, response) => {
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

[**Category**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoryTransactionList"></a>
# **categoryTransactionList**
> [Transaction] categoryTransactionList(budgetId, categoryId)



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

let apiInstance = new ControlYourMoneyApi.CategoryApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let categoryId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categoryTransactionList(budgetId, categoryId, (error, data, response) => {
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
 **categoryId** | [**String**](.md)|  | 

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="categoryUpdate"></a>
# **categoryUpdate**
> Category categoryUpdate(bodyname2hidden2categoryGroup2namehiddencategoryGroupbudgetIdid)



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

let apiInstance = new ControlYourMoneyApi.CategoryApi();
let body = new ControlYourMoneyApi.CategoryRequest(); // CategoryRequest | 
let name2 = "name_example"; // String | 
let hidden2 = true; // Boolean | 
let categoryGroup2 = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let name = "name_example"; // String | 
let hidden = true; // Boolean | 
let categoryGroup = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.categoryUpdate(bodyname2hidden2categoryGroup2namehiddencategoryGroupbudgetIdid, (error, data, response) => {
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
 **body** | [**CategoryRequest**](CategoryRequest.md)|  | 
 **name2** | **String**|  | 
 **hidden2** | **Boolean**|  | 
 **categoryGroup2** | [**String**](.md)|  | 
 **name** | **String**|  | 
 **hidden** | **Boolean**|  | 
 **categoryGroup** | [**String**](.md)|  | 
 **budgetId** | [**String**](.md)|  | 
 **id** | [**String**](.md)|  | 

### Return type

[**Category**](Category.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

