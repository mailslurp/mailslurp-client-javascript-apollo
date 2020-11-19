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
 * The MatchOption model module.
 * @module model/MatchOption
 * @version 8.1.1
 */
class MatchOption {
    /**
     * @member {MatchOption.FieldEnum} field
     * @type {MatchOption.FieldEnum}
     */
    field;
    /**
     * @member {MatchOption.ShouldEnum} should
     * @type {MatchOption.ShouldEnum}
     */
    should;
    /**
     * @member {String} value
     * @type {String}
     */
    value;

    

    /**
     * Constructs a new <code>MatchOption</code>.
     * Options for matching emails in an inbox. Each match option object contains a &#x60;field&#x60;, &#x60;should&#x60; and &#x60;value&#x60; property. Together they form logical conditions such as &#x60;SUBJECT&#x60; should &#x60;CONTAIN&#x60; value.
     * @alias module:model/MatchOption
     */
    constructor() { 
        
        MatchOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchOption} obj Optional instance to populate.
     * @return {module:model/MatchOption} The populated <code>MatchOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchOption();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('should')) {
                obj['should'] = ApiClient.convertToType(data['should'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }
}


/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
MatchOption['FieldEnum'] = {

    /**
     * value: "SUBJECT"
     * @const
     */
    "SUBJECT": "SUBJECT",

    /**
     * value: "TO"
     * @const
     */
    "TO": "TO",

    /**
     * value: "BCC"
     * @const
     */
    "BCC": "BCC",

    /**
     * value: "CC"
     * @const
     */
    "CC": "CC",

    /**
     * value: "FROM"
     * @const
     */
    "FROM": "FROM"
};


/**
 * Allowed values for the <code>should</code> property.
 * @enum {String}
 * @readonly
 */
MatchOption['ShouldEnum'] = {

    /**
     * value: "CONTAIN"
     * @const
     */
    "CONTAIN": "CONTAIN",

    /**
     * value: "EQUAL"
     * @const
     */
    "EQUAL": "EQUAL"
};



export default MatchOption;

