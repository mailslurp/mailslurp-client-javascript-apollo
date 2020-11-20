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
 * The AttachmentMetaData model module.
 * @module model/AttachmentMetaData
 * @version 8.2.10
 */
class AttachmentMetaData {
    /**
     * @member {Number} contentLength
     * @type {Number}
     */
    contentLength;
    /**
     * @member {String} contentType
     * @type {String}
     */
    contentType;
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} name
     * @type {String}
     */
    name;

    

    /**
     * Constructs a new <code>AttachmentMetaData</code>.
     * Meta data associated with an attachment. Attachments are stored as byte blobs so the meta data is stored separately.
     * @alias module:model/AttachmentMetaData
     */
    constructor() { 
        
        AttachmentMetaData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentMetaData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentMetaData} obj Optional instance to populate.
     * @return {module:model/AttachmentMetaData} The populated <code>AttachmentMetaData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentMetaData();

            if (data.hasOwnProperty('contentLength')) {
                obj['contentLength'] = ApiClient.convertToType(data['contentLength'], 'Number');
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }
}



export default AttachmentMetaData;

