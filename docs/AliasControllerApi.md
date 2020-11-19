# MailslurpJavascriptApollo.AliasControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAlias**](AliasControllerApi.md#createAlias) | **POST** /aliases | Create an email alias
[**createAnonymousAlias**](AliasControllerApi.md#createAnonymousAlias) | **POST** /aliases/anonymous | Create an anonymous email alias
[**deleteAlias**](AliasControllerApi.md#deleteAlias) | **DELETE** /aliases/{aliasId} | Delete an owned alias
[**getAlias**](AliasControllerApi.md#getAlias) | **GET** /aliases/{aliasId} | Get an email alias
[**getAliases**](AliasControllerApi.md#getAliases) | **GET** /aliases | Get all email aliases
[**updateAlias**](AliasControllerApi.md#updateAlias) | **PUT** /aliases/{aliasId} | Update an owned alias



## createAlias

> createAlias(createOwnedAliasOptions)

Create an email alias

Create an email alias belonging to a user ID. To create anonymous aliases use the &#x60;createAnonymousAlias&#x60; method.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.AliasControllerApi();
let createOwnedAliasOptions = new MailslurpJavascriptApollo.CreateOwnedAliasOptions(); // CreateOwnedAliasOptions | createOwnedAliasOptions
apiInstance.createAlias(createOwnedAliasOptions, (error, data, response) => {
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
 **createOwnedAliasOptions** | [**CreateOwnedAliasOptions**](CreateOwnedAliasOptions.md)| createOwnedAliasOptions | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAnonymousAlias

> Alias createAnonymousAlias(createAnonymousAliasOptions)

Create an anonymous email alias

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.AliasControllerApi();
let createAnonymousAliasOptions = new MailslurpJavascriptApollo.CreateAnonymousAliasOptions(); // CreateAnonymousAliasOptions | createAnonymousAliasOptions
apiInstance.createAnonymousAlias(createAnonymousAliasOptions, (error, data, response) => {
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
 **createAnonymousAliasOptions** | [**CreateAnonymousAliasOptions**](CreateAnonymousAliasOptions.md)| createAnonymousAliasOptions | 

### Return type

[**Alias**](Alias.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAlias

> deleteAlias(aliasId)

Delete an owned alias

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.AliasControllerApi();
let aliasId = null; // String | aliasId
apiInstance.deleteAlias(aliasId, (error, data, response) => {
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
 **aliasId** | [**String**](.md)| aliasId | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlias

> Alias getAlias(aliasId)

Get an email alias

Get an email alias by ID

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.AliasControllerApi();
let aliasId = null; // String | aliasId
apiInstance.getAlias(aliasId, (error, data, response) => {
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
 **aliasId** | [**String**](.md)| aliasId | 

### Return type

[**Alias**](Alias.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAliases

> PageAlias getAliases(opts)

Get all email aliases

Get all email aliases in paginated form

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.AliasControllerApi();
let opts = {
  'page': 0, // Number | Optional page index in alias list pagination
  'size': 20, // Number | Optional page size in alias list pagination
  'sort': "'ASC'" // String | Optional createdAt sort direction ASC or DESC
};
apiInstance.getAliases(opts, (error, data, response) => {
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
 **page** | **Number**| Optional page index in alias list pagination | [optional] [default to 0]
 **size** | **Number**| Optional page size in alias list pagination | [optional] [default to 20]
 **sort** | **String**| Optional createdAt sort direction ASC or DESC | [optional] [default to &#39;ASC&#39;]

### Return type

[**PageAlias**](PageAlias.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAlias

> updateAlias(aliasId, createOwnedAliasOptions)

Update an owned alias

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.AliasControllerApi();
let aliasId = null; // String | aliasId
let createOwnedAliasOptions = new MailslurpJavascriptApollo.CreateOwnedAliasOptions(); // CreateOwnedAliasOptions | createOwnedAliasOptions
apiInstance.updateAlias(aliasId, createOwnedAliasOptions, (error, data, response) => {
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
 **aliasId** | [**String**](.md)| aliasId | 
 **createOwnedAliasOptions** | [**CreateOwnedAliasOptions**](CreateOwnedAliasOptions.md)| createOwnedAliasOptions | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

