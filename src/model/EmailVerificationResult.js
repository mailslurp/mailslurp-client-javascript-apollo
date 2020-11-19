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
 * The EmailVerificationResult model module.
 * @module model/EmailVerificationResult
 * @version 8.2.1
 */
class EmailVerificationResult {
    /**
     * @member {String} domainName
     * @type {String}
     */
    domainName;
    /**
     * @member {String} emailAddress
     * @type {String}
     */
    emailAddress;
    /**
     * @member {String} error
     * @type {String}
     */
    error;
    /**
     * @member {Boolean} isValid
     * @type {Boolean}
     */
    isValid;
    /**
     * @member {Number} port
     * @type {Number}
     */
    port;

    

    /**
     * Constructs a new <code>EmailVerificationResult</code>.
     * Email verification result. Valid means email address exists according to response from mail server running at the domian and port given.
     * @alias module:model/EmailVerificationResult
     * @param domainName {String} 
     * @param emailAddress {String} 
     * @param isValid {Boolean} 
     * @param port {Number} 
     */
    constructor(domainName, emailAddress, isValid, port) { 
        
        EmailVerificationResult.initialize(this, domainName, emailAddress, isValid, port);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, domainName, emailAddress, isValid, port) { 
        obj['domainName'] = domainName;
        obj['emailAddress'] = emailAddress;
        obj['isValid'] = isValid;
        obj['port'] = port;
    }

    /**
     * Constructs a <code>EmailVerificationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailVerificationResult} obj Optional instance to populate.
     * @return {module:model/EmailVerificationResult} The populated <code>EmailVerificationResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailVerificationResult();

            if (data.hasOwnProperty('domainName')) {
                obj['domainName'] = ApiClient.convertToType(data['domainName'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('isValid')) {
                obj['isValid'] = ApiClient.convertToType(data['isValid'], 'Boolean');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
        }
        return obj;
    }
}



export default EmailVerificationResult;

