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
import CreateTemplateOptions from '../model/CreateTemplateOptions';
import PageTemplateProjection from '../model/PageTemplateProjection';
import TemplateDto from '../model/TemplateDto';
import TemplateProjection from '../model/TemplateProjection';

/**
* TemplateController service.
* @module mailslurp/TemplateControllerApi
* @version 8.1.1
*/
export default class TemplateControllerApi extends ApiClient {

    /**
    * Constructs a new TemplateControllerApi. 
    * @alias module:mailslurp/TemplateControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Create a Template
     * @param {CreateTemplateOptions} createTemplateOptions createTemplateOptions
     * @return {Promise<TemplateDto>}
     */
    async createTemplate(createTemplateOptions) {
      let postBody = createTemplateOptions;
      // verify the required parameter 'createTemplateOptions' is set
      if (createTemplateOptions === undefined || createTemplateOptions === null) {
        throw new Error("Missing the required parameter 'createTemplateOptions' when calling createTemplate");
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
      let accepts = ['application/json'];
      let returnType = TemplateDto;

      return this.callApi(
        '/templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete Template
     * @param {String} templateId TemplateId
     * @return {Promise}
     */
    async deleteTemplate(templateId) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTemplate");
      }

      let pathParams = {
        'TemplateId': templateId
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
        '/templates/{TemplateId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all Templates in paginated format
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in inbox list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageTemplateProjection>}
     */
    async getAllTemplates(opts) {
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
      let returnType = PageTemplateProjection;

      return this.callApi(
        '/templates/paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Template
     * @param {String} templateId TemplateId
     * @return {Promise<TemplateDto>}
     */
    async getTemplate(templateId) {
      let postBody = null;
      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling getTemplate");
      }

      let pathParams = {
        'TemplateId': templateId
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
      let returnType = TemplateDto;

      return this.callApi(
        '/templates/{TemplateId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all Templates
     * @return {Promise<Array.<TemplateProjection>>}
     */
    async getTemplates() {
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
      let returnType = [TemplateProjection];

      return this.callApi(
        '/templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
