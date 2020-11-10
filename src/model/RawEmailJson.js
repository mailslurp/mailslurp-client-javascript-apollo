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
 * The RawEmailJson model module.
 * @module model/RawEmailJson
 * @version 8.0.6
 */
class RawEmailJson {
    /**
     * @member {String} content
     * @type {String}
     */
    content;

    

    /**
     * Constructs a new <code>RawEmailJson</code>.
     * @alias module:model/RawEmailJson
     * @param content {String} 
     */
    constructor(content) { 
        
        RawEmailJson.initialize(this, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content) { 
        obj['content'] = content;
    }

    /**
     * Constructs a <code>RawEmailJson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RawEmailJson} obj Optional instance to populate.
     * @return {module:model/RawEmailJson} The populated <code>RawEmailJson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RawEmailJson();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }
}



export default RawEmailJson;

