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
import UploadAttachmentOptions from '../model/UploadAttachmentOptions';

/**
* AttachmentController service.
* @module mailslurp/AttachmentControllerApi
* @version 8.2.7
*/
export default class AttachmentControllerApi extends ApiClient {

    /**
    * Constructs a new AttachmentControllerApi. 
    * @alias module:mailslurp/AttachmentControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Upload an attachment for sending using base64 file encoding
     * When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
     * @param {UploadAttachmentOptions} uploadOptions uploadOptions
     * @return {Promise<Array.<String>>}
     */
    async uploadAttachment(uploadOptions) {
      let postBody = uploadOptions;
      // verify the required parameter 'uploadOptions' is set
      if (uploadOptions === undefined || uploadOptions === null) {
        throw new Error("Missing the required parameter 'uploadOptions' when calling uploadAttachment");
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
      let returnType = ['String'];

      return this.callApi(
        '/attachments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload an attachment for sending using file byte stream input octet stream
     * When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename Optional filename to save upload with
     * @return {Promise<Array.<String>>}
     */
    async uploadAttachmentBytes(opts) {
      opts = opts || {};
      let postBody = opts['filename'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = ['String'];

      return this.callApi(
        '/attachments/bytes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Upload an attachment for sending using Multipart Form
     * When sending emails with attachments first upload each attachment with this endpoint. Record the returned attachment IDs. Then use these attachment IDs in the SendEmailOptions when sending an email. This means that attachments can easily be reused.
     * @param {File} file file
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType contentType
     * @param {String} opts.filename filename
     * @param {String} opts.xFilename x-filename
     * @return {Promise<Array.<String>>}
     */
    async uploadMultipartForm(file, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadMultipartForm");
      }

      let pathParams = {
      };
      let queryParams = {
        'contentType': opts['contentType'],
        'filename': opts['filename'],
        'x-filename': opts['xFilename']
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ['String'];

      return this.callApi(
        '/attachments/multipart', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
