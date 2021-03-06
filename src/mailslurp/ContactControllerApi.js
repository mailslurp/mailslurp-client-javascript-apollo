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
import ContactDto from '../model/ContactDto';
import ContactProjection from '../model/ContactProjection';
import CreateContactOptions from '../model/CreateContactOptions';
import PageContactProjection from '../model/PageContactProjection';

/**
* ContactController service.
* @module mailslurp/ContactControllerApi
* @version 8.2.15
*/
export default class ContactControllerApi extends ApiClient {

    /**
    * Constructs a new ContactControllerApi. 
    * @alias module:mailslurp/ContactControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Create a contact
     * @param {CreateContactOptions} createContactOptions createContactOptions
     * @return {Promise<ContactDto>}
     */
    async createContact(createContactOptions) {
      let postBody = createContactOptions;
      // verify the required parameter 'createContactOptions' is set
      if (createContactOptions === undefined || createContactOptions === null) {
        throw new Error("Missing the required parameter 'createContactOptions' when calling createContact");
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
      let returnType = ContactDto;

      return this.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete contact
     * @param {String} contactId contactId
     * @return {Promise}
     */
    async deleteContact(contactId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling deleteContact");
      }

      let pathParams = {
        'contactId': contactId
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
        '/contacts/{contactId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all contacts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in inbox list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageContactProjection>}
     */
    async getAllContacts(opts) {
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
      let returnType = PageContactProjection;

      return this.callApi(
        '/contacts/paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get contact
     * @param {String} contactId contactId
     * @return {Promise<ContactDto>}
     */
    async getContact(contactId) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getContact");
      }

      let pathParams = {
        'contactId': contactId
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
      let returnType = ContactDto;

      return this.callApi(
        '/contacts/{contactId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all contacts
     * @return {Promise<Array.<ContactProjection>>}
     */
    async getContacts() {
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
      let returnType = [ContactProjection];

      return this.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
