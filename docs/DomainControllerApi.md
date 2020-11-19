# MailslurpJavascriptApollo.DomainControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomain**](DomainControllerApi.md#createDomain) | **POST** /domains | Create Domain
[**deleteDomain**](DomainControllerApi.md#deleteDomain) | **DELETE** /domains/{id} | Delete a domain
[**getDomain**](DomainControllerApi.md#getDomain) | **GET** /domains/{id} | Get a domain
[**getDomains**](DomainControllerApi.md#getDomains) | **GET** /domains | Get domains



## createDomain

> DomainDto createDomain(domainOptions)

Create Domain

Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider&#39;s DNS setup to verify the domain.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.DomainControllerApi();
let domainOptions = new MailslurpJavascriptApollo.CreateDomainOptions(); // CreateDomainOptions | domainOptions
apiInstance.createDomain(domainOptions, (error, data, response) => {
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
 **domainOptions** | [**CreateDomainOptions**](CreateDomainOptions.md)| domainOptions | 

### Return type

[**DomainDto**](DomainDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDomain

> deleteDomain(id)

Delete a domain

Delete a domain. This will disable any existing inboxes that use this domain.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.DomainControllerApi();
let id = null; // String | id
apiInstance.deleteDomain(id, (error, data, response) => {
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
 **id** | [**String**](.md)| id | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getDomain

> DomainDto getDomain(id)

Get a domain

Returns domain verification status and tokens for a given domain

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.DomainControllerApi();
let id = null; // String | id
apiInstance.getDomain(id, (error, data, response) => {
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
 **id** | [**String**](.md)| id | 

### Return type

[**DomainDto**](DomainDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDomains

> [DomainPreview] getDomains()

Get domains

List all custom domains you have created

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.DomainControllerApi();
apiInstance.getDomains((error, data, response) => {
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

[**[DomainPreview]**](DomainPreview.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

