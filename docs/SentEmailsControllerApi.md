# MailslurpJavascriptApollo.SentEmailsControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSentEmail**](SentEmailsControllerApi.md#getSentEmail) | **GET** /sent/{id} | Get sent email receipt
[**getSentEmails**](SentEmailsControllerApi.md#getSentEmails) | **GET** /sent | Get all sent emails in paginated form



## getSentEmail

> SentEmailDto getSentEmail(id)

Get sent email receipt

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.SentEmailsControllerApi();
let id = null; // String | id
apiInstance.getSentEmail(id, (error, data, response) => {
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

[**SentEmailDto**](SentEmailDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSentEmails

> PageSentEmailProjection getSentEmails(opts)

Get all sent emails in paginated form

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.SentEmailsControllerApi();
let opts = {
  'inboxId': null, // String | Optional inboxId to filter sender of sent emails by
  'page': 0, // Number | Optional page index in inbox sent email list pagination
  'size': 20, // Number | Optional page size in inbox sent email list pagination
  'sort': "'ASC'" // String | Optional createdAt sort direction ASC or DESC
};
apiInstance.getSentEmails(opts, (error, data, response) => {
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
 **inboxId** | [**String**](.md)| Optional inboxId to filter sender of sent emails by | [optional] 
 **page** | **Number**| Optional page index in inbox sent email list pagination | [optional] [default to 0]
 **size** | **Number**| Optional page size in inbox sent email list pagination | [optional] [default to 20]
 **sort** | **String**| Optional createdAt sort direction ASC or DESC | [optional] [default to &#39;ASC&#39;]

### Return type

[**PageSentEmailProjection**](PageSentEmailProjection.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

