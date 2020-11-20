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
 * The EmailAnalysis model module.
 * @module model/EmailAnalysis
 * @version 8.2.6
 */
class EmailAnalysis {
    /**
     * @member {String} dkimVerdict
     * @type {String}
     */
    dkimVerdict;
    /**
     * @member {String} dmarcVerdict
     * @type {String}
     */
    dmarcVerdict;
    /**
     * @member {String} spamVerdict
     * @type {String}
     */
    spamVerdict;
    /**
     * @member {String} spfVerdict
     * @type {String}
     */
    spfVerdict;
    /**
     * @member {String} virusVerdict
     * @type {String}
     */
    virusVerdict;

    

    /**
     * Constructs a new <code>EmailAnalysis</code>.
     * Analysis result for email. Each verdict property is a string PASS|FAIL|GRAY or dynamic error message
     * @alias module:model/EmailAnalysis
     */
    constructor() { 
        
        EmailAnalysis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailAnalysis} obj Optional instance to populate.
     * @return {module:model/EmailAnalysis} The populated <code>EmailAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailAnalysis();

            if (data.hasOwnProperty('dkimVerdict')) {
                obj['dkimVerdict'] = ApiClient.convertToType(data['dkimVerdict'], 'String');
            }
            if (data.hasOwnProperty('dmarcVerdict')) {
                obj['dmarcVerdict'] = ApiClient.convertToType(data['dmarcVerdict'], 'String');
            }
            if (data.hasOwnProperty('spamVerdict')) {
                obj['spamVerdict'] = ApiClient.convertToType(data['spamVerdict'], 'String');
            }
            if (data.hasOwnProperty('spfVerdict')) {
                obj['spfVerdict'] = ApiClient.convertToType(data['spfVerdict'], 'String');
            }
            if (data.hasOwnProperty('virusVerdict')) {
                obj['virusVerdict'] = ApiClient.convertToType(data['virusVerdict'], 'String');
            }
        }
        return obj;
    }
}



export default EmailAnalysis;

