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
import DescribeDomainOptions from '../model/DescribeDomainOptions';
import DescribeMailServerDomainResult from '../model/DescribeMailServerDomainResult';
import EmailVerificationResult from '../model/EmailVerificationResult';
import VerifyEmailAddressOptions from '../model/VerifyEmailAddressOptions';

/**
* MailServerController service.
* @module mailslurp/MailServerControllerApi
* @version 8.2.15
*/
export default class MailServerControllerApi extends ApiClient {

    /**
    * Constructs a new MailServerControllerApi. 
    * @alias module:mailslurp/MailServerControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Get DNS Mail Server records for a domain
     * @param {DescribeDomainOptions} describeOptions describeOptions
     * @return {Promise<DescribeMailServerDomainResult>}
     */
    async describeMailServerDomain(describeOptions) {
      let postBody = describeOptions;
      // verify the required parameter 'describeOptions' is set
      if (describeOptions === undefined || describeOptions === null) {
        throw new Error("Missing the required parameter 'describeOptions' when calling describeMailServerDomain");
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
      let returnType = DescribeMailServerDomainResult;

      return this.callApi(
        '/mail-server/describe/domain', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Verify the existence of an email address at a given mail server.
     * @param {VerifyEmailAddressOptions} verifyOptions verifyOptions
     * @return {Promise<EmailVerificationResult>}
     */
    async verifyEmailAddress(verifyOptions) {
      let postBody = verifyOptions;
      // verify the required parameter 'verifyOptions' is set
      if (verifyOptions === undefined || verifyOptions === null) {
        throw new Error("Missing the required parameter 'verifyOptions' when calling verifyEmailAddress");
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
      let returnType = EmailVerificationResult;

      return this.callApi(
        '/mail-server/verify/email-address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
