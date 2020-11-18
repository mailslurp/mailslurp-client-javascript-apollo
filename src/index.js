/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.   ## Resources - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
 *
 * The version of the OpenAPI document: 6.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Alias from './model/Alias';
import AttachmentMetaData from './model/AttachmentMetaData';
import BasicAuthOptions from './model/BasicAuthOptions';
import BulkSendEmailOptions from './model/BulkSendEmailOptions';
import ContactDto from './model/ContactDto';
import ContactProjection from './model/ContactProjection';
import CreateAnonymousAliasOptions from './model/CreateAnonymousAliasOptions';
import CreateContactOptions from './model/CreateContactOptions';
import CreateDomainOptions from './model/CreateDomainOptions';
import CreateGroupOptions from './model/CreateGroupOptions';
import CreateOwnedAliasOptions from './model/CreateOwnedAliasOptions';
import CreateTemplateOptions from './model/CreateTemplateOptions';
import CreateWebhookOptions from './model/CreateWebhookOptions';
import DescribeDomainOptions from './model/DescribeDomainOptions';
import DescribeMailServerDomainResult from './model/DescribeMailServerDomainResult';
import DomainDto from './model/DomainDto';
import DomainPreview from './model/DomainPreview';
import Email from './model/Email';
import EmailAnalysis from './model/EmailAnalysis';
import EmailPreview from './model/EmailPreview';
import EmailProjection from './model/EmailProjection';
import EmailVerificationResult from './model/EmailVerificationResult';
import ForwardEmailOptions from './model/ForwardEmailOptions';
import GroupContactsDto from './model/GroupContactsDto';
import GroupDto from './model/GroupDto';
import GroupProjection from './model/GroupProjection';
import HTMLValidationResult from './model/HTMLValidationResult';
import Inbox from './model/Inbox';
import InboxProjection from './model/InboxProjection';
import MatchOption from './model/MatchOption';
import MatchOptions from './model/MatchOptions';
import NameServerRecord from './model/NameServerRecord';
import PageAlias from './model/PageAlias';
import PageContactProjection from './model/PageContactProjection';
import PageEmailPreview from './model/PageEmailPreview';
import PageEmailProjection from './model/PageEmailProjection';
import PageGroupProjection from './model/PageGroupProjection';
import PageInboxProjection from './model/PageInboxProjection';
import PageSentEmailProjection from './model/PageSentEmailProjection';
import PageTemplateProjection from './model/PageTemplateProjection';
import PageWebhookProjection from './model/PageWebhookProjection';
import Pageable from './model/Pageable';
import RawEmailJson from './model/RawEmailJson';
import SendEmailOptions from './model/SendEmailOptions';
import SentEmailDto from './model/SentEmailDto';
import SentEmailProjection from './model/SentEmailProjection';
import SetInboxFavouritedOptions from './model/SetInboxFavouritedOptions';
import SimpleSendEmailOptions from './model/SimpleSendEmailOptions';
import Sort from './model/Sort';
import TemplateDto from './model/TemplateDto';
import TemplateProjection from './model/TemplateProjection';
import TemplateVariable from './model/TemplateVariable';
import UnreadCount from './model/UnreadCount';
import UpdateGroupContacts from './model/UpdateGroupContacts';
import UpdateInboxOptions from './model/UpdateInboxOptions';
import UploadAttachmentOptions from './model/UploadAttachmentOptions';
import ValidationDto from './model/ValidationDto';
import ValidationMessage from './model/ValidationMessage';
import VerifyEmailAddressOptions from './model/VerifyEmailAddressOptions';
import WaitForConditions from './model/WaitForConditions';
import WebhookDto from './model/WebhookDto';
import WebhookProjection from './model/WebhookProjection';
import WebhookTestRequest from './model/WebhookTestRequest';
import WebhookTestResponse from './model/WebhookTestResponse';
import WebhookTestResult from './model/WebhookTestResult';
import AliasControllerApi from './mailslurp/AliasControllerApi';
import AttachmentControllerApi from './mailslurp/AttachmentControllerApi';
import BulkActionsControllerApi from './mailslurp/BulkActionsControllerApi';
import CommonActionsControllerApi from './mailslurp/CommonActionsControllerApi';
import ContactControllerApi from './mailslurp/ContactControllerApi';
import DomainControllerApi from './mailslurp/DomainControllerApi';
import EmailControllerApi from './mailslurp/EmailControllerApi';
import FormControllerApi from './mailslurp/FormControllerApi';
import GroupControllerApi from './mailslurp/GroupControllerApi';
import InboxControllerApi from './mailslurp/InboxControllerApi';
import MailServerControllerApi from './mailslurp/MailServerControllerApi';
import SentEmailsControllerApi from './mailslurp/SentEmailsControllerApi';
import TemplateControllerApi from './mailslurp/TemplateControllerApi';
import WaitForControllerApi from './mailslurp/WaitForControllerApi';
import WebhookControllerApi from './mailslurp/WebhookControllerApi';


/**
* MailSlurp.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MailslurpJavascriptApollo = require('index'); // See note below*.
* var xxxSvc = new MailslurpJavascriptApollo.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MailslurpJavascriptApollo.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MailslurpJavascriptApollo.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MailslurpJavascriptApollo.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 8.0.23
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Alias model constructor.
     * @property {module:model/Alias}
     */
    Alias,

    /**
     * The AttachmentMetaData model constructor.
     * @property {module:model/AttachmentMetaData}
     */
    AttachmentMetaData,

    /**
     * The BasicAuthOptions model constructor.
     * @property {module:model/BasicAuthOptions}
     */
    BasicAuthOptions,

    /**
     * The BulkSendEmailOptions model constructor.
     * @property {module:model/BulkSendEmailOptions}
     */
    BulkSendEmailOptions,

    /**
     * The ContactDto model constructor.
     * @property {module:model/ContactDto}
     */
    ContactDto,

    /**
     * The ContactProjection model constructor.
     * @property {module:model/ContactProjection}
     */
    ContactProjection,

    /**
     * The CreateAnonymousAliasOptions model constructor.
     * @property {module:model/CreateAnonymousAliasOptions}
     */
    CreateAnonymousAliasOptions,

    /**
     * The CreateContactOptions model constructor.
     * @property {module:model/CreateContactOptions}
     */
    CreateContactOptions,

    /**
     * The CreateDomainOptions model constructor.
     * @property {module:model/CreateDomainOptions}
     */
    CreateDomainOptions,

    /**
     * The CreateGroupOptions model constructor.
     * @property {module:model/CreateGroupOptions}
     */
    CreateGroupOptions,

    /**
     * The CreateOwnedAliasOptions model constructor.
     * @property {module:model/CreateOwnedAliasOptions}
     */
    CreateOwnedAliasOptions,

    /**
     * The CreateTemplateOptions model constructor.
     * @property {module:model/CreateTemplateOptions}
     */
    CreateTemplateOptions,

    /**
     * The CreateWebhookOptions model constructor.
     * @property {module:model/CreateWebhookOptions}
     */
    CreateWebhookOptions,

    /**
     * The DescribeDomainOptions model constructor.
     * @property {module:model/DescribeDomainOptions}
     */
    DescribeDomainOptions,

    /**
     * The DescribeMailServerDomainResult model constructor.
     * @property {module:model/DescribeMailServerDomainResult}
     */
    DescribeMailServerDomainResult,

    /**
     * The DomainDto model constructor.
     * @property {module:model/DomainDto}
     */
    DomainDto,

    /**
     * The DomainPreview model constructor.
     * @property {module:model/DomainPreview}
     */
    DomainPreview,

    /**
     * The Email model constructor.
     * @property {module:model/Email}
     */
    Email,

    /**
     * The EmailAnalysis model constructor.
     * @property {module:model/EmailAnalysis}
     */
    EmailAnalysis,

    /**
     * The EmailPreview model constructor.
     * @property {module:model/EmailPreview}
     */
    EmailPreview,

    /**
     * The EmailProjection model constructor.
     * @property {module:model/EmailProjection}
     */
    EmailProjection,

    /**
     * The EmailVerificationResult model constructor.
     * @property {module:model/EmailVerificationResult}
     */
    EmailVerificationResult,

    /**
     * The ForwardEmailOptions model constructor.
     * @property {module:model/ForwardEmailOptions}
     */
    ForwardEmailOptions,

    /**
     * The GroupContactsDto model constructor.
     * @property {module:model/GroupContactsDto}
     */
    GroupContactsDto,

    /**
     * The GroupDto model constructor.
     * @property {module:model/GroupDto}
     */
    GroupDto,

    /**
     * The GroupProjection model constructor.
     * @property {module:model/GroupProjection}
     */
    GroupProjection,

    /**
     * The HTMLValidationResult model constructor.
     * @property {module:model/HTMLValidationResult}
     */
    HTMLValidationResult,

    /**
     * The Inbox model constructor.
     * @property {module:model/Inbox}
     */
    Inbox,

    /**
     * The InboxProjection model constructor.
     * @property {module:model/InboxProjection}
     */
    InboxProjection,

    /**
     * The MatchOption model constructor.
     * @property {module:model/MatchOption}
     */
    MatchOption,

    /**
     * The MatchOptions model constructor.
     * @property {module:model/MatchOptions}
     */
    MatchOptions,

    /**
     * The NameServerRecord model constructor.
     * @property {module:model/NameServerRecord}
     */
    NameServerRecord,

    /**
     * The PageAlias model constructor.
     * @property {module:model/PageAlias}
     */
    PageAlias,

    /**
     * The PageContactProjection model constructor.
     * @property {module:model/PageContactProjection}
     */
    PageContactProjection,

    /**
     * The PageEmailPreview model constructor.
     * @property {module:model/PageEmailPreview}
     */
    PageEmailPreview,

    /**
     * The PageEmailProjection model constructor.
     * @property {module:model/PageEmailProjection}
     */
    PageEmailProjection,

    /**
     * The PageGroupProjection model constructor.
     * @property {module:model/PageGroupProjection}
     */
    PageGroupProjection,

    /**
     * The PageInboxProjection model constructor.
     * @property {module:model/PageInboxProjection}
     */
    PageInboxProjection,

    /**
     * The PageSentEmailProjection model constructor.
     * @property {module:model/PageSentEmailProjection}
     */
    PageSentEmailProjection,

    /**
     * The PageTemplateProjection model constructor.
     * @property {module:model/PageTemplateProjection}
     */
    PageTemplateProjection,

    /**
     * The PageWebhookProjection model constructor.
     * @property {module:model/PageWebhookProjection}
     */
    PageWebhookProjection,

    /**
     * The Pageable model constructor.
     * @property {module:model/Pageable}
     */
    Pageable,

    /**
     * The RawEmailJson model constructor.
     * @property {module:model/RawEmailJson}
     */
    RawEmailJson,

    /**
     * The SendEmailOptions model constructor.
     * @property {module:model/SendEmailOptions}
     */
    SendEmailOptions,

    /**
     * The SentEmailDto model constructor.
     * @property {module:model/SentEmailDto}
     */
    SentEmailDto,

    /**
     * The SentEmailProjection model constructor.
     * @property {module:model/SentEmailProjection}
     */
    SentEmailProjection,

    /**
     * The SetInboxFavouritedOptions model constructor.
     * @property {module:model/SetInboxFavouritedOptions}
     */
    SetInboxFavouritedOptions,

    /**
     * The SimpleSendEmailOptions model constructor.
     * @property {module:model/SimpleSendEmailOptions}
     */
    SimpleSendEmailOptions,

    /**
     * The Sort model constructor.
     * @property {module:model/Sort}
     */
    Sort,

    /**
     * The TemplateDto model constructor.
     * @property {module:model/TemplateDto}
     */
    TemplateDto,

    /**
     * The TemplateProjection model constructor.
     * @property {module:model/TemplateProjection}
     */
    TemplateProjection,

    /**
     * The TemplateVariable model constructor.
     * @property {module:model/TemplateVariable}
     */
    TemplateVariable,

    /**
     * The UnreadCount model constructor.
     * @property {module:model/UnreadCount}
     */
    UnreadCount,

    /**
     * The UpdateGroupContacts model constructor.
     * @property {module:model/UpdateGroupContacts}
     */
    UpdateGroupContacts,

    /**
     * The UpdateInboxOptions model constructor.
     * @property {module:model/UpdateInboxOptions}
     */
    UpdateInboxOptions,

    /**
     * The UploadAttachmentOptions model constructor.
     * @property {module:model/UploadAttachmentOptions}
     */
    UploadAttachmentOptions,

    /**
     * The ValidationDto model constructor.
     * @property {module:model/ValidationDto}
     */
    ValidationDto,

    /**
     * The ValidationMessage model constructor.
     * @property {module:model/ValidationMessage}
     */
    ValidationMessage,

    /**
     * The VerifyEmailAddressOptions model constructor.
     * @property {module:model/VerifyEmailAddressOptions}
     */
    VerifyEmailAddressOptions,

    /**
     * The WaitForConditions model constructor.
     * @property {module:model/WaitForConditions}
     */
    WaitForConditions,

    /**
     * The WebhookDto model constructor.
     * @property {module:model/WebhookDto}
     */
    WebhookDto,

    /**
     * The WebhookProjection model constructor.
     * @property {module:model/WebhookProjection}
     */
    WebhookProjection,

    /**
     * The WebhookTestRequest model constructor.
     * @property {module:model/WebhookTestRequest}
     */
    WebhookTestRequest,

    /**
     * The WebhookTestResponse model constructor.
     * @property {module:model/WebhookTestResponse}
     */
    WebhookTestResponse,

    /**
     * The WebhookTestResult model constructor.
     * @property {module:model/WebhookTestResult}
     */
    WebhookTestResult,

    /**
    * The AliasControllerApi service constructor.
    * @property {module:mailslurp/AliasControllerApi}
    */
    AliasControllerApi,

    /**
    * The AttachmentControllerApi service constructor.
    * @property {module:mailslurp/AttachmentControllerApi}
    */
    AttachmentControllerApi,

    /**
    * The BulkActionsControllerApi service constructor.
    * @property {module:mailslurp/BulkActionsControllerApi}
    */
    BulkActionsControllerApi,

    /**
    * The CommonActionsControllerApi service constructor.
    * @property {module:mailslurp/CommonActionsControllerApi}
    */
    CommonActionsControllerApi,

    /**
    * The ContactControllerApi service constructor.
    * @property {module:mailslurp/ContactControllerApi}
    */
    ContactControllerApi,

    /**
    * The DomainControllerApi service constructor.
    * @property {module:mailslurp/DomainControllerApi}
    */
    DomainControllerApi,

    /**
    * The EmailControllerApi service constructor.
    * @property {module:mailslurp/EmailControllerApi}
    */
    EmailControllerApi,

    /**
    * The FormControllerApi service constructor.
    * @property {module:mailslurp/FormControllerApi}
    */
    FormControllerApi,

    /**
    * The GroupControllerApi service constructor.
    * @property {module:mailslurp/GroupControllerApi}
    */
    GroupControllerApi,

    /**
    * The InboxControllerApi service constructor.
    * @property {module:mailslurp/InboxControllerApi}
    */
    InboxControllerApi,

    /**
    * The MailServerControllerApi service constructor.
    * @property {module:mailslurp/MailServerControllerApi}
    */
    MailServerControllerApi,

    /**
    * The SentEmailsControllerApi service constructor.
    * @property {module:mailslurp/SentEmailsControllerApi}
    */
    SentEmailsControllerApi,

    /**
    * The TemplateControllerApi service constructor.
    * @property {module:mailslurp/TemplateControllerApi}
    */
    TemplateControllerApi,

    /**
    * The WaitForControllerApi service constructor.
    * @property {module:mailslurp/WaitForControllerApi}
    */
    WaitForControllerApi,

    /**
    * The WebhookControllerApi service constructor.
    * @property {module:mailslurp/WebhookControllerApi}
    */
    WebhookControllerApi
};
