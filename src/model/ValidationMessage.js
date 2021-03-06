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
 * The ValidationMessage model module.
 * @module model/ValidationMessage
 * @version 8.2.15
 */
class ValidationMessage {
    /**
     * @member {Number} lineNumber
     * @type {Number}
     */
    lineNumber;
    /**
     * @member {String} message
     * @type {String}
     */
    message;

    

    /**
     * Constructs a new <code>ValidationMessage</code>.
     * @alias module:model/ValidationMessage
     * @param lineNumber {Number} 
     */
    constructor(lineNumber) { 
        
        ValidationMessage.initialize(this, lineNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lineNumber) { 
        obj['lineNumber'] = lineNumber;
    }

    /**
     * Constructs a <code>ValidationMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationMessage} obj Optional instance to populate.
     * @return {module:model/ValidationMessage} The populated <code>ValidationMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidationMessage();

            if (data.hasOwnProperty('lineNumber')) {
                obj['lineNumber'] = ApiClient.convertToType(data['lineNumber'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }
}



export default ValidationMessage;

