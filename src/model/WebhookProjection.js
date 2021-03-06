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
 * The WebhookProjection model module.
 * @module model/WebhookProjection
 * @version 8.2.15
 */
class WebhookProjection {
    /**
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt;
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} inboxId
     * @type {String}
     */
    inboxId;
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt;
    /**
     * @member {String} url
     * @type {String}
     */
    url;

    

    /**
     * Constructs a new <code>WebhookProjection</code>.
     * Representation of a webhook
     * @alias module:model/WebhookProjection
     * @param createdAt {Date} 
     * @param id {String} 
     * @param inboxId {String} 
     * @param updatedAt {Date} 
     * @param url {String} 
     */
    constructor(createdAt, id, inboxId, updatedAt, url) { 
        
        WebhookProjection.initialize(this, createdAt, id, inboxId, updatedAt, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, id, inboxId, updatedAt, url) { 
        obj['createdAt'] = createdAt;
        obj['id'] = id;
        obj['inboxId'] = inboxId;
        obj['updatedAt'] = updatedAt;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>WebhookProjection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookProjection} obj Optional instance to populate.
     * @return {module:model/WebhookProjection} The populated <code>WebhookProjection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookProjection();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inboxId')) {
                obj['inboxId'] = ApiClient.convertToType(data['inboxId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }
}



export default WebhookProjection;

