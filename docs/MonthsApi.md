# ControlYourMoneyApi.MonthsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**monthsCategoryPartialUpdate**](MonthsApi.md#monthsCategoryPartialUpdate) | **PATCH** /v1/budgets/{budget_id}/months/{year}-{month}/category/{category_id}/ | 
[**monthsCategoryRetrieve**](MonthsApi.md#monthsCategoryRetrieve) | **GET** /v1/budgets/{budget_id}/months/{year}-{month}/category/{category_id}/ | 
[**monthsList**](MonthsApi.md#monthsList) | **GET** /v1/budgets/{budget_id}/months/ | 
[**monthsRetrieve**](MonthsApi.md#monthsRetrieve) | **GET** /v1/budgets/{budget_id}/months/{year}-{month}/ | 

<a name="monthsCategoryPartialUpdate"></a>
# **monthsCategoryPartialUpdate**
> Envelope monthsCategoryPartialUpdate(budgetIdcategoryIdmonthyear, opts)



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

let apiInstance = new ControlYourMoneyApi.MonthsApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let categoryId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let month = 56; // Number | 
let year = 56; // Number | 
let opts = { 
  'body': new ControlYourMoneyApi.PatchedEnvelopeRequest() // PatchedEnvelopeRequest | 
  'budgeted2': 56 // Number | 
  'activity2': 56 // Number | 
  'balance2': 56 // Number | 
  'budgeted': 56 // Number | 
  'activity': 56 // Number | 
  'balance': 56 // Number | 
};
apiInstance.monthsCategoryPartialUpdate(budgetIdcategoryIdmonthyear, opts, (error, data, response) => {
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
 **month** | **Number**|  | 
 **year** | **Number**|  | 
 **body** | [**PatchedEnvelopeRequest**](PatchedEnvelopeRequest.md)|  | [optional] 
 **budgeted2** | **Number**|  | [optional] 
 **activity2** | **Number**|  | [optional] 
 **balance2** | **Number**|  | [optional] 
 **budgeted** | **Number**|  | [optional] 
 **activity** | **Number**|  | [optional] 
 **balance** | **Number**|  | [optional] 

### Return type

[**Envelope**](Envelope.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="monthsCategoryRetrieve"></a>
# **monthsCategoryRetrieve**
> Envelope monthsCategoryRetrieve(budgetId, categoryId, month, year)



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

let apiInstance = new ControlYourMoneyApi.MonthsApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let categoryId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let month = 56; // Number | 
let year = 56; // Number | 

apiInstance.monthsCategoryRetrieve(budgetId, categoryId, month, year, (error, data, response) => {
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
 **month** | **Number**|  | 
 **year** | **Number**|  | 

### Return type

[**Envelope**](Envelope.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="monthsList"></a>
# **monthsList**
> [Month] monthsList(budgetId)



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

let apiInstance = new ControlYourMoneyApi.MonthsApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.monthsList(budgetId, (error, data, response) => {
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

[**[Month]**](Month.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="monthsRetrieve"></a>
# **monthsRetrieve**
> Month monthsRetrieve(budgetId, month, year)



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

let apiInstance = new ControlYourMoneyApi.MonthsApi();
let budgetId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let month = 56; // Number | 
let year = 56; // Number | 

apiInstance.monthsRetrieve(budgetId, month, year, (error, data, response) => {
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
 **month** | **Number**|  | 
 **year** | **Number**|  | 

### Return type

[**Month**](Month.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

