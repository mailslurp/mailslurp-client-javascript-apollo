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
import Email from '../model/Email';
import EmailPreview from '../model/EmailPreview';
import MatchOptions from '../model/MatchOptions';
import WaitForConditions from '../model/WaitForConditions';

/**
* WaitForController service.
* @module mailslurp/WaitForControllerApi
* @version 8.2.15
*/
export default class WaitForControllerApi extends ApiClient {

    /**
    * Constructs a new WaitForControllerApi. 
    * @alias module:mailslurp/WaitForControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Wait for conditions to be met
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * @param {Object} opts Optional parameters
     * @param {WaitForConditions} opts.waitForConditions Conditions to wait for
     * @return {Promise<Array.<EmailPreview>>}
     */
    async waitFor(opts) {
      opts = opts || {};
      let postBody = opts['waitForConditions'];

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
      let returnType = [EmailPreview];

      return this.callApi(
        '/waitFor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wait for and return count number of emails 
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Number of emails to wait for. Must be greater that 1
     * @param {String} opts.inboxId Id of the inbox we are fetching emails from
     * @param {Number} opts.timeout Max milliseconds to wait
     * @param {Boolean} opts.unreadOnly Optional filter for unread only (default to false)
     * @return {Promise<Array.<EmailPreview>>}
     */
    async waitForEmailCount(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'count': opts['count'],
        'inboxId': opts['inboxId'],
        'timeout': opts['timeout'],
        'unreadOnly': opts['unreadOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [EmailPreview];

      return this.callApi(
        '/waitForEmailCount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.inboxId Id of the inbox we are fetching emails from
     * @param {Number} opts.timeout Max milliseconds to wait
     * @param {Boolean} opts.unreadOnly Optional filter for unread only. (default to false)
     * @return {Promise<Email>}
     */
    async waitForLatestEmail(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inboxId': opts['inboxId'],
        'timeout': opts['timeout'],
        'unreadOnly': opts['unreadOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Email;

      return this.callApi(
        '/waitForLatestEmail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wait or return list of emails that match simple matching patterns
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * @param {MatchOptions} matchOptions matchOptions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Number of emails to wait for. Must be greater that 1
     * @param {String} opts.inboxId Id of the inbox we are fetching emails from
     * @param {Number} opts.timeout Max milliseconds to wait
     * @param {Boolean} opts.unreadOnly Optional filter for unread only (default to false)
     * @return {Promise<Array.<EmailPreview>>}
     */
    async waitForMatchingEmail(matchOptions, opts) {
      opts = opts || {};
      let postBody = matchOptions;
      // verify the required parameter 'matchOptions' is set
      if (matchOptions === undefined || matchOptions === null) {
        throw new Error("Missing the required parameter 'matchOptions' when calling waitForMatchingEmail");
      }

      let pathParams = {
      };
      let queryParams = {
        'count': opts['count'],
        'inboxId': opts['inboxId'],
        'timeout': opts['timeout'],
        'unreadOnly': opts['unreadOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [EmailPreview];

      return this.callApi(
        '/waitForMatchingEmails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Wait for or fetch the email with a given index in the inbox specified
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * @param {Object} opts Optional parameters
     * @param {String} opts.inboxId Id of the inbox you are fetching emails from
     * @param {Number} opts.index Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index=1 (default to 0)
     * @param {Number} opts.timeout Max milliseconds to wait for the nth email if not already present
     * @param {Boolean} opts.unreadOnly Optional filter for unread only (default to false)
     * @return {Promise<Email>}
     */
    async waitForNthEmail(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'inboxId': opts['inboxId'],
        'index': opts['index'],
        'timeout': opts['timeout'],
        'unreadOnly': opts['unreadOnly']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Email;

      return this.callApi(
        '/waitForNthEmail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
