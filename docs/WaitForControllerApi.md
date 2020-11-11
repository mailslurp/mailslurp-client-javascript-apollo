# MailslurpJavascriptApollo.WaitForControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**waitFor**](WaitForControllerApi.md#waitFor) | **POST** /waitFor | Wait for conditions to be met
[**waitForEmailCount**](WaitForControllerApi.md#waitForEmailCount) | **GET** /waitForEmailCount | Wait for and return count number of emails 
[**waitForLatestEmail**](WaitForControllerApi.md#waitForLatestEmail) | **GET** /waitForLatestEmail | Fetch inbox&#39;s latest email or if empty wait for an email to arrive
[**waitForMatchingEmail**](WaitForControllerApi.md#waitForMatchingEmail) | **POST** /waitForMatchingEmails | Wait or return list of emails that match simple matching patterns
[**waitForNthEmail**](WaitForControllerApi.md#waitForNthEmail) | **GET** /waitForNthEmail | Wait for or fetch the email with a given index in the inbox specified



## waitFor

> [EmailPreview] waitFor(opts)

Wait for conditions to be met

Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.WaitForControllerApi();
let opts = {
  'waitForConditions': new MailslurpJavascriptApollo.WaitForConditions() // WaitForConditions | Conditions to wait for
};
apiInstance.waitFor(opts, (error, data, response) => {
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
 **waitForConditions** | [**WaitForConditions**](WaitForConditions.md)| Conditions to wait for | [optional] 

### Return type

[**[EmailPreview]**](EmailPreview.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## waitForEmailCount

> [EmailPreview] waitForEmailCount(opts)

Wait for and return count number of emails 

If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.WaitForControllerApi();
let opts = {
  'count': 56, // Number | Number of emails to wait for. Must be greater that 1
  'inboxId': null, // String | Id of the inbox we are fetching emails from
  'timeout': 789, // Number | Max milliseconds to wait
  'unreadOnly': false // Boolean | Optional filter for unread only
};
apiInstance.waitForEmailCount(opts, (error, data, response) => {
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
 **count** | **Number**| Number of emails to wait for. Must be greater that 1 | [optional] 
 **inboxId** | [**String**](.md)| Id of the inbox we are fetching emails from | [optional] 
 **timeout** | **Number**| Max milliseconds to wait | [optional] 
 **unreadOnly** | **Boolean**| Optional filter for unread only | [optional] [default to false]

### Return type

[**[EmailPreview]**](EmailPreview.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## waitForLatestEmail

> Email waitForLatestEmail(opts)

Fetch inbox&#39;s latest email or if empty wait for an email to arrive

Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set &#x60;unreadOnly&#x3D;true&#x60; or see the other receive methods such as &#x60;waitForNthEmail&#x60; or &#x60;waitForEmailCount&#x60;.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.WaitForControllerApi();
let opts = {
  'inboxId': null, // String | Id of the inbox we are fetching emails from
  'timeout': 789, // Number | Max milliseconds to wait
  'unreadOnly': false // Boolean | Optional filter for unread only.
};
apiInstance.waitForLatestEmail(opts, (error, data, response) => {
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
 **inboxId** | [**String**](.md)| Id of the inbox we are fetching emails from | [optional] 
 **timeout** | **Number**| Max milliseconds to wait | [optional] 
 **unreadOnly** | **Boolean**| Optional filter for unread only. | [optional] [default to false]

### Return type

[**Email**](Email.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## waitForMatchingEmail

> [EmailPreview] waitForMatchingEmail(matchOptions, opts)

Wait or return list of emails that match simple matching patterns

Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the &#x60;MatchOptions&#x60; object for options.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.WaitForControllerApi();
let matchOptions = new MailslurpJavascriptApollo.MatchOptions(); // MatchOptions | matchOptions
let opts = {
  'count': 56, // Number | Number of emails to wait for. Must be greater that 1
  'inboxId': null, // String | Id of the inbox we are fetching emails from
  'timeout': 789, // Number | Max milliseconds to wait
  'unreadOnly': false // Boolean | Optional filter for unread only
};
apiInstance.waitForMatchingEmail(matchOptions, opts, (error, data, response) => {
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
 **matchOptions** | [**MatchOptions**](MatchOptions.md)| matchOptions | 
 **count** | **Number**| Number of emails to wait for. Must be greater that 1 | [optional] 
 **inboxId** | [**String**](.md)| Id of the inbox we are fetching emails from | [optional] 
 **timeout** | **Number**| Max milliseconds to wait | [optional] 
 **unreadOnly** | **Boolean**| Optional filter for unread only | [optional] [default to false]

### Return type

[**[EmailPreview]**](EmailPreview.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## waitForNthEmail

> Email waitForNthEmail(opts)

Wait for or fetch the email with a given index in the inbox specified

If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.

### Example

```javascript
import MailslurpJavascriptApollo from 'mailslurp-javascript-apollo';
let defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
let API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

let apiInstance = new MailslurpJavascriptApollo.WaitForControllerApi();
let opts = {
  'inboxId': null, // String | Id of the inbox you are fetching emails from
  'index': 0, // Number | Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index=1
  'timeout': 789, // Number | Max milliseconds to wait for the nth email if not already present
  'unreadOnly': false // Boolean | Optional filter for unread only
};
apiInstance.waitForNthEmail(opts, (error, data, response) => {
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
 **inboxId** | [**String**](.md)| Id of the inbox you are fetching emails from | [optional] 
 **index** | **Number**| Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1 | [optional] [default to 0]
 **timeout** | **Number**| Max milliseconds to wait for the nth email if not already present | [optional] 
 **unreadOnly** | **Boolean**| Optional filter for unread only | [optional] [default to false]

### Return type

[**Email**](Email.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

