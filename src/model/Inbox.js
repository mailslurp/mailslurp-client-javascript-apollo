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
 * The Inbox model module.
 * @module model/Inbox
 * @version 8.0.19
 */
class Inbox {
    /**
     * @member {Date} createdAt
     * @type {Date}
     */
    createdAt;
    /**
     * @member {String} description
     * @type {String}
     */
    description;
    /**
     * @member {String} emailAddress
     * @type {String}
     */
    emailAddress;
    /**
     * @member {String} expiresAt
     * @type {String}
     */
    expiresAt;
    /**
     * @member {Boolean} favourite
     * @type {Boolean}
     */
    favourite;
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} name
     * @type {String}
     */
    name;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='tags', complexType='null', getter='getTags', setter='setTags', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='tags', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['tags'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Tags', nameInSnakeCase='TAGS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} tags
     * @type {Array.<CodegenProperty{openApiType='string', baseName='tags', complexType='null', getter='getTags', setter='setTags', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='tags', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['tags'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Tags', nameInSnakeCase='TAGS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    tags;
    /**
     * @member {String} userId
     * @type {String}
     */
    userId;

    

    /**
     * Constructs a new <code>Inbox</code>.
     * Representation of an inbox with an email address. Emails can be sent to or from this email address.
     * @alias module:model/Inbox
     */
    constructor() { 
        
        Inbox.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Inbox</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Inbox} obj Optional instance to populate.
     * @return {module:model/Inbox} The populated <code>Inbox</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Inbox();

            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('emailAddress')) {
                obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
            }
            if (data.hasOwnProperty('expiresAt')) {
                obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'String');
            }
            if (data.hasOwnProperty('favourite')) {
                obj['favourite'] = ApiClient.convertToType(data['favourite'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }
}



export default Inbox;

