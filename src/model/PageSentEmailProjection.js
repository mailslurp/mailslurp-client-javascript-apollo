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
import Pageable from './Pageable';
import SentEmailProjection from './SentEmailProjection';
import Sort from './Sort';

/**
 * The PageSentEmailProjection model module.
 * @module model/PageSentEmailProjection
 * @version 8.2.2
 */
class PageSentEmailProjection {
    /**
     * @member {Array.<CodegenProperty{openApiType='SentEmailProjection', baseName='content', complexType='SentEmailProjection', getter='getContent', setter='setContent', description='null', dataType='SentEmailProjection', datatypeWithEnum='SentEmailProjection', dataFormat='null', name='content', min='null', max='null', defaultValue='null', defaultValueWithParam=' = SentEmailProjection.constructFromObject(data['content']);', baseType='SentEmailProjection', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/SentEmailProjection"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Content', nameInSnakeCase='CONTENT', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} content
     * @type {Array.<CodegenProperty{openApiType='SentEmailProjection', baseName='content', complexType='SentEmailProjection', getter='getContent', setter='setContent', description='null', dataType='SentEmailProjection', datatypeWithEnum='SentEmailProjection', dataFormat='null', name='content', min='null', max='null', defaultValue='null', defaultValueWithParam=' = SentEmailProjection.constructFromObject(data['content']);', baseType='SentEmailProjection', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/SentEmailProjection"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Content', nameInSnakeCase='CONTENT', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    content;
    /**
     * @member {Boolean} empty
     * @type {Boolean}
     */
    empty;
    /**
     * @member {Boolean} first
     * @type {Boolean}
     */
    first;
    /**
     * @member {Boolean} last
     * @type {Boolean}
     */
    last;
    /**
     * @member {Number} number
     * @type {Number}
     */
    number;
    /**
     * @member {Number} numberOfElements
     * @type {Number}
     */
    numberOfElements;
    /**
     * @member {Pageable} pageable
     * @type {Pageable}
     */
    pageable;
    /**
     * @member {Number} size
     * @type {Number}
     */
    size;
    /**
     * @member {Sort} sort
     * @type {Sort}
     */
    sort;
    /**
     * @member {Number} totalElements
     * @type {Number}
     */
    totalElements;
    /**
     * @member {Number} totalPages
     * @type {Number}
     */
    totalPages;

    

    /**
     * Constructs a new <code>PageSentEmailProjection</code>.
     * Paginated sent email results. Page index starts at zero. Projection results may omit larger entity fields. For fetching a full sent email entity use the projection ID with individual method calls.
     * @alias module:model/PageSentEmailProjection
     */
    constructor() { 
        
        PageSentEmailProjection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageSentEmailProjection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageSentEmailProjection} obj Optional instance to populate.
     * @return {module:model/PageSentEmailProjection} The populated <code>PageSentEmailProjection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageSentEmailProjection();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [SentEmailProjection]);
            }
            if (data.hasOwnProperty('empty')) {
                obj['empty'] = ApiClient.convertToType(data['empty'], 'Boolean');
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('numberOfElements')) {
                obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Number');
            }
            if (data.hasOwnProperty('pageable')) {
                obj['pageable'] = Pageable.constructFromObject(data['pageable']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = Sort.constructFromObject(data['sort']);
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
        }
        return obj;
    }
}



export default PageSentEmailProjection;

