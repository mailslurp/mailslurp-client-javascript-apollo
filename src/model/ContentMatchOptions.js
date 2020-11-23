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
 * The ContentMatchOptions model module.
 * @module model/ContentMatchOptions
 * @version 8.2.15
 */
class ContentMatchOptions {
    /**
     * @member {String} pattern
     * @type {String}
     */
    pattern;

    

    /**
     * Constructs a new <code>ContentMatchOptions</code>.
     * Options for matching content using regex patterns based on Java Pattern syntax
     * @alias module:model/ContentMatchOptions
     */
    constructor() { 
        
        ContentMatchOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentMatchOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentMatchOptions} obj Optional instance to populate.
     * @return {module:model/ContentMatchOptions} The populated <code>ContentMatchOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentMatchOptions();

            if (data.hasOwnProperty('pattern')) {
                obj['pattern'] = ApiClient.convertToType(data['pattern'], 'String');
            }
        }
        return obj;
    }
}



export default ContentMatchOptions;
