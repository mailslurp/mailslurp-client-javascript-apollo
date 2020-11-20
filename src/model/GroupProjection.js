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
 * The GroupProjection model module.
 * @module model/GroupProjection
 * @version 8.2.7
 */
class GroupProjection {
    /**
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt;
    /**
     * @member {String} description
     * @type {String}
     */
    description;
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
     * Constructs a new <code>GroupProjection</code>.
     * @alias module:model/GroupProjection
     * @param createdAt {Date} 
     * @param id {String} 
     * @param name {String} 
     */
    constructor(createdAt, id, name) { 
        
        GroupProjection.initialize(this, createdAt, id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, id, name) { 
        obj['createdAt'] = createdAt;
        obj['id'] = id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GroupProjection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupProjection} obj Optional instance to populate.
     * @return {module:model/GroupProjection} The populated <code>GroupProjection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupProjection();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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



export default GroupProjection;

