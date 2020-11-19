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
 * The WebhookDto model module.
 * @module model/WebhookDto
 * @version 8.1.0
 */
class WebhookDto {
    /**
     * @member {Boolean} basicAuth
     * @type {Boolean}
     */
    basicAuth;
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
     * @member {WebhookDto.MethodEnum} method
     * @type {WebhookDto.MethodEnum}
     */
    method;
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {String} payloadJsonSchema
     * @type {String}
     */
    payloadJsonSchema;
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
     * Constructs a new <code>WebhookDto</code>.
     * Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox.
     * @alias module:model/WebhookDto
     * @param updatedAt {Date} 
     */
    constructor(updatedAt) { 
        
        WebhookDto.initialize(this, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, updatedAt) { 
        obj['updatedAt'] = updatedAt;
    }

    /**
     * Constructs a <code>WebhookDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookDto} obj Optional instance to populate.
     * @return {module:model/WebhookDto} The populated <code>WebhookDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookDto();

            if (data.hasOwnProperty('basicAuth')) {
                obj['basicAuth'] = ApiClient.convertToType(data['basicAuth'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inboxId')) {
                obj['inboxId'] = ApiClient.convertToType(data['inboxId'], 'String');
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = ApiClient.convertToType(data['method'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('payloadJsonSchema')) {
                obj['payloadJsonSchema'] = ApiClient.convertToType(data['payloadJsonSchema'], 'String');
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


/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */
WebhookDto['MethodEnum'] = {

    /**
     * value: "GET"
     * @const
     */
    "GET": "GET",

    /**
     * value: "HEAD"
     * @const
     */
    "HEAD": "HEAD",

    /**
     * value: "POST"
     * @const
     */
    "POST": "POST",

    /**
     * value: "PUT"
     * @const
     */
    "PUT": "PUT",

    /**
     * value: "PATCH"
     * @const
     */
    "PATCH": "PATCH",

    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",

    /**
     * value: "OPTIONS"
     * @const
     */
    "OPTIONS": "OPTIONS",

    /**
     * value: "TRACE"
     * @const
     */
    "TRACE": "TRACE"
};



export default WebhookDto;

