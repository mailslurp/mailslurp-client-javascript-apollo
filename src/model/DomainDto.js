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
 * The DomainDto model module.
 * @module model/DomainDto
 * @version 8.2.12
 */
class DomainDto {
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
     * @member {Boolean} isVerified
     * @type {Boolean}
     */
    isVerified;
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
     * @member {String} verificationToken
     * @type {String}
     */
    verificationToken;

    

    /**
     * Constructs a new <code>DomainDto</code>.
     * Domain plus verification records and status
     * @alias module:model/DomainDto
     * @param createdAt {Date} 
     * @param domain {String} 
     * @param id {String} 
     * @param isVerified {Boolean} 
     * @param updatedAt {Date} 
     * @param userId {String} 
     * @param verificationToken {String} 
     */
    constructor(createdAt, domain, id, isVerified, updatedAt, userId, verificationToken) { 
        
        DomainDto.initialize(this, createdAt, domain, id, isVerified, updatedAt, userId, verificationToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, domain, id, isVerified, updatedAt, userId, verificationToken) { 
        obj['createdAt'] = createdAt;
        obj['domain'] = domain;
        obj['id'] = id;
        obj['isVerified'] = isVerified;
        obj['updatedAt'] = updatedAt;
        obj['userId'] = userId;
        obj['verificationToken'] = verificationToken;
    }

    /**
     * Constructs a <code>DomainDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainDto} obj Optional instance to populate.
     * @return {module:model/DomainDto} The populated <code>DomainDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainDto();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isVerified')) {
                obj['isVerified'] = ApiClient.convertToType(data['isVerified'], 'Boolean');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('verificationToken')) {
                obj['verificationToken'] = ApiClient.convertToType(data['verificationToken'], 'String');
            }
        }
        return obj;
    }
}



export default DomainDto;

