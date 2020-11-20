# mailslurp-javascript-apollo

MailslurpJavascriptApollo - JavaScript client for mailslurp-javascript-apollo
MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more. 

## Resources
- [Homepage](https://www.mailslurp.com)
- Get an [API KEY](https://app.mailslurp.com/sign-up/)
- Generated [SDK Clients](https://www.mailslurp.com/docs/)
- [Examples](https://github.com/mailslurp/examples) repository

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 6.5.2
- Package version: 8.2.9
- Build package: org.openapitools.codegen.languages.JavascriptApolloClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install mailslurp-javascript-apollo --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your mailslurp-javascript-apollo from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MailslurpJavascriptApollo = require('mailslurp-javascript-apollo');

var defaultClient = MailslurpJavascriptApollo.ApiClient.instance;
// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix['x-api-key'] = "Token"

var api = new MailslurpJavascriptApollo.AliasControllerApi()
var createOwnedAliasOptions = new MailslurpJavascriptApollo.CreateOwnedAliasOptions(); // {CreateOwnedAliasOptions} createOwnedAliasOptions
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.createAlias(createOwnedAliasOptions, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.mailslurp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MailslurpJavascriptApollo.AliasControllerApi* | [**createAlias**](docs/AliasControllerApi.md#createAlias) | **POST** /aliases | Create an email alias
*MailslurpJavascriptApollo.AliasControllerApi* | [**createAnonymousAlias**](docs/AliasControllerApi.md#createAnonymousAlias) | **POST** /aliases/anonymous | Create an anonymous email alias
*MailslurpJavascriptApollo.AliasControllerApi* | [**deleteAlias**](docs/AliasControllerApi.md#deleteAlias) | **DELETE** /aliases/{aliasId} | Delete an owned alias
*MailslurpJavascriptApollo.AliasControllerApi* | [**getAlias**](docs/AliasControllerApi.md#getAlias) | **GET** /aliases/{aliasId} | Get an email alias
*MailslurpJavascriptApollo.AliasControllerApi* | [**getAliases**](docs/AliasControllerApi.md#getAliases) | **GET** /aliases | Get all email aliases
*MailslurpJavascriptApollo.AliasControllerApi* | [**updateAlias**](docs/AliasControllerApi.md#updateAlias) | **PUT** /aliases/{aliasId} | Update an owned alias
*MailslurpJavascriptApollo.AttachmentControllerApi* | [**uploadAttachment**](docs/AttachmentControllerApi.md#uploadAttachment) | **POST** /attachments | Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
*MailslurpJavascriptApollo.AttachmentControllerApi* | [**uploadAttachmentBytes**](docs/AttachmentControllerApi.md#uploadAttachmentBytes) | **POST** /attachments/bytes | Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
*MailslurpJavascriptApollo.AttachmentControllerApi* | [**uploadMultipartForm**](docs/AttachmentControllerApi.md#uploadMultipartForm) | **POST** /attachments/multipart | Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
*MailslurpJavascriptApollo.BulkActionsControllerApi* | [**bulkCreateInboxes**](docs/BulkActionsControllerApi.md#bulkCreateInboxes) | **POST** /bulk/inboxes | Bulk create Inboxes (email addresses)
*MailslurpJavascriptApollo.BulkActionsControllerApi* | [**bulkDeleteInboxes**](docs/BulkActionsControllerApi.md#bulkDeleteInboxes) | **DELETE** /bulk/inboxes | Bulk Delete Inboxes
*MailslurpJavascriptApollo.BulkActionsControllerApi* | [**bulkSendEmails**](docs/BulkActionsControllerApi.md#bulkSendEmails) | **POST** /bulk/send | Bulk Send Emails
*MailslurpJavascriptApollo.CommonActionsControllerApi* | [**createNewEmailAddress**](docs/CommonActionsControllerApi.md#createNewEmailAddress) | **POST** /createInbox | Create new random inbox
*MailslurpJavascriptApollo.CommonActionsControllerApi* | [**createNewEmailAddress1**](docs/CommonActionsControllerApi.md#createNewEmailAddress1) | **POST** /newEmailAddress | Create new random inbox
*MailslurpJavascriptApollo.CommonActionsControllerApi* | [**emptyInbox**](docs/CommonActionsControllerApi.md#emptyInbox) | **DELETE** /emptyInbox | Delete all emails in an inbox
*MailslurpJavascriptApollo.CommonActionsControllerApi* | [**sendEmailSimple**](docs/CommonActionsControllerApi.md#sendEmailSimple) | **POST** /sendEmail | Send an email
*MailslurpJavascriptApollo.ContactControllerApi* | [**createContact**](docs/ContactControllerApi.md#createContact) | **POST** /contacts | Create a contact
*MailslurpJavascriptApollo.ContactControllerApi* | [**deleteContact**](docs/ContactControllerApi.md#deleteContact) | **DELETE** /contacts/{contactId} | Delete contact
*MailslurpJavascriptApollo.ContactControllerApi* | [**getAllContacts**](docs/ContactControllerApi.md#getAllContacts) | **GET** /contacts/paginated | Get all contacts
*MailslurpJavascriptApollo.ContactControllerApi* | [**getContact**](docs/ContactControllerApi.md#getContact) | **GET** /contacts/{contactId} | Get contact
*MailslurpJavascriptApollo.ContactControllerApi* | [**getContacts**](docs/ContactControllerApi.md#getContacts) | **GET** /contacts | Get all contacts
*MailslurpJavascriptApollo.DomainControllerApi* | [**createDomain**](docs/DomainControllerApi.md#createDomain) | **POST** /domains | Create Domain
*MailslurpJavascriptApollo.DomainControllerApi* | [**deleteDomain**](docs/DomainControllerApi.md#deleteDomain) | **DELETE** /domains/{id} | Delete a domain
*MailslurpJavascriptApollo.DomainControllerApi* | [**getDomain**](docs/DomainControllerApi.md#getDomain) | **GET** /domains/{id} | Get a domain
*MailslurpJavascriptApollo.DomainControllerApi* | [**getDomains**](docs/DomainControllerApi.md#getDomains) | **GET** /domains | Get domains
*MailslurpJavascriptApollo.EmailControllerApi* | [**deleteAllEmails**](docs/EmailControllerApi.md#deleteAllEmails) | **DELETE** /emails | Delete all emails
*MailslurpJavascriptApollo.EmailControllerApi* | [**deleteEmail**](docs/EmailControllerApi.md#deleteEmail) | **DELETE** /emails/{emailId} | Delete an email
*MailslurpJavascriptApollo.EmailControllerApi* | [**downloadAttachment**](docs/EmailControllerApi.md#downloadAttachment) | **GET** /emails/{emailId}/attachments/{attachmentId} | Get email attachment bytes. If you have trouble with byte responses try the &#x60;downloadAttachmentBase64&#x60; response endpoints.
*MailslurpJavascriptApollo.EmailControllerApi* | [**downloadAttachmentBase64**](docs/EmailControllerApi.md#downloadAttachmentBase64) | **GET** /emails/{emailId}/attachments/{attachmentId}/base64 | Get email attachment as base64 encoded string (alternative to binary responses)
*MailslurpJavascriptApollo.EmailControllerApi* | [**forwardEmail**](docs/EmailControllerApi.md#forwardEmail) | **POST** /emails/{emailId}/forward | Forward email
*MailslurpJavascriptApollo.EmailControllerApi* | [**getAttachmentMetaData**](docs/EmailControllerApi.md#getAttachmentMetaData) | **GET** /emails/{emailId}/attachments/{attachmentId}/metadata | Get email attachment metadata
*MailslurpJavascriptApollo.EmailControllerApi* | [**getAttachments**](docs/EmailControllerApi.md#getAttachments) | **GET** /emails/{emailId}/attachments | Get all email attachment metadata
*MailslurpJavascriptApollo.EmailControllerApi* | [**getEmail**](docs/EmailControllerApi.md#getEmail) | **GET** /emails/{emailId} | Get email content
*MailslurpJavascriptApollo.EmailControllerApi* | [**getEmailHTML**](docs/EmailControllerApi.md#getEmailHTML) | **GET** /emails/{emailId}/html | Get email content as HTML
*MailslurpJavascriptApollo.EmailControllerApi* | [**getEmailsPaginated**](docs/EmailControllerApi.md#getEmailsPaginated) | **GET** /emails | Get all emails
*MailslurpJavascriptApollo.EmailControllerApi* | [**getRawEmailContents**](docs/EmailControllerApi.md#getRawEmailContents) | **GET** /emails/{emailId}/raw | Get raw email string
*MailslurpJavascriptApollo.EmailControllerApi* | [**getRawEmailJson**](docs/EmailControllerApi.md#getRawEmailJson) | **GET** /emails/{emailId}/raw/json | Get raw email in JSON
*MailslurpJavascriptApollo.EmailControllerApi* | [**getUnreadEmailCount**](docs/EmailControllerApi.md#getUnreadEmailCount) | **GET** /emails/unreadCount | Get unread email count
*MailslurpJavascriptApollo.EmailControllerApi* | [**validateEmail**](docs/EmailControllerApi.md#validateEmail) | **POST** /emails/{emailId}/validate | Validate email
*MailslurpJavascriptApollo.FormControllerApi* | [**submitForm**](docs/FormControllerApi.md#submitForm) | **POST** /forms | Submit a form to be parsed and sent as an email to an address determined by the form fields
*MailslurpJavascriptApollo.GroupControllerApi* | [**addContactsToGroup**](docs/GroupControllerApi.md#addContactsToGroup) | **PUT** /groups/{groupId}/contacts | Add contacts to a group
*MailslurpJavascriptApollo.GroupControllerApi* | [**createGroup**](docs/GroupControllerApi.md#createGroup) | **POST** /groups | Create a group
*MailslurpJavascriptApollo.GroupControllerApi* | [**deleteGroup**](docs/GroupControllerApi.md#deleteGroup) | **DELETE** /groups/{groupId} | Delete group
*MailslurpJavascriptApollo.GroupControllerApi* | [**getAllGroups**](docs/GroupControllerApi.md#getAllGroups) | **GET** /groups/paginated | Get all Contact Groups in paginated format
*MailslurpJavascriptApollo.GroupControllerApi* | [**getGroup**](docs/GroupControllerApi.md#getGroup) | **GET** /groups/{groupId} | Get group
*MailslurpJavascriptApollo.GroupControllerApi* | [**getGroupWithContacts**](docs/GroupControllerApi.md#getGroupWithContacts) | **GET** /groups/{groupId}/contacts | Get group and contacts belonging to it
*MailslurpJavascriptApollo.GroupControllerApi* | [**getGroupWithContactsPaginated**](docs/GroupControllerApi.md#getGroupWithContactsPaginated) | **GET** /groups/{groupId}/contacts-paginated | Get group and paginated contacts belonging to it
*MailslurpJavascriptApollo.GroupControllerApi* | [**getGroups**](docs/GroupControllerApi.md#getGroups) | **GET** /groups | Get all groups
*MailslurpJavascriptApollo.GroupControllerApi* | [**removeContactsFromGroup**](docs/GroupControllerApi.md#removeContactsFromGroup) | **DELETE** /groups/{groupId}/contacts | Remove contacts from a group
*MailslurpJavascriptApollo.InboxControllerApi* | [**createInbox**](docs/InboxControllerApi.md#createInbox) | **POST** /inboxes | Create an Inbox (email address)
*MailslurpJavascriptApollo.InboxControllerApi* | [**deleteAllInboxes**](docs/InboxControllerApi.md#deleteAllInboxes) | **DELETE** /inboxes | Delete all inboxes
*MailslurpJavascriptApollo.InboxControllerApi* | [**deleteInbox**](docs/InboxControllerApi.md#deleteInbox) | **DELETE** /inboxes/{inboxId} | Delete inbox
*MailslurpJavascriptApollo.InboxControllerApi* | [**getAllInboxes**](docs/InboxControllerApi.md#getAllInboxes) | **GET** /inboxes/paginated | List Inboxes Paginated
*MailslurpJavascriptApollo.InboxControllerApi* | [**getEmails**](docs/InboxControllerApi.md#getEmails) | **GET** /inboxes/{inboxId}/emails | Get emails in an Inbox
*MailslurpJavascriptApollo.InboxControllerApi* | [**getInbox**](docs/InboxControllerApi.md#getInbox) | **GET** /inboxes/{inboxId} | Get Inbox
*MailslurpJavascriptApollo.InboxControllerApi* | [**getInboxEmailsPaginated**](docs/InboxControllerApi.md#getInboxEmailsPaginated) | **GET** /inboxes/{inboxId}/emails/paginated | Get inbox emails paginated
*MailslurpJavascriptApollo.InboxControllerApi* | [**getInboxSentEmails**](docs/InboxControllerApi.md#getInboxSentEmails) | **GET** /inboxes/{inboxId}/sent | Get Inbox Sent Emails
*MailslurpJavascriptApollo.InboxControllerApi* | [**getInboxTags**](docs/InboxControllerApi.md#getInboxTags) | **GET** /inboxes/tags | Get inbox tags
*MailslurpJavascriptApollo.InboxControllerApi* | [**getInboxes**](docs/InboxControllerApi.md#getInboxes) | **GET** /inboxes | List Inboxes / Email Addresses
*MailslurpJavascriptApollo.InboxControllerApi* | [**sendEmail**](docs/InboxControllerApi.md#sendEmail) | **POST** /inboxes/{inboxId} | Send Email
*MailslurpJavascriptApollo.InboxControllerApi* | [**setInboxFavourited**](docs/InboxControllerApi.md#setInboxFavourited) | **PUT** /inboxes/{inboxId}/favourite | Set inbox favourited state
*MailslurpJavascriptApollo.InboxControllerApi* | [**updateInbox**](docs/InboxControllerApi.md#updateInbox) | **PATCH** /inboxes/{inboxId} | Update Inbox
*MailslurpJavascriptApollo.MailServerControllerApi* | [**describeMailServerDomain**](docs/MailServerControllerApi.md#describeMailServerDomain) | **POST** /mail-server/describe/domain | Get DNS Mail Server records for a domain
*MailslurpJavascriptApollo.MailServerControllerApi* | [**verifyEmailAddress**](docs/MailServerControllerApi.md#verifyEmailAddress) | **POST** /mail-server/verify/email-address | Verify the existence of an email address at a given mail server.
*MailslurpJavascriptApollo.SentEmailsControllerApi* | [**getSentEmail**](docs/SentEmailsControllerApi.md#getSentEmail) | **GET** /sent/{id} | Get sent email receipt
*MailslurpJavascriptApollo.SentEmailsControllerApi* | [**getSentEmails**](docs/SentEmailsControllerApi.md#getSentEmails) | **GET** /sent | Get all sent emails in paginated form
*MailslurpJavascriptApollo.TemplateControllerApi* | [**createTemplate**](docs/TemplateControllerApi.md#createTemplate) | **POST** /templates | Create a Template
*MailslurpJavascriptApollo.TemplateControllerApi* | [**deleteTemplate**](docs/TemplateControllerApi.md#deleteTemplate) | **DELETE** /templates/{TemplateId} | Delete Template
*MailslurpJavascriptApollo.TemplateControllerApi* | [**getAllTemplates**](docs/TemplateControllerApi.md#getAllTemplates) | **GET** /templates/paginated | Get all Templates in paginated format
*MailslurpJavascriptApollo.TemplateControllerApi* | [**getTemplate**](docs/TemplateControllerApi.md#getTemplate) | **GET** /templates/{TemplateId} | Get Template
*MailslurpJavascriptApollo.TemplateControllerApi* | [**getTemplates**](docs/TemplateControllerApi.md#getTemplates) | **GET** /templates | Get all Templates
*MailslurpJavascriptApollo.WaitForControllerApi* | [**waitFor**](docs/WaitForControllerApi.md#waitFor) | **POST** /waitFor | Wait for conditions to be met
*MailslurpJavascriptApollo.WaitForControllerApi* | [**waitForEmailCount**](docs/WaitForControllerApi.md#waitForEmailCount) | **GET** /waitForEmailCount | Wait for and return count number of emails 
*MailslurpJavascriptApollo.WaitForControllerApi* | [**waitForLatestEmail**](docs/WaitForControllerApi.md#waitForLatestEmail) | **GET** /waitForLatestEmail | Fetch inbox&#39;s latest email or if empty wait for an email to arrive
*MailslurpJavascriptApollo.WaitForControllerApi* | [**waitForMatchingEmail**](docs/WaitForControllerApi.md#waitForMatchingEmail) | **POST** /waitForMatchingEmails | Wait or return list of emails that match simple matching patterns
*MailslurpJavascriptApollo.WaitForControllerApi* | [**waitForNthEmail**](docs/WaitForControllerApi.md#waitForNthEmail) | **GET** /waitForNthEmail | Wait for or fetch the email with a given index in the inbox specified
*MailslurpJavascriptApollo.WebhookControllerApi* | [**createWebhook**](docs/WebhookControllerApi.md#createWebhook) | **POST** /inboxes/{inboxId}/webhooks | Attach a WebHook URL to an inbox
*MailslurpJavascriptApollo.WebhookControllerApi* | [**deleteWebhook**](docs/WebhookControllerApi.md#deleteWebhook) | **DELETE** /inboxes/{inboxId}/webhooks/{webhookId} | Delete and disable a Webhook for an Inbox
*MailslurpJavascriptApollo.WebhookControllerApi* | [**getAllWebhooks**](docs/WebhookControllerApi.md#getAllWebhooks) | **GET** /webhooks/paginated | List Webhooks Paginated
*MailslurpJavascriptApollo.WebhookControllerApi* | [**getWebhook**](docs/WebhookControllerApi.md#getWebhook) | **GET** /webhooks/{webhookId} | Get a webhook for an Inbox
*MailslurpJavascriptApollo.WebhookControllerApi* | [**getWebhooks**](docs/WebhookControllerApi.md#getWebhooks) | **GET** /inboxes/{inboxId}/webhooks | Get all Webhooks for an Inbox
*MailslurpJavascriptApollo.WebhookControllerApi* | [**sendTestData**](docs/WebhookControllerApi.md#sendTestData) | **POST** /webhooks/{webhookId}/test | Send webhook test data


## Documentation for Models

 - [MailslurpJavascriptApollo.Alias](docs/Alias.md)
 - [MailslurpJavascriptApollo.AttachmentMetaData](docs/AttachmentMetaData.md)
 - [MailslurpJavascriptApollo.BasicAuthOptions](docs/BasicAuthOptions.md)
 - [MailslurpJavascriptApollo.BulkSendEmailOptions](docs/BulkSendEmailOptions.md)
 - [MailslurpJavascriptApollo.ContactDto](docs/ContactDto.md)
 - [MailslurpJavascriptApollo.ContactProjection](docs/ContactProjection.md)
 - [MailslurpJavascriptApollo.CreateAnonymousAliasOptions](docs/CreateAnonymousAliasOptions.md)
 - [MailslurpJavascriptApollo.CreateContactOptions](docs/CreateContactOptions.md)
 - [MailslurpJavascriptApollo.CreateDomainOptions](docs/CreateDomainOptions.md)
 - [MailslurpJavascriptApollo.CreateGroupOptions](docs/CreateGroupOptions.md)
 - [MailslurpJavascriptApollo.CreateOwnedAliasOptions](docs/CreateOwnedAliasOptions.md)
 - [MailslurpJavascriptApollo.CreateTemplateOptions](docs/CreateTemplateOptions.md)
 - [MailslurpJavascriptApollo.CreateWebhookOptions](docs/CreateWebhookOptions.md)
 - [MailslurpJavascriptApollo.DescribeDomainOptions](docs/DescribeDomainOptions.md)
 - [MailslurpJavascriptApollo.DescribeMailServerDomainResult](docs/DescribeMailServerDomainResult.md)
 - [MailslurpJavascriptApollo.DomainDto](docs/DomainDto.md)
 - [MailslurpJavascriptApollo.DomainPreview](docs/DomainPreview.md)
 - [MailslurpJavascriptApollo.DownloadAttachmentDto](docs/DownloadAttachmentDto.md)
 - [MailslurpJavascriptApollo.Email](docs/Email.md)
 - [MailslurpJavascriptApollo.EmailAnalysis](docs/EmailAnalysis.md)
 - [MailslurpJavascriptApollo.EmailPreview](docs/EmailPreview.md)
 - [MailslurpJavascriptApollo.EmailProjection](docs/EmailProjection.md)
 - [MailslurpJavascriptApollo.EmailVerificationResult](docs/EmailVerificationResult.md)
 - [MailslurpJavascriptApollo.ForwardEmailOptions](docs/ForwardEmailOptions.md)
 - [MailslurpJavascriptApollo.GroupContactsDto](docs/GroupContactsDto.md)
 - [MailslurpJavascriptApollo.GroupDto](docs/GroupDto.md)
 - [MailslurpJavascriptApollo.GroupProjection](docs/GroupProjection.md)
 - [MailslurpJavascriptApollo.HTMLValidationResult](docs/HTMLValidationResult.md)
 - [MailslurpJavascriptApollo.Inbox](docs/Inbox.md)
 - [MailslurpJavascriptApollo.InboxProjection](docs/InboxProjection.md)
 - [MailslurpJavascriptApollo.MatchOption](docs/MatchOption.md)
 - [MailslurpJavascriptApollo.MatchOptions](docs/MatchOptions.md)
 - [MailslurpJavascriptApollo.NameServerRecord](docs/NameServerRecord.md)
 - [MailslurpJavascriptApollo.PageAlias](docs/PageAlias.md)
 - [MailslurpJavascriptApollo.PageContactProjection](docs/PageContactProjection.md)
 - [MailslurpJavascriptApollo.PageEmailPreview](docs/PageEmailPreview.md)
 - [MailslurpJavascriptApollo.PageEmailProjection](docs/PageEmailProjection.md)
 - [MailslurpJavascriptApollo.PageGroupProjection](docs/PageGroupProjection.md)
 - [MailslurpJavascriptApollo.PageInboxProjection](docs/PageInboxProjection.md)
 - [MailslurpJavascriptApollo.PageSentEmailProjection](docs/PageSentEmailProjection.md)
 - [MailslurpJavascriptApollo.PageTemplateProjection](docs/PageTemplateProjection.md)
 - [MailslurpJavascriptApollo.PageWebhookProjection](docs/PageWebhookProjection.md)
 - [MailslurpJavascriptApollo.Pageable](docs/Pageable.md)
 - [MailslurpJavascriptApollo.RawEmailJson](docs/RawEmailJson.md)
 - [MailslurpJavascriptApollo.SendEmailOptions](docs/SendEmailOptions.md)
 - [MailslurpJavascriptApollo.SentEmailDto](docs/SentEmailDto.md)
 - [MailslurpJavascriptApollo.SentEmailProjection](docs/SentEmailProjection.md)
 - [MailslurpJavascriptApollo.SetInboxFavouritedOptions](docs/SetInboxFavouritedOptions.md)
 - [MailslurpJavascriptApollo.SimpleSendEmailOptions](docs/SimpleSendEmailOptions.md)
 - [MailslurpJavascriptApollo.Sort](docs/Sort.md)
 - [MailslurpJavascriptApollo.TemplateDto](docs/TemplateDto.md)
 - [MailslurpJavascriptApollo.TemplateProjection](docs/TemplateProjection.md)
 - [MailslurpJavascriptApollo.TemplateVariable](docs/TemplateVariable.md)
 - [MailslurpJavascriptApollo.UnreadCount](docs/UnreadCount.md)
 - [MailslurpJavascriptApollo.UpdateGroupContacts](docs/UpdateGroupContacts.md)
 - [MailslurpJavascriptApollo.UpdateInboxOptions](docs/UpdateInboxOptions.md)
 - [MailslurpJavascriptApollo.UploadAttachmentOptions](docs/UploadAttachmentOptions.md)
 - [MailslurpJavascriptApollo.ValidationDto](docs/ValidationDto.md)
 - [MailslurpJavascriptApollo.ValidationMessage](docs/ValidationMessage.md)
 - [MailslurpJavascriptApollo.VerifyEmailAddressOptions](docs/VerifyEmailAddressOptions.md)
 - [MailslurpJavascriptApollo.WaitForConditions](docs/WaitForConditions.md)
 - [MailslurpJavascriptApollo.WebhookDto](docs/WebhookDto.md)
 - [MailslurpJavascriptApollo.WebhookProjection](docs/WebhookProjection.md)
 - [MailslurpJavascriptApollo.WebhookTestRequest](docs/WebhookTestRequest.md)
 - [MailslurpJavascriptApollo.WebhookTestResponse](docs/WebhookTestResponse.md)
 - [MailslurpJavascriptApollo.WebhookTestResult](docs/WebhookTestResult.md)


## Documentation for Authorization



### API_KEY


- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

