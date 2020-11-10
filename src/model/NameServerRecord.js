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
 * The NameServerRecord model module.
 * @module model/NameServerRecord
 * @version 8.0.6
 */
class NameServerRecord {
    /**
     * @member {String} priority
     * @type {String}
     */
    priority;
    /**
     * @member {String} raw
     * @type {String}
     */
    raw;
    /**
     * @member {String} recordType
     * @type {String}
     */
    recordType;
    /**
     * @member {String} value
     * @type {String}
     */
    value;

    

    /**
     * Constructs a new <code>NameServerRecord</code>.
     * Name Server Record
     * @alias module:model/NameServerRecord
     * @param priority {String} 
     * @param raw {String} 
     * @param recordType {String} 
     * @param value {String} 
     */
    constructor(priority, raw, recordType, value) { 
        
        NameServerRecord.initialize(this, priority, raw, recordType, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, priority, raw, recordType, value) { 
        obj['priority'] = priority;
        obj['raw'] = raw;
        obj['recordType'] = recordType;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>NameServerRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NameServerRecord} obj Optional instance to populate.
     * @return {module:model/NameServerRecord} The populated <code>NameServerRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NameServerRecord();

            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], 'String');
            }
            if (data.hasOwnProperty('recordType')) {
                obj['recordType'] = ApiClient.convertToType(data['recordType'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }
}



export default NameServerRecord;

