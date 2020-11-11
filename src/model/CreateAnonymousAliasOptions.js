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
 * The CreateAnonymousAliasOptions model module.
 * @module model/CreateAnonymousAliasOptions
 * @version 8.0.9
 */
class CreateAnonymousAliasOptions {
    /**
     * @member {String} emailAddress
     * @type {String}
     */
    emailAddress;

    

    /**
     * Constructs a new <code>CreateAnonymousAliasOptions</code>.
     * Create anonymous email alias options. Email aliases can be used to mask real email addresses behind an ID
     * @alias module:model/CreateAnonymousAliasOptions
     */
    constructor() { 
        
        CreateAnonymousAliasOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAnonymousAliasOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAnonymousAliasOptions} obj Optional instance to populate.
     * @return {module:model/CreateAnonymousAliasOptions} The populated <code>CreateAnonymousAliasOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAnonymousAliasOptions();

            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
        }
        return obj;
    }
}



export default CreateAnonymousAliasOptions;

