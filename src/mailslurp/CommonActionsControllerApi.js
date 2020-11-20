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
import Inbox from '../model/Inbox';
import SimpleSendEmailOptions from '../model/SimpleSendEmailOptions';

/**
* CommonActionsController service.
* @module mailslurp/CommonActionsControllerApi
* @version 8.2.10
*/
export default class CommonActionsControllerApi extends ApiClient {

    /**
    * Constructs a new CommonActionsControllerApi. 
    * @alias module:mailslurp/CommonActionsControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Create new random inbox
     * Returns an Inbox with an `id` and an `emailAddress`
     * @return {Promise<Inbox>}
     */
    async createNewEmailAddress() {
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
      let returnType = Inbox;

      return this.callApi(
        '/createInbox', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new random inbox
     * Returns an Inbox with an `id` and an `emailAddress`
     * @return {Promise<Inbox>}
     */
    async createNewEmailAddress1() {
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
      let returnType = Inbox;

      return this.callApi(
        '/newEmailAddress', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all emails in an inbox
     * Deletes all emails
     * @param {String} inboxId inboxId
     * @return {Promise}
     */
    async emptyInbox(inboxId) {
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling emptyInbox");
      }

      let pathParams = {
      };
      let queryParams = {
        'inboxId': inboxId
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
        '/emptyInbox', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send an email
     * If no senderId or inboxId provided a random email address will be used to send from.
     * @param {SimpleSendEmailOptions} emailOptions emailOptions
     * @return {Promise}
     */
    async sendEmailSimple(emailOptions) {
      let postBody = emailOptions;
      // verify the required parameter 'emailOptions' is set
      if (emailOptions === undefined || emailOptions === null) {
        throw new Error("Missing the required parameter 'emailOptions' when calling sendEmailSimple");
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
        '/sendEmail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
