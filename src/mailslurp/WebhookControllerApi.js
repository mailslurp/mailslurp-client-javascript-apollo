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
import CreateWebhookOptions from '../model/CreateWebhookOptions';
import PageWebhookProjection from '../model/PageWebhookProjection';
import WebhookDto from '../model/WebhookDto';
import WebhookTestResult from '../model/WebhookTestResult';

/**
* WebhookController service.
* @module mailslurp/WebhookControllerApi
* @version 8.2.7
*/
export default class WebhookControllerApi extends ApiClient {

    /**
    * Constructs a new WebhookControllerApi. 
    * @alias module:mailslurp/WebhookControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Attach a WebHook URL to an inbox
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * @param {String} inboxId inboxId
     * @param {CreateWebhookOptions} webhookOptions webhookOptions
     * @return {Promise<WebhookDto>}
     */
    async createWebhook(inboxId, webhookOptions) {
      let postBody = webhookOptions;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling createWebhook");
      }
      // verify the required parameter 'webhookOptions' is set
      if (webhookOptions === undefined || webhookOptions === null) {
        throw new Error("Missing the required parameter 'webhookOptions' when calling createWebhook");
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
      let returnType = WebhookDto;

      return this.callApi(
        '/inboxes/{inboxId}/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete and disable a Webhook for an Inbox
     * @param {String} inboxId inboxId
     * @param {String} webhookId webhookId
     * @return {Promise}
     */
    async deleteWebhook(inboxId, webhookId) {
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling deleteWebhook");
      }
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhook");
      }

      let pathParams = {
        'inboxId': inboxId,
        'webhookId': webhookId
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
        '/inboxes/{inboxId}/webhooks/{webhookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List Webhooks Paginated
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in inbox list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageWebhookProjection>}
     */
    async getAllWebhooks(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = PageWebhookProjection;

      return this.callApi(
        '/webhooks/paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a webhook for an Inbox
     * @param {String} webhookId webhookId
     * @return {Promise<WebhookDto>}
     */
    async getWebhook(webhookId) {
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhook");
      }

      let pathParams = {
        'webhookId': webhookId
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
      let returnType = WebhookDto;

      return this.callApi(
        '/webhooks/{webhookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all Webhooks for an Inbox
     * @param {String} inboxId inboxId
     * @return {Promise<Array.<WebhookDto>>}
     */
    async getWebhooks(inboxId) {
      let postBody = null;
      // verify the required parameter 'inboxId' is set
      if (inboxId === undefined || inboxId === null) {
        throw new Error("Missing the required parameter 'inboxId' when calling getWebhooks");
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
      let returnType = [WebhookDto];

      return this.callApi(
        '/inboxes/{inboxId}/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Send webhook test data
     * @param {String} webhookId webhookId
     * @return {Promise<WebhookTestResult>}
     */
    async sendTestData(webhookId) {
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling sendTestData");
      }

      let pathParams = {
        'webhookId': webhookId
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
      let returnType = WebhookTestResult;

      return this.callApi(
        '/webhooks/{webhookId}/test', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
