# MailslurpJavascriptApollo.ContactControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContact**](ContactControllerApi.md#createContact) | **POST** /contacts | Create a contact
[**deleteContact**](ContactControllerApi.md#deleteContact) | **DELETE** /contacts/{contactId} | Delete contact
[**getAllContacts**](ContactControllerApi.md#getAllContacts) | **GET** /contacts/paginated | Get all contacts
[**getContact**](ContactControllerApi.md#getContact) | **GET** /contacts/{contactId} | Get contact
[**getContacts**](ContactControllerApi.md#getContacts) | **GET** /contacts | Get all contacts



## createContact

> ContactDto createContact(createContactOptions)

Create a contact

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.ContactControllerApi();
let createContactOptions = new MailslurpJavascriptApollo.CreateContactOptions(); // CreateContactOptions | createContactOptions
apiInstance.createContact(createContactOptions, (error, data, response) => {
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
 **createContactOptions** | [**CreateContactOptions**](CreateContactOptions.md)| createContactOptions | 

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteContact

> deleteContact(contactId)

Delete contact

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.ContactControllerApi();
let contactId = null; // String | contactId
apiInstance.deleteContact(contactId, (error, data, response) => {
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
 **contactId** | [**String**](.md)| contactId | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllContacts

> PageContactProjection getAllContacts(opts)

Get all contacts

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.ContactControllerApi();
let opts = {
  'page': 0, // Number | Optional page index in inbox list pagination
  'size': 20, // Number | Optional page size in inbox list pagination
  'sort': "'ASC'" // String | Optional createdAt sort direction ASC or DESC
};
apiInstance.getAllContacts(opts, (error, data, response) => {
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
 **page** | **Number**| Optional page index in inbox list pagination | [optional] [default to 0]
 **size** | **Number**| Optional page size in inbox list pagination | [optional] [default to 20]
 **sort** | **String**| Optional createdAt sort direction ASC or DESC | [optional] [default to &#39;ASC&#39;]

### Return type

[**PageContactProjection**](PageContactProjection.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContact

> ContactDto getContact(contactId)

Get contact

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.ContactControllerApi();
let contactId = null; // String | contactId
apiInstance.getContact(contactId, (error, data, response) => {
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
 **contactId** | [**String**](.md)| contactId | 

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContacts

> [ContactProjection] getContacts()

Get all contacts

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.ContactControllerApi();
apiInstance.getContacts((error, data, response) => {
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

[**[ContactProjection]**](ContactProjection.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

