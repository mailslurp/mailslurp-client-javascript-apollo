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
 * The VerifyEmailAddressOptions model module.
 * @module model/VerifyEmailAddressOptions
 * @version 8.0.9
 */
class VerifyEmailAddressOptions {
    /**
     * @member {String} mailServerDomain
     * @type {String}
     */
    mailServerDomain;
    /**
     * @member {String} emailAddress
     * @type {String}
     */
    emailAddress;
    /**
     * @member {String} senderEmailAddress
     * @type {String}
     */
    senderEmailAddress;
    /**
     * @member {Number} port
     * @type {Number}
     */
    port;

    

    /**
     * Constructs a new <code>VerifyEmailAddressOptions</code>.
     * Options for verifying that an email address exists at a remote mail server.
     * @alias module:model/VerifyEmailAddressOptions
     * @param emailAddress {String} 
     */
    constructor(emailAddress) { 
        
        VerifyEmailAddressOptions.initialize(this, emailAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, emailAddress) { 
        obj['emailAddress'] = emailAddress;
    }

    /**
     * Constructs a <code>VerifyEmailAddressOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VerifyEmailAddressOptions} obj Optional instance to populate.
     * @return {module:model/VerifyEmailAddressOptions} The populated <code>VerifyEmailAddressOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerifyEmailAddressOptions();

            if (data.hasOwnProperty('mailServerDomain')) {
                obj['mailServerDomain'] = ApiClient.convertToType(data['mailServerDomain'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('senderEmailAddress')) {
                obj['senderEmailAddress'] = ApiClient.convertToType(data['senderEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }
}



export default VerifyEmailAddressOptions;

