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

/**
* FormController service.
* @module mailslurp/FormControllerApi
* @version 8.2.1
*/
export default class FormControllerApi extends ApiClient {

    /**
    * Constructs a new FormControllerApi. 
    * @alias module:mailslurp/FormControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Submit a form to be parsed and sent as an email to an address determined by the form fields
     * This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address or a `_toAlias` email alias ID to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_toAlias=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.  
     * @param {Object} opts Optional parameters
     * @param {String} opts.emailAddress Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @param {String} opts.redirectTo Optional URL to redirect form submitter to after submission. If not present user will see a success message.
     * @param {String} opts.spamCheck Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @param {String} opts.subject Optional subject of the email that will be sent.
     * @param {String} opts.successMessage Optional success message to display if no _redirectTo present.
     * @param {String} opts.to The email address that submitted form should be sent to. Either this or _toAlias must be present for a form to be successfully submitted..
     * @param {String} opts.toAlias ID of an email alias to that form should be sent to. Aliases must be created before submission and can be used to hide an email address and reduce spam.
     * @param {String} opts.otherParameters All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     * @return {Promise<String>}
     */
    async submitForm(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        '_emailAddress': opts['emailAddress'],
        '_redirectTo': opts['redirectTo'],
        '_spamCheck': opts['spamCheck'],
        '_subject': opts['subject'],
        '_successMessage': opts['successMessage'],
        '_to': opts['to'],
        '_toAlias': opts['toAlias'],
        'otherParameters': opts['otherParameters']
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['multipart/form-data', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.callApi(
        '/forms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
