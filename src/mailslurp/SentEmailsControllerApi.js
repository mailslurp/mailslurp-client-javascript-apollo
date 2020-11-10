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
import PageSentEmailProjection from '../model/PageSentEmailProjection';
import SentEmailDto from '../model/SentEmailDto';

/**
* SentEmailsController service.
* @module mailslurp/SentEmailsControllerApi
* @version 8.0.5
*/
export default class SentEmailsControllerApi extends ApiClient {

    /**
    * Constructs a new SentEmailsControllerApi. 
    * @alias module:mailslurp/SentEmailsControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Get sent email receipt
     * @param {String} id id
     * @return {Promise<SentEmailDto>}
     */
    async getSentEmail(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSentEmail");
      }

      let pathParams = {
        'id': id
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
      let returnType = SentEmailDto;

      return this.callApi(
        '/sent/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all sent emails in paginated form
     * @param {Object} opts Optional parameters
     * @param {String} opts.inboxId Optional inboxId to filter sender of sent emails by
     * @param {Number} opts.page Optional page index in inbox sent email list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox sent email list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageSentEmailProjection>}
     */
    async getSentEmails(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inboxId': opts['inboxId'],
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
        '/sent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}