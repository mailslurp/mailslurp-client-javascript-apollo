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
 * The DomainPreview model module.
 * @module model/DomainPreview
 * @version 8.0.5
 */
class DomainPreview {
    /**
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt;
    /**
     * @member {String} domain
     * @type {String}
     */
    domain;
    /**
     * @member {String} id
     * @type {String}
     */
    id;

    

    /**
     * Constructs a new <code>DomainPreview</code>.
     * Preview object for domain entity
     * @alias module:model/DomainPreview
     * @param createdAt {Date} 
     * @param domain {String} 
     * @param id {String} 
     */
    constructor(createdAt, domain, id) { 
        
        DomainPreview.initialize(this, createdAt, domain, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, domain, id) { 
        obj['createdAt'] = createdAt;
        obj['domain'] = domain;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>DomainPreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainPreview} obj Optional instance to populate.
     * @return {module:model/DomainPreview} The populated <code>DomainPreview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainPreview();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }
}



export default DomainPreview;
