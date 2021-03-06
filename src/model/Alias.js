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
 * The Alias model module.
 * @module model/Alias
 * @version 8.2.15
 */
class Alias {
    /**
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt;
    /**
     * @member {String} emailAddress
     * @type {String}
     */
    emailAddress;
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
     * @member {Boolean} proxied
     * @type {Boolean}
     */
    proxied;
    /**
     * @member {Date} updatedAt
     * @type {Date}
     */
    updatedAt;
    /**
     * @member {String} userId
     * @type {String}
     */
    userId;

    

    /**
     * Constructs a new <code>Alias</code>.
     * @alias module:model/Alias
     * @param createdAt {Date} 
     * @param emailAddress {String} 
     * @param updatedAt {Date} 
     */
    constructor(createdAt, emailAddress, updatedAt) { 
        
        Alias.initialize(this, createdAt, emailAddress, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, emailAddress, updatedAt) { 
        obj['createdAt'] = createdAt;
        obj['emailAddress'] = emailAddress;
        obj['updatedAt'] = updatedAt;
    }

    /**
     * Constructs a <code>Alias</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Alias} obj Optional instance to populate.
     * @return {module:model/Alias} The populated <code>Alias</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Alias();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
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
            if (data.hasOwnProperty('proxied')) {
                obj['proxied'] = ApiClient.convertToType(data['proxied'], 'Boolean');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }
}



export default Alias;

