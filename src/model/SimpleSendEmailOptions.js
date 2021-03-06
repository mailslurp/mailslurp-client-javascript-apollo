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

/**
 * The SimpleSendEmailOptions model module.
 * @module model/SimpleSendEmailOptions
 * @version 8.2.15
 */
class SimpleSendEmailOptions {
    /**
     * @member {String} body
     * @type {String}
     */
    body;
    /**
     * @member {String} senderId
     * @type {String}
     */
    senderId;
    /**
     * @member {String} subject
     * @type {String}
     */
    subject;
    /**
     * @member {String} to
     * @type {String}
     */
    to;

    

    /**
     * Constructs a new <code>SimpleSendEmailOptions</code>.
     * @alias module:model/SimpleSendEmailOptions
     */
    constructor() { 
        
        SimpleSendEmailOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleSendEmailOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleSendEmailOptions} obj Optional instance to populate.
     * @return {module:model/SimpleSendEmailOptions} The populated <code>SimpleSendEmailOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleSendEmailOptions();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }
}



export default SimpleSendEmailOptions;

