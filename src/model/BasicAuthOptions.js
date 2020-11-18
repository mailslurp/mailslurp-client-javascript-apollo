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
 * The BasicAuthOptions model module.
 * @module model/BasicAuthOptions
 * @version 8.0.21
 */
class BasicAuthOptions {
    /**
     * @member {String} username
     * @type {String}
     */
    username;
    /**
     * @member {String} password
     * @type {String}
     */
    password;

    

    /**
     * Constructs a new <code>BasicAuthOptions</code>.
     * Basic Authentication options for webhooks. Will be used is present when calling webhook endpoints.
     * @alias module:model/BasicAuthOptions
     * @param username {String} 
     * @param password {String} 
     */
    constructor(username, password) { 
        
        BasicAuthOptions.initialize(this, username, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password) { 
        obj['username'] = username;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>BasicAuthOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasicAuthOptions} obj Optional instance to populate.
     * @return {module:model/BasicAuthOptions} The populated <code>BasicAuthOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicAuthOptions();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }
}



export default BasicAuthOptions;

