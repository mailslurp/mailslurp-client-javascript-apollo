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
import EmailPreview from '../model/EmailPreview';
import Inbox from '../model/Inbox';
import PageEmailPreview from '../model/PageEmailPreview';
import PageInboxProjection from '../model/PageInboxProjection';
import PageSentEmailProjection from '../model/PageSentEmailProjection';
import SendEmailOptions from '../model/SendEmailOptions';
import SetInboxFavouritedOptions from '../model/SetInboxFavouritedOptions';
import UpdateInboxOptions from '../model/UpdateInboxOptions';

/**
* InboxController service.
* @module mailslurp/InboxControllerApi
* @version 8.2.10
*/
export default class InboxControllerApi extends ApiClient {

    /**
    * Constructs a new InboxControllerApi. 
    * @alias module:mailslurp/InboxControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Create an Inbox (email address)
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.description Optional description for an inbox.
     * @param {String} opts.emailAddress Optional email address including domain you wish inbox to use (eg: test123@mydomain.com). Only supports domains that you have registered and verified with MailSlurp using dashboard or `createDomain` method.
     * @param {Date} opts.expiresAt Optional expires at timestamp. If your plan supports this feature you can specify when an inbox should expire. If left empty inbox will exist permanently or expire when your plan dictates
     * @param {Boolean} opts.favourite Is inbox favourited.
     * @param {String} opts.name Optional name for an inbox.
     * @param {Array.<String>} opts.tags Optional tags for an inbox. Can be used for searching and filtering inboxes.
     * @return {Promise<Inbox>}
     */
    async createInbox(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'description': opts['description'],
        'emailAddress': opts['emailAddress'],
        'expiresAt': opts['expiresAt'],
        'favourite': opts['favourite'],
        'name': opts['name'],
        'tags': this.buildCollectionParam(opts['tags'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Inbox;

      return this.callApi(
        '/inboxes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all inboxes
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * @return {Promise}
     */
    async deleteAllInboxes() {
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
        '/inboxes', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete inbox
     * Permanently delete an inbox and associated email address aswell as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * @param {String} inboxId inboxId
     * @return {Promise}
     */
    async deleteInbox(inboxId) {
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling deleteInbox");
      }

      let pathParams = {
        'inboxId': inboxId
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
        '/inboxes/{inboxId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Inboxes Paginated
     * List inboxes in paginated form. Allows for page index, page size, and sort direction. Can also filter by favourited or email address like pattern.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.favourite Optionally filter results for favourites only (default to false)
     * @param {Number} opts.page Optional page index in inbox list pagination (default to 0)
     * @param {String} opts.search Optionally filter by search words partial matching ID, tags, name, and email address
     * @param {Number} opts.size Optional page size in inbox list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @param {String} opts.tag Optionally filter by tags
     * @return {Promise<PageInboxProjection>}
     */
    async getAllInboxes(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'favourite': opts['favourite'],
        'page': opts['page'],
        'search': opts['search'],
        'size': opts['size'],
        'sort': opts['sort'],
        'tag': opts['tag']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageInboxProjection;

      return this.callApi(
        '/inboxes/paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get emails in an Inbox
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * @param {String} inboxId Id of inbox that emails belongs to
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Limit the result set, ordered by received date time sort direction
     * @param {Number} opts.minCount Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @param {Number} opts.retryTimeout Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @param {Date} opts.since Exclude emails received before this ISO 8601 date time
     * @param {String} opts.sort Sort the results by received date and direction ASC or DESC
     * @return {Promise<Array.<EmailPreview>>}
     */
    async getEmails(inboxId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling getEmails");
      }

      let pathParams = {
        'inboxId': inboxId
      };
      let queryParams = {
        'limit': opts['limit'],
        'minCount': opts['minCount'],
        'retryTimeout': opts['retryTimeout'],
        'since': opts['since'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [EmailPreview];

      return this.callApi(
        '/inboxes/{inboxId}/emails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Inbox
     * Returns an inbox's properties, including its email address and ID.
     * @param {String} inboxId inboxId
     * @return {Promise<Inbox>}
     */
    async getInbox(inboxId) {
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling getInbox");
      }

      let pathParams = {
        'inboxId': inboxId
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
      let returnType = Inbox;

      return this.callApi(
        '/inboxes/{inboxId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get inbox emails paginated
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * @param {String} inboxId Id of inbox that emails belongs to
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in inbox emails list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox emails list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageEmailPreview>}
     */
    async getInboxEmailsPaginated(inboxId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling getInboxEmailsPaginated");
      }

      let pathParams = {
        'inboxId': inboxId
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageEmailPreview;

      return this.callApi(
        '/inboxes/{inboxId}/emails/paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Inbox Sent Emails
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * @param {String} inboxId inboxId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in inbox sent email list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox sent email list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageSentEmailProjection>}
     */
    async getInboxSentEmails(inboxId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling getInboxSentEmails");
      }

      let pathParams = {
        'inboxId': inboxId
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageSentEmailProjection;

      return this.callApi(
        '/inboxes/{inboxId}/sent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get inbox tags
     * Get all inbox tags
     * @return {Promise<Array.<String>>}
     */
    async getInboxTags() {
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
      let returnType = ['String'];

      return this.callApi(
        '/inboxes/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Inboxes / Email Addresses
     * List the inboxes you have created
     * @return {Promise<Array.<Inbox>>}
     */
    async getInboxes() {
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
      let returnType = [Inbox];

      return this.callApi(
        '/inboxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send Email
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails.
     * @param {String} inboxId ID of the inbox you want to send the email from
     * @param {Object} opts Optional parameters
     * @param {SendEmailOptions} opts.sendEmailOptions Options for the email
     * @return {Promise}
     */
    async sendEmail(inboxId, opts) {
      opts = opts || {};
      let postBody = opts['sendEmailOptions'];
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling sendEmail");
      }

      let pathParams = {
        'inboxId': inboxId
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
        '/inboxes/{inboxId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set inbox favourited state
     * Set and return new favourite state for an inbox
     * @param {String} inboxId inboxId
     * @param {SetInboxFavouritedOptions} setInboxFavouritedOptions setInboxFavouritedOptions
     * @return {Promise<Inbox>}
     */
    async setInboxFavourited(inboxId, setInboxFavouritedOptions) {
      let postBody = setInboxFavouritedOptions;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling setInboxFavourited");
      }
      // verify the required parameter 'setInboxFavouritedOptions' is set
      if (setInboxFavouritedOptions === undefined || setInboxFavouritedOptions === null) {
        throw new Error("Missing the required parameter 'setInboxFavouritedOptions' when calling setInboxFavourited");
      }

      let pathParams = {
        'inboxId': inboxId
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
      let returnType = Inbox;

      return this.callApi(
        '/inboxes/{inboxId}/favourite', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update Inbox
     * Update editable fields on an inbox
     * @param {String} inboxId inboxId
     * @param {UpdateInboxOptions} updateInboxOptions updateInboxOptions
     * @return {Promise<Inbox>}
     */
    async updateInbox(inboxId, updateInboxOptions) {
      let postBody = updateInboxOptions;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling updateInbox");
      }
      // verify the required parameter 'updateInboxOptions' is set
      if (updateInboxOptions === undefined || updateInboxOptions === null) {
        throw new Error("Missing the required parameter 'updateInboxOptions' when calling updateInbox");
      }

      let pathParams = {
        'inboxId': inboxId
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
      let returnType = Inbox;

      return this.callApi(
        '/inboxes/{inboxId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
