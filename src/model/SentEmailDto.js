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
 * The SentEmailDto model module.
 * @module model/SentEmailDto
 * @version 8.0.23
 */
class SentEmailDto {
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='attachments', complexType='null', getter='getAttachments', setter='setAttachments', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='attachments', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['attachments'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Attachments', nameInSnakeCase='ATTACHMENTS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} attachments
     * @type {Array.<CodegenProperty{openApiType='string', baseName='attachments', complexType='null', getter='getAttachments', setter='setAttachments', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='attachments', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['attachments'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Attachments', nameInSnakeCase='ATTACHMENTS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    attachments;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='bcc', complexType='null', getter='getBcc', setter='setBcc', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='bcc', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['bcc'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Bcc', nameInSnakeCase='BCC', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} bcc
     * @type {Array.<CodegenProperty{openApiType='string', baseName='bcc', complexType='null', getter='getBcc', setter='setBcc', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='bcc', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['bcc'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Bcc', nameInSnakeCase='BCC', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    bcc;
    /**
     * @member {String} body
     * @type {String}
     */
    body;
    /**
     * @member {String} bodyMD5Hash
     * @type {String}
     */
    bodyMD5Hash;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='cc', complexType='null', getter='getCc', setter='setCc', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='cc', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['cc'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Cc', nameInSnakeCase='CC', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} cc
     * @type {Array.<CodegenProperty{openApiType='string', baseName='cc', complexType='null', getter='getCc', setter='setCc', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='cc', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['cc'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Cc', nameInSnakeCase='CC', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    cc;
    /**
     * @member {String} charset
     * @type {String}
     */
    charset;
    /**
     * @member {String} from
     * @type {String}
     */
    from;
    /**
     * @member {String} id
     * @type {String}
     */
    id;
    /**
     * @member {String} inboxId
     * @type {String}
     */
    inboxId;
    /**
     * @member {Boolean} isHTML
     * @type {Boolean}
     */
    isHTML;
    /**
     * @member {Date} sentAt
     * @type {Date}
     */
    sentAt;
    /**
     * @member {String} subject
     * @type {String}
     */
    subject;
    /**
     * @member {Array.<CodegenProperty{openApiType='string', baseName='to', complexType='null', getter='getTo', setter='setTo', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='to', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['to'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='To', nameInSnakeCase='TO', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} to
     * @type {Array.<CodegenProperty{openApiType='string', baseName='to', complexType='null', getter='getTo', setter='setTo', description='null', dataType='String', datatypeWithEnum='String', dataFormat='null', name='to', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ApiClient.convertToType(data['to'], 'String');', baseType='String', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "type" : "string"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=true, isModel=false, isContainer=false, isString=true, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='To', nameInSnakeCase='TO', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    to;
    /**
     * @member {String} userId
     * @type {String}
     */
    userId;

    

    /**
     * Constructs a new <code>SentEmailDto</code>.
     * @alias module:model/SentEmailDto
     * @param id {String} 
     * @param inboxId {String} 
     * @param sentAt {Date} 
     * @param userId {String} 
     */
    constructor(id, inboxId, sentAt, userId) { 
        
        SentEmailDto.initialize(this, id, inboxId, sentAt, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, inboxId, sentAt, userId) { 
        obj['id'] = id;
        obj['inboxId'] = inboxId;
        obj['sentAt'] = sentAt;
        obj['userId'] = userId;
    }

    /**
     * Constructs a <code>SentEmailDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SentEmailDto} obj Optional instance to populate.
     * @return {module:model/SentEmailDto} The populated <code>SentEmailDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SentEmailDto();

            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], ['String']);
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('bodyMD5Hash')) {
                obj['bodyMD5Hash'] = ApiClient.convertToType(data['bodyMD5Hash'], 'String');
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ApiClient.convertToType(data['cc'], ['String']);
            }
            if (data.hasOwnProperty('charset')) {
                obj['charset'] = ApiClient.convertToType(data['charset'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inboxId')) {
                obj['inboxId'] = ApiClient.convertToType(data['inboxId'], 'String');
            }
            if (data.hasOwnProperty('isHTML')) {
                obj['isHTML'] = ApiClient.convertToType(data['isHTML'], 'Boolean');
            }
            if (data.hasOwnProperty('sentAt')) {
                obj['sentAt'] = ApiClient.convertToType(data['sentAt'], 'Date');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], ['String']);
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }
}



export default SentEmailDto;

