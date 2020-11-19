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
import Sort from './Sort';

/**
 * The Pageable model module.
 * @module model/Pageable
 * @version 8.1.1
 */
class Pageable {
    /**
     * @member {Number} offset
     * @type {Number}
     */
    offset;
    /**
     * @member {Number} pageNumber
     * @type {Number}
     */
    pageNumber;
    /**
     * @member {Number} pageSize
     * @type {Number}
     */
    pageSize;
    /**
     * @member {Boolean} paged
     * @type {Boolean}
     */
    paged;
    /**
     * @member {Sort} sort
     * @type {Sort}
     */
    sort;
    /**
     * @member {Boolean} unpaged
     * @type {Boolean}
     */
    unpaged;

    

    /**
     * Constructs a new <code>Pageable</code>.
     * @alias module:model/Pageable
     */
    constructor() { 
        
        Pageable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Pageable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pageable} obj Optional instance to populate.
     * @return {module:model/Pageable} The populated <code>Pageable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pageable();

            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('paged')) {
                obj['paged'] = ApiClient.convertToType(data['paged'], 'Boolean');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = Sort.constructFromObject(data['sort']);
            }
            if (data.hasOwnProperty('unpaged')) {
                obj['unpaged'] = ApiClient.convertToType(data['unpaged'], 'Boolean');
            }
        }
        return obj;
    }
}



export default Pageable;

