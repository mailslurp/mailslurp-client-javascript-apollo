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

import ApiClient from '../ApiClient';
import WebhookTestRequest from './WebhookTestRequest';
import WebhookTestResponse from './WebhookTestResponse';

/**
 * The WebhookTestResult model module.
 * @module model/WebhookTestResult
 * @version 8.0.6
 */
class WebhookTestResult {
    /**
     * @member {String} message
     * @type {String}
     */
    message;
    /**
     * @member {WebhookTestRequest} request
     * @type {WebhookTestRequest}
     */
    request;
    /**
     * @member {WebhookTestResponse} response
     * @type {WebhookTestResponse}
     */
    response;

    

    /**
     * Constructs a new <code>WebhookTestResult</code>.
     * Results of testing a webhook
     * @alias module:model/WebhookTestResult
     * @param request {WebhookTestRequest} 
     * @param response {WebhookTestResponse} 
     */
    constructor(request, response) { 
        
        WebhookTestResult.initialize(this, request, response);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request, response) { 
        obj['request'] = request;
        obj['response'] = response;
    }

    /**
     * Constructs a <code>WebhookTestResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookTestResult} obj Optional instance to populate.
     * @return {module:model/WebhookTestResult} The populated <code>WebhookTestResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookTestResult();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = WebhookTestRequest.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = WebhookTestResponse.constructFromObject(data['response']);
            }
        }
        return obj;
    }
}



export default WebhookTestResult;

