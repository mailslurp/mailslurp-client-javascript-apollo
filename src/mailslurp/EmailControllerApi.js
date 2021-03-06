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



import ApiClient from "../ApiClient";
import AttachmentMetaData from '../model/AttachmentMetaData';
import ContentMatchOptions from '../model/ContentMatchOptions';
import DownloadAttachmentDto from '../model/DownloadAttachmentDto';
import Email from '../model/Email';
import EmailContentMatchResult from '../model/EmailContentMatchResult';
import ForwardEmailOptions from '../model/ForwardEmailOptions';
import PageEmailProjection from '../model/PageEmailProjection';
import RawEmailJson from '../model/RawEmailJson';
import UnreadCount from '../model/UnreadCount';
import ValidationDto from '../model/ValidationDto';

/**
* EmailController service.
* @module mailslurp/EmailControllerApi
* @version 8.2.15
*/
export default class EmailControllerApi extends ApiClient {

    /**
    * Constructs a new EmailControllerApi. 
    * @alias module:mailslurp/EmailControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Delete all emails
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * @return {Promise}
     */
    async deleteAllEmails() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/emails', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an email
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * @param {String} emailId ID of email to delete
     * @return {Promise}
     */
    async deleteEmail(emailId) {
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling deleteEmail");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/emails/{emailId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * @param {String} attachmentId ID of attachment
     * @param {String} emailId ID of email
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     * @return {Promise<Blob>}
     */
    async downloadAttachment(attachmentId, emailId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling downloadAttachment");
      }
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling downloadAttachment");
      }

      let pathParams = {
        'attachmentId': attachmentId,
        'emailId': emailId
      };
      let queryParams = {
        'apiKey': opts['apiKey']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = 'Blob';

      return this.callApi(
        '/emails/{emailId}/attachments/{attachmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email attachment as base64 encoded string (alternative to binary responses)
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * @param {String} attachmentId ID of attachment
     * @param {String} emailId ID of email
     * @return {Promise<DownloadAttachmentDto>}
     */
    async downloadAttachmentBase64(attachmentId, emailId) {
      let postBody = null;
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling downloadAttachmentBase64");
      }
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling downloadAttachmentBase64");
      }

      let pathParams = {
        'attachmentId': attachmentId,
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DownloadAttachmentDto;

      return this.callApi(
        '/emails/{emailId}/attachments/{attachmentId}/base64', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Forward email
     * Forward an existing email to new recipients.
     * @param {String} emailId ID of email
     * @param {ForwardEmailOptions} forwardEmailOptions forwardEmailOptions
     * @return {Promise}
     */
    async forwardEmail(emailId, forwardEmailOptions) {
      let postBody = forwardEmailOptions;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling forwardEmail");
      }
      // verify the required parameter 'forwardEmailOptions' is set
      if (forwardEmailOptions === undefined || forwardEmailOptions === null) {
        throw new Error("Missing the required parameter 'forwardEmailOptions' when calling forwardEmail");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/emails/{emailId}/forward', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email attachment metadata
     * Returns the metadata such as name and content-type for a given attachment and email.
     * @param {String} attachmentId ID of attachment
     * @param {String} emailId ID of email
     * @return {Promise<AttachmentMetaData>}
     */
    async getAttachmentMetaData(attachmentId, emailId) {
      let postBody = null;
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachmentMetaData");
      }
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getAttachmentMetaData");
      }

      let pathParams = {
        'attachmentId': attachmentId,
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AttachmentMetaData;

      return this.callApi(
        '/emails/{emailId}/attachments/{attachmentId}/metadata', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all email attachment metadata
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * @param {String} emailId ID of email
     * @return {Promise<Array.<AttachmentMetaData>>}
     */
    async getAttachments(emailId) {
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getAttachments");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AttachmentMetaData];

      return this.callApi(
        '/emails/{emailId}/attachments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email content
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * @param {String} emailId emailId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.decode Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance `=D7`). This can be a pain for testing (default to false)
     * @return {Promise<Email>}
     */
    async getEmail(emailId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getEmail");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
        'decode': opts['decode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Email;

      return this.callApi(
        '/emails/{emailId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns. 
     * @param {String} emailId ID of email to match against
     * @param {ContentMatchOptions} contentMatchOptions contentMatchOptions
     * @return {Promise<EmailContentMatchResult>}
     */
    async getEmailContentMatch(emailId, contentMatchOptions) {
      let postBody = contentMatchOptions;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getEmailContentMatch");
      }
      // verify the required parameter 'contentMatchOptions' is set
      if (contentMatchOptions === undefined || contentMatchOptions === null) {
        throw new Error("Missing the required parameter 'contentMatchOptions' when calling getEmailContentMatch");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EmailContentMatchResult;

      return this.callApi(
        '/emails/{emailId}/contentMatch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get email content as HTML
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * @param {String} emailId emailId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.decode decode (default to false)
     * @return {Promise<String>}
     */
    async getEmailHTML(emailId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getEmailHTML");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
        'decode': opts['decode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['text/html'];
      let returnType = 'String';

      return this.callApi(
        '/emails/{emailId}/html', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all emails
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param {Number} opts.page Optional page index in email list pagination (default to 0)
     * @param {Number} opts.size Optional page size in email list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @param {Boolean} opts.unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly (default to false)
     * @return {Promise<PageEmailProjection>}
     */
    async getEmailsPaginated(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inboxId': this.buildCollectionParam(opts['inboxId'], 'multi'),
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
        'unreadOnly': opts['unreadOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageEmailProjection;

      return this.callApi(
        '/emails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get raw email string
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * @param {String} emailId ID of email
     * @return {Promise<String>}
     */
    async getRawEmailContents(emailId) {
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getRawEmailContents");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';

      return this.callApi(
        '/emails/{emailId}/raw', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get raw email in JSON
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * @param {String} emailId ID of email
     * @return {Promise<RawEmailJson>}
     */
    async getRawEmailJson(emailId) {
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getRawEmailJson");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RawEmailJson;

      return this.callApi(
        '/emails/{emailId}/raw/json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get unread email count
     * Get number of emails unread
     * @return {Promise<UnreadCount>}
     */
    async getUnreadEmailCount() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UnreadCount;

      return this.callApi(
        '/emails/unreadCount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate email
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML.
     * @param {String} emailId ID of email
     * @return {Promise<ValidationDto>}
     */
    async validateEmail(emailId) {
      let postBody = null;
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling validateEmail");
      }

      let pathParams = {
        'emailId': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ValidationDto;

      return this.callApi(
        '/emails/{emailId}/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
