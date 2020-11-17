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
import CreateDomainOptions from '../model/CreateDomainOptions';
import DomainDto from '../model/DomainDto';
import DomainPreview from '../model/DomainPreview';

/**
* DomainController service.
* @module mailslurp/DomainControllerApi
* @version 8.0.19
*/
export default class DomainControllerApi extends ApiClient {

    /**
    * Constructs a new DomainControllerApi. 
    * @alias module:mailslurp/DomainControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Create Domain
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * @param {CreateDomainOptions} domainOptions domainOptions
     * @return {Promise<DomainDto>}
     */
    async createDomain(domainOptions) {
      let postBody = domainOptions;
      // verify the required parameter 'domainOptions' is set
      if (domainOptions === undefined || domainOptions === null) {
        throw new Error("Missing the required parameter 'domainOptions' when calling createDomain");
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
      let returnType = DomainDto;

      return this.callApi(
        '/domains', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a domain
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * @param {String} id id
     * @return {Promise}
     */
    async deleteDomain(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteDomain");
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
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/domains/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a domain
     * Returns domain verification status and tokens for a given domain
     * @param {String} id id
     * @return {Promise<DomainDto>}
     */
    async getDomain(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDomain");
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
      let returnType = DomainDto;

      return this.callApi(
        '/domains/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get domains
     * List all custom domains you have created
     * @return {Promise<Array.<DomainPreview>>}
     */
    async getDomains() {
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
      let returnType = [DomainPreview];

      return this.callApi(
        '/domains', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
