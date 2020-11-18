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
 * The TemplateVariable model module.
 * @module model/TemplateVariable
 * @version 8.0.22
 */
class TemplateVariable {
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {TemplateVariable.VariableTypeEnum} variableType
     * @type {TemplateVariable.VariableTypeEnum}
     */
    variableType;

    

    /**
     * Constructs a new <code>TemplateVariable</code>.
     * @alias module:model/TemplateVariable
     * @param name {String} 
     * @param variableType {TemplateVariable.VariableTypeEnum} 
     */
    constructor(name, variableType) { 
        
        TemplateVariable.initialize(this, name, variableType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, variableType) { 
        obj['name'] = name;
        obj['variableType'] = variableType;
    }

    /**
     * Constructs a <code>TemplateVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateVariable} obj Optional instance to populate.
     * @return {module:model/TemplateVariable} The populated <code>TemplateVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateVariable();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('variableType')) {
                obj['variableType'] = ApiClient.convertToType(data['variableType'], 'String');
            }
        }
        return obj;
    }
}


/**
 * Allowed values for the <code>variableType</code> property.
 * @enum {String}
 * @readonly
 */
TemplateVariable['VariableTypeEnum'] = {

    /**
     * value: "STRING"
     * @const
     */
    "STRING": "STRING"
};



export default TemplateVariable;

