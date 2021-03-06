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
 * The Sort model module.
 * @module model/Sort
 * @version 8.2.15
 */
class Sort {
    /**
     * @member {Boolean} empty
     * @type {Boolean}
     */
    empty;
    /**
     * @member {Boolean} sorted
     * @type {Boolean}
     */
    sorted;
    /**
     * @member {Boolean} unsorted
     * @type {Boolean}
     */
    unsorted;

    

    /**
     * Constructs a new <code>Sort</code>.
     * @alias module:model/Sort
     */
    constructor() { 
        
        Sort.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sort} obj Optional instance to populate.
     * @return {module:model/Sort} The populated <code>Sort</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sort();

            if (data.hasOwnProperty('empty')) {
                obj['empty'] = ApiClient.convertToType(data['empty'], 'Boolean');
            }
            if (data.hasOwnProperty('sorted')) {
                obj['sorted'] = ApiClient.convertToType(data['sorted'], 'Boolean');
            }
            if (data.hasOwnProperty('unsorted')) {
                obj['unsorted'] = ApiClient.convertToType(data['unsorted'], 'Boolean');
            }
        }
        return obj;
    }
}



export default Sort;

