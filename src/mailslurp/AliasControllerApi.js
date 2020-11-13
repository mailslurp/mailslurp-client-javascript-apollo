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
import Alias from '../model/Alias';
import CreateAnonymousAliasOptions from '../model/CreateAnonymousAliasOptions';
import CreateOwnedAliasOptions from '../model/CreateOwnedAliasOptions';
import PageAlias from '../model/PageAlias';

/**
* AliasController service.
* @module mailslurp/AliasControllerApi
* @version 8.0.13
*/
export default class AliasControllerApi extends ApiClient {

    /**
    * Constructs a new AliasControllerApi. 
    * @alias module:mailslurp/AliasControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Create an email alias
     * Create an email alias belonging to a user ID. To create anonymous aliases use the `createAnonymousAlias` method.
     * @param {CreateOwnedAliasOptions} createOwnedAliasOptions createOwnedAliasOptions
     * @return {Promise}
     */
    async createAlias(createOwnedAliasOptions) {
      let postBody = createOwnedAliasOptions;
      // verify the required parameter 'createOwnedAliasOptions' is set
      if (createOwnedAliasOptions === undefined || createOwnedAliasOptions === null) {
        throw new Error("Missing the required parameter 'createOwnedAliasOptions' when calling createAlias");
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
      let returnType = null;

      return this.callApi(
        '/aliases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an anonymous email alias
     * @param {CreateAnonymousAliasOptions} createAnonymousAliasOptions createAnonymousAliasOptions
     * @return {Promise<Alias>}
     */
    async createAnonymousAlias(createAnonymousAliasOptions) {
      let postBody = createAnonymousAliasOptions;
      // verify the required parameter 'createAnonymousAliasOptions' is set
      if (createAnonymousAliasOptions === undefined || createAnonymousAliasOptions === null) {
        throw new Error("Missing the required parameter 'createAnonymousAliasOptions' when calling createAnonymousAlias");
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
      let returnType = Alias;

      return this.callApi(
        '/aliases/anonymous', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an owned alias
     * @param {String} aliasId aliasId
     * @return {Promise}
     */
    async deleteAlias(aliasId) {
      let postBody = null;
      // verify the required parameter 'aliasId' is set
      if (aliasId === undefined || aliasId === null) {
        throw new Error("Missing the required parameter 'aliasId' when calling deleteAlias");
      }

      let pathParams = {
        'aliasId': aliasId
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
        '/aliases/{aliasId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an email alias
     * Get an email alias by ID
     * @param {String} aliasId aliasId
     * @return {Promise<Alias>}
     */
    async getAlias(aliasId) {
      let postBody = null;
      // verify the required parameter 'aliasId' is set
      if (aliasId === undefined || aliasId === null) {
        throw new Error("Missing the required parameter 'aliasId' when calling getAlias");
      }

      let pathParams = {
        'aliasId': aliasId
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
      let returnType = Alias;

      return this.callApi(
        '/aliases/{aliasId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all email aliases
     * Get all email aliases in paginated form
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in alias list pagination (default to 0)
     * @param {Number} opts.size Optional page size in alias list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageAlias>}
     */
    async getAliases(opts) {
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
      let returnType = PageAlias;

      return this.callApi(
        '/aliases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an owned alias
     * @param {String} aliasId aliasId
     * @param {CreateOwnedAliasOptions} createOwnedAliasOptions createOwnedAliasOptions
     * @return {Promise}
     */
    async updateAlias(aliasId, createOwnedAliasOptions) {
      let postBody = createOwnedAliasOptions;
      // verify the required parameter 'aliasId' is set
      if (aliasId === undefined || aliasId === null) {
        throw new Error("Missing the required parameter 'aliasId' when calling updateAlias");
      }
      // verify the required parameter 'createOwnedAliasOptions' is set
      if (createOwnedAliasOptions === undefined || createOwnedAliasOptions === null) {
        throw new Error("Missing the required parameter 'createOwnedAliasOptions' when calling updateAlias");
      }

      let pathParams = {
        'aliasId': aliasId
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
      let returnType = null;

      return this.callApi(
        '/aliases/{aliasId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
