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
import BasicAuthOptions from './BasicAuthOptions';

/**
 * The CreateWebhookOptions model module.
 * @module model/CreateWebhookOptions
 * @version 8.0.20
 */
class CreateWebhookOptions {
    /**
     * @member {BasicAuthOptions} basicAuth
     * @type {BasicAuthOptions}
     */
    basicAuth;
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {String} url
     * @type {String}
     */
    url;

    

    /**
     * Constructs a new <code>CreateWebhookOptions</code>.
     * Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the inbox receives an email. Webhooks are great for processing many inbound emails.
     * @alias module:model/CreateWebhookOptions
     */
    constructor() { 
        
        CreateWebhookOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateWebhookOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookOptions} obj Optional instance to populate.
     * @return {module:model/CreateWebhookOptions} The populated <code>CreateWebhookOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhookOptions();

            if (data.hasOwnProperty('basicAuth')) {
                obj['basicAuth'] = BasicAuthOptions.constructFromObject(data['basicAuth']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }
}



export default CreateWebhookOptions;

