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
import SendEmailOptions from './SendEmailOptions';

/**
 * The BulkSendEmailOptions model module.
 * @module model/BulkSendEmailOptions
 * @version 8.0.18
 */
class BulkSendEmailOptions {
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='inboxIds', complexType='null', getter='getInboxIds', setter='setInboxIds', description='null', dataType='String', datatypeWithEnum='String', dataFormat='uuid', name='inboxIds', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['inboxIds'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string",
  "format" : "uuid"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=true, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='InboxIds', nameInSnakeCase='INBOX_IDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} inboxIds
     * @type {Array.<CodegenProperty{openApiType='string', baseName='inboxIds', complexType='null', getter='getInboxIds', setter='setInboxIds', description='null', dataType='String', datatypeWithEnum='String', dataFormat='uuid', name='inboxIds', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['inboxIds'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string",
  "format" : "uuid"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=true, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='InboxIds', nameInSnakeCase='INBOX_IDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    inboxIds;
    /**
     * @member {SendEmailOptions} sendEmailOptions
     * @type {SendEmailOptions}
     */
    sendEmailOptions;

    

    /**
     * Constructs a new <code>BulkSendEmailOptions</code>.
     * Options for bulk sending an email from multiple addresses. See regular &#x60;sendEmail&#x60; methods for more information.
     * @alias module:model/BulkSendEmailOptions
     */
    constructor() { 
        
        BulkSendEmailOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BulkSendEmailOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BulkSendEmailOptions} obj Optional instance to populate.
     * @return {module:model/BulkSendEmailOptions} The populated <code>BulkSendEmailOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BulkSendEmailOptions();

            if (data.hasOwnProperty('inboxIds')) {
                obj['inboxIds'] = ApiClient.convertToType(data['inboxIds'], ['String']);
            }
            if (data.hasOwnProperty('sendEmailOptions')) {
                obj['sendEmailOptions'] = SendEmailOptions.constructFromObject(data['sendEmailOptions']);
            }
        }
        return obj;
    }
}



export default BulkSendEmailOptions;

