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
 * The ContactProjection model module.
 * @module model/ContactProjection
 * @version 8.2.8
 */
class ContactProjection {
    /**
     * @member {String} company
     * @type {String}
     */
    company;
    /**
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt;
    /**
     * @member {String} firstName
     * @type {String}
     */
    firstName;
    /**
     * @member {String} groupId
     * @type {String}
     */
    groupId;
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} lastName
     * @type {String}
     */
    lastName;
    /**
     * @member {Boolean} optOut
     * @type {Boolean}
     */
    optOut;

    

    /**
     * Constructs a new <code>ContactProjection</code>.
     * @alias module:model/ContactProjection
     * @param createdAt {Date} 
     * @param id {String} 
     */
    constructor(createdAt, id) { 
        
        ContactProjection.initialize(this, createdAt, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, id) { 
        obj['createdAt'] = createdAt;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>ContactProjection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactProjection} obj Optional instance to populate.
     * @return {module:model/ContactProjection} The populated <code>ContactProjection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactProjection();

            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('optOut')) {
                obj['optOut'] = ApiClient.convertToType(data['optOut'], 'Boolean');
            }
        }
        return obj;
    }
}



export default ContactProjection;

