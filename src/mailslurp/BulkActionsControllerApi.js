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
import BulkSendEmailOptions from '../model/BulkSendEmailOptions';
import Inbox from '../model/Inbox';

/**
* BulkActionsController service.
* @module mailslurp/BulkActionsControllerApi
* @version 8.2.1
*/
export default class BulkActionsControllerApi extends ApiClient {

    /**
    * Constructs a new BulkActionsControllerApi. 
    * @alias module:mailslurp/BulkActionsControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Bulk create Inboxes (email addresses)
     * @param {Number} count Number of inboxes to be created in bulk
     * @return {Promise<Array.<Inbox>>}
     */
    async bulkCreateInboxes(count) {
      let postBody = null;
      // verify the required parameter 'count' is set
      if (count === undefined || count === null) {
        throw new Error("Missing the required parameter 'count' when calling bulkCreateInboxes");
      }

      let pathParams = {
      };
      let queryParams = {
        'count': count
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
        '/bulk/inboxes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Bulk Delete Inboxes
     * @param {Array.<String>} ids ids
     * @return {Promise}
     */
    async bulkDeleteInboxes(ids) {
      let postBody = ids;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling bulkDeleteInboxes");
      }

      let pathParams = {
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
        '/bulk/inboxes', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Bulk Send Emails
     * @param {BulkSendEmailOptions} bulkSendEmailOptions bulkSendEmailOptions
     * @return {Promise}
     */
    async bulkSendEmails(bulkSendEmailOptions) {
      let postBody = bulkSendEmailOptions;
      // verify the required parameter 'bulkSendEmailOptions' is set
      if (bulkSendEmailOptions === undefined || bulkSendEmailOptions === null) {
        throw new Error("Missing the required parameter 'bulkSendEmailOptions' when calling bulkSendEmails");
      }

      let pathParams = {
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
        '/bulk/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
