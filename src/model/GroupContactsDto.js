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
import ContactDto from './ContactDto';
import GroupDto from './GroupDto';

/**
 * The GroupContactsDto model module.
 * @module model/GroupContactsDto
 * @version 8.0.6
 */
class GroupContactsDto {
    /**
     * @member {Array.<CodegenProperty{openApiType='ContactDto', baseName='contacts', complexType='ContactDto', getter='getContacts', setter='setContacts', description='null', dataType='ContactDto', datatypeWithEnum='ContactDto', dataFormat='null', name='contacts', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ContactDto.constructFromObject(data['contacts']);', baseType='ContactDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ContactDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Contacts', nameInSnakeCase='CONTACTS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} contacts
     * @type {Array.<CodegenProperty{openApiType='ContactDto', baseName='contacts', complexType='ContactDto', getter='getContacts', setter='setContacts', description='null', dataType='ContactDto', datatypeWithEnum='ContactDto', dataFormat='null', name='contacts', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ContactDto.constructFromObject(data['contacts']);', baseType='ContactDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ContactDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Contacts', nameInSnakeCase='CONTACTS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    contacts;
    /**
     * @member {GroupDto} group
     * @type {GroupDto}
     */
    group;

    

    /**
     * Constructs a new <code>GroupContactsDto</code>.
     * @alias module:model/GroupContactsDto
     * @param contacts {Array.<CodegenProperty{openApiType='ContactDto', baseName='contacts', complexType='ContactDto', getter='getContacts', setter='setContacts', description='null', dataType='ContactDto', datatypeWithEnum='ContactDto', dataFormat='null', name='contacts', min='null', max='null', defaultValue='null', defaultValueWithParam=' = ContactDto.constructFromObject(data['contacts']);', baseType='ContactDto', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/ContactDto"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Contacts', nameInSnakeCase='CONTACTS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} 
     * @param group {GroupDto} 
     */
    constructor(contacts, group) { 
        
        GroupContactsDto.initialize(this, contacts, group);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contacts, group) { 
        obj['contacts'] = contacts;
        obj['group'] = group;
    }

    /**
     * Constructs a <code>GroupContactsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupContactsDto} obj Optional instance to populate.
     * @return {module:model/GroupContactsDto} The populated <code>GroupContactsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupContactsDto();

            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [ContactDto]);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = GroupDto.constructFromObject(data['group']);
            }
        }
        return obj;
    }
}



export default GroupContactsDto;

