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
* @version 8.2.10
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
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment IDs. For legacy reasons the ID is returned in an array. Only a single ID is ever returned at one time. To send the attachments pass a list of attachment IDs with SendEmailOptions when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
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
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment IDs. For legacy reasons the ID is returned in an array. Only a single ID is ever returned at one time. To send the attachments pass a list of attachment IDs with SendEmailOptions when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * @param {Object} opts Optional parameters
     * @param {String} opts._string Optional contentType for file. For instance `application/pdf`
     * @param {String} opts.filename Optional filename to save upload with
     * @param {Blob} opts.byteArray Byte array request body
     * @return {Promise<Array.<String>>}
     */
    async uploadAttachmentBytes(opts) {
      opts = opts || {};
      let postBody = opts['byteArray'];

      let pathParams = {
      };
      let queryParams = {
        'String': opts['_string'],
        'filename': opts['filename']
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
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment IDs. For legacy reasons the ID is returned in an array. Only a single ID is ever returned at one time. To send the attachments pass a list of attachment IDs with SendEmailOptions when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * @param {File} file file
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentType Optional content type of attachment
     * @param {String} opts.filename Optional name of file
     * @param {String} opts.xFilename Optional content type header of attachment
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
