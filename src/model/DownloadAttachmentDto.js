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
 * The DownloadAttachmentDto model module.
 * @module model/DownloadAttachmentDto
 * @version 8.2.1
 */
class DownloadAttachmentDto {
    /**
     * @member {String} base64FileContents
     * @type {String}
     */
    base64FileContents;
    /**
     * @member {String} contentType
     * @type {String}
     */
    contentType;
    /**
     * @member {Number} sizeBytes
     * @type {Number}
     */
    sizeBytes;

    

    /**
     * Constructs a new <code>DownloadAttachmentDto</code>.
     * Content of attachment
     * @alias module:model/DownloadAttachmentDto
     */
    constructor() { 
        
        DownloadAttachmentDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DownloadAttachmentDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DownloadAttachmentDto} obj Optional instance to populate.
     * @return {module:model/DownloadAttachmentDto} The populated <code>DownloadAttachmentDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DownloadAttachmentDto();

            if (data.hasOwnProperty('base64FileContents')) {
                obj['base64FileContents'] = ApiClient.convertToType(data['base64FileContents'], 'String');
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('sizeBytes')) {
                obj['sizeBytes'] = ApiClient.convertToType(data['sizeBytes'], 'Number');
            }
        }
        return obj;
    }
}



export default DownloadAttachmentDto;

