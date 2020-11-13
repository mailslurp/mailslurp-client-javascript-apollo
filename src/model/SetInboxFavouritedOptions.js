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
 * The SetInboxFavouritedOptions model module.
 * @module model/SetInboxFavouritedOptions
 * @version 8.0.13
 */
class SetInboxFavouritedOptions {
    /**
     * @member {Boolean} state
     * @type {Boolean}
     */
    state;

    

    /**
     * Constructs a new <code>SetInboxFavouritedOptions</code>.
     * Options for setting inbox favourite state
     * @alias module:model/SetInboxFavouritedOptions
     */
    constructor() { 
        
        SetInboxFavouritedOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetInboxFavouritedOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetInboxFavouritedOptions} obj Optional instance to populate.
     * @return {module:model/SetInboxFavouritedOptions} The populated <code>SetInboxFavouritedOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetInboxFavouritedOptions();

            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'Boolean');
            }
        }
        return obj;
    }
}



export default SetInboxFavouritedOptions;

