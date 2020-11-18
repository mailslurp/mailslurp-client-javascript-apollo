# MailslurpJavascriptApollo.WebhookDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basicAuth** | **Boolean** | Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself. | [optional] 
**createdAt** | **Date** | When the webhook was created | [optional] 
**id** | **String** | ID of the Webhook | [optional] 
**inboxId** | **String** | The inbox that the Webhook will be triggered by | [optional] 
**method** | **String** | HTTP method that your server endpoint must listen for | [optional] 
**name** | **String** | Name of the webhook | [optional] 
**payloadJsonSchema** | **String** | JSON Schema for the payload that will be sent to your URL via the HTTP method described. | [optional] 
**updatedAt** | **Date** |  | 
**url** | **String** | URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema. | [optional] 



## Enum: MethodEnum


* `GET` (value: `"GET"`)

* `HEAD` (value: `"HEAD"`)

* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)

* `PATCH` (value: `"PATCH"`)

* `DELETE` (value: `"DELETE"`)

* `OPTIONS` (value: `"OPTIONS"`)

* `TRACE` (value: `"TRACE"`)




