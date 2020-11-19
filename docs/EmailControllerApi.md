# MailslurpJavascriptApollo.EmailControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAllEmails**](EmailControllerApi.md#deleteAllEmails) | **DELETE** /emails | Delete all emails
[**deleteEmail**](EmailControllerApi.md#deleteEmail) | **DELETE** /emails/{emailId} | Delete an email
[**downloadAttachment**](EmailControllerApi.md#downloadAttachment) | **GET** /emails/{emailId}/attachments/{attachmentId} | Get email attachment bytes. If you have trouble with byte responses try the &#x60;downloadAttachmentBase64&#x60; response endpoints.
[**downloadAttachmentBase64**](EmailControllerApi.md#downloadAttachmentBase64) | **GET** /emails/{emailId}/attachments/{attachmentId}/base64 | Get email attachment as base64 encoded string (alternative to binary responses)
[**forwardEmail**](EmailControllerApi.md#forwardEmail) | **POST** /emails/{emailId}/forward | Forward email
[**getAttachmentMetaData**](EmailControllerApi.md#getAttachmentMetaData) | **GET** /emails/{emailId}/attachments/{attachmentId}/metadata | Get email attachment metadata
[**getAttachments**](EmailControllerApi.md#getAttachments) | **GET** /emails/{emailId}/attachments | Get all email attachment metadata
[**getEmail**](EmailControllerApi.md#getEmail) | **GET** /emails/{emailId} | Get email content
[**getEmailHTML**](EmailControllerApi.md#getEmailHTML) | **GET** /emails/{emailId}/html | Get email content as HTML
[**getEmailsPaginated**](EmailControllerApi.md#getEmailsPaginated) | **GET** /emails | Get all emails
[**getRawEmailContents**](EmailControllerApi.md#getRawEmailContents) | **GET** /emails/{emailId}/raw | Get raw email string
[**getRawEmailJson**](EmailControllerApi.md#getRawEmailJson) | **GET** /emails/{emailId}/raw/json | Get raw email in JSON
[**getUnreadEmailCount**](EmailControllerApi.md#getUnreadEmailCount) | **GET** /emails/unreadCount | Get unread email count
[**validateEmail**](EmailControllerApi.md#validateEmail) | **POST** /emails/{emailId}/validate | Validate email



## deleteAllEmails

> deleteAllEmails()

Delete all emails

Deletes all emails in your account. Be careful as emails cannot be recovered

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
apiInstance.deleteAllEmails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteEmail

> deleteEmail(emailId)

Delete an email

Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
apiInstance.deleteEmail(emailId, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadAttachment

> Blob downloadAttachment(attachmentId, emailId, opts)

Get email attachment bytes. If you have trouble with byte responses try the &#x60;downloadAttachmentBase64&#x60; response endpoints.

Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let attachmentId = "attachmentId_example"; // String | attachmentId
let emailId = null; // String | emailId
let opts = {
  'apiKey': "apiKey_example" // String | Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
};
apiInstance.downloadAttachment(attachmentId, emailId, opts, (error, data, response) => {
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
 **attachmentId** | **String**| attachmentId | 
 **emailId** | [**String**](.md)| emailId | 
 **apiKey** | **String**| Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly. | [optional] 

### Return type

**Blob**

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## downloadAttachmentBase64

> DownloadAttachmentDto downloadAttachmentBase64(attachmentId, emailId)

Get email attachment as base64 encoded string (alternative to binary responses)

Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the &#x60;downloadAttachment&#x60; method but allows some clients to get around issues with binary responses.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let attachmentId = "attachmentId_example"; // String | attachmentId
let emailId = null; // String | emailId
apiInstance.downloadAttachmentBase64(attachmentId, emailId, (error, data, response) => {
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
 **attachmentId** | **String**| attachmentId | 
 **emailId** | [**String**](.md)| emailId | 

### Return type

[**DownloadAttachmentDto**](DownloadAttachmentDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## forwardEmail

> forwardEmail(emailId, forwardEmailOptions)

Forward email

Forward an existing email to new recipients.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
let forwardEmailOptions = new MailslurpJavascriptApollo.ForwardEmailOptions(); // ForwardEmailOptions | forwardEmailOptions
apiInstance.forwardEmail(emailId, forwardEmailOptions, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 
 **forwardEmailOptions** | [**ForwardEmailOptions**](ForwardEmailOptions.md)| forwardEmailOptions | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getAttachmentMetaData

> AttachmentMetaData getAttachmentMetaData(attachmentId, emailId)

Get email attachment metadata

Returns the metadata such as name and content-type for a given attachment and email.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let attachmentId = "attachmentId_example"; // String | attachmentId
let emailId = null; // String | emailId
apiInstance.getAttachmentMetaData(attachmentId, emailId, (error, data, response) => {
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
 **attachmentId** | **String**| attachmentId | 
 **emailId** | [**String**](.md)| emailId | 

### Return type

[**AttachmentMetaData**](AttachmentMetaData.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachments

> [AttachmentMetaData] getAttachments(emailId)

Get all email attachment metadata

Returns an array of attachment metadata such as name and content-type for a given email if present.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
apiInstance.getAttachments(emailId, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 

### Return type

[**[AttachmentMetaData]**](AttachmentMetaData.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmail

> Email getEmail(emailId, opts)

Get email content

Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
let opts = {
  'decode': false // Boolean | Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance `=D7`). This can be a pain for testing
};
apiInstance.getEmail(emailId, opts, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 
 **decode** | **Boolean**| Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance &#x60;&#x3D;D7&#x60;). This can be a pain for testing | [optional] [default to false]

### Return type

[**Email**](Email.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEmailHTML

> String getEmailHTML(emailId, opts)

Get email content as HTML

Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: &#x60;?apiKey&#x3D;xxx&#x60;

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
let opts = {
  'decode': false // Boolean | decode
};
apiInstance.getEmailHTML(emailId, opts, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 
 **decode** | **Boolean**| decode | [optional] [default to false]

### Return type

**String**

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html


## getEmailsPaginated

> PageEmailProjection getEmailsPaginated(opts)

Get all emails

By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let opts = {
  'inboxId': ["null"], // [String] | Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
  'page': 0, // Number | Optional page index in email list pagination
  'size': 20, // Number | Optional page size in email list pagination
  'sort': "'ASC'", // String | Optional createdAt sort direction ASC or DESC
  'unreadOnly': false // Boolean | Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
};
apiInstance.getEmailsPaginated(opts, (error, data, response) => {
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
 **inboxId** | [**[String]**](String.md)| Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account. | [optional] 
 **page** | **Number**| Optional page index in email list pagination | [optional] [default to 0]
 **size** | **Number**| Optional page size in email list pagination | [optional] [default to 20]
 **sort** | **String**| Optional createdAt sort direction ASC or DESC | [optional] [default to &#39;ASC&#39;]
 **unreadOnly** | **Boolean**| Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly | [optional] [default to false]

### Return type

[**PageEmailProjection**](PageEmailProjection.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRawEmailContents

> String getRawEmailContents(emailId)

Get raw email string

Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
apiInstance.getRawEmailContents(emailId, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 

### Return type

**String**

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## getRawEmailJson

> RawEmailJson getRawEmailJson(emailId)

Get raw email in JSON

Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
apiInstance.getRawEmailJson(emailId, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 

### Return type

[**RawEmailJson**](RawEmailJson.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnreadEmailCount

> UnreadCount getUnreadEmailCount()

Get unread email count

Get number of emails unread

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
apiInstance.getUnreadEmailCount((error, data, response) => {
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

[**UnreadCount**](UnreadCount.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateEmail

> ValidationDto validateEmail(emailId)

Validate email

Validate the HTML content of email if HTML is found. Considered valid if no HTML.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.EmailControllerApi();
let emailId = null; // String | emailId
apiInstance.validateEmail(emailId, (error, data, response) => {
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
 **emailId** | [**String**](.md)| emailId | 

### Return type

[**ValidationDto**](ValidationDto.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

