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
import NameServerRecord from './NameServerRecord';

/**
 * The DescribeMailServerDomainResult model module.
 * @module model/DescribeMailServerDomainResult
 * @version 8.2.2
 */
class DescribeMailServerDomainResult {
    /**
     * @member {String} domain
     * @type {String}
     */
    domain;
    /**
     * @member {String} message
     * @type {String}
     */
    message;
    /**
     * @member {Array.<CodegenProperty{openApiType='NameServerRecord', baseName='mxRecords', complexType='NameServerRecord', getter='getMxRecords', setter='setMxRecords', description='null', dataType='NameServerRecord', datatypeWithEnum='NameServerRecord', dataFormat='null', name='mxRecords', min='null', max='null', defaultValue='null', defaultValueWithParam=' = NameServerRecord.constructFromObject(data['mxRecords']);', baseType='NameServerRecord', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/NameServerRecord"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='MxRecords', nameInSnakeCase='MX_RECORDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} mxRecords
     * @type {Array.<CodegenProperty{openApiType='NameServerRecord', baseName='mxRecords', complexType='NameServerRecord', getter='getMxRecords', setter='setMxRecords', description='null', dataType='NameServerRecord', datatypeWithEnum='NameServerRecord', dataFormat='null', name='mxRecords', min='null', max='null', defaultValue='null', defaultValueWithParam=' = NameServerRecord.constructFromObject(data['mxRecords']);', baseType='NameServerRecord', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/NameServerRecord"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='MxRecords', nameInSnakeCase='MX_RECORDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    mxRecords;

    

    /**
     * Constructs a new <code>DescribeMailServerDomainResult</code>.
     * Name Server lookup result
     * @alias module:model/DescribeMailServerDomainResult
     * @param domain {String} 
     * @param mxRecords {Array.<CodegenProperty{openApiType='NameServerRecord', baseName='mxRecords', complexType='NameServerRecord', getter='getMxRecords', setter='setMxRecords', description='null', dataType='NameServerRecord', datatypeWithEnum='NameServerRecord', dataFormat='null', name='mxRecords', min='null', max='null', defaultValue='null', defaultValueWithParam=' = NameServerRecord.constructFromObject(data['mxRecords']);', baseType='NameServerRecord', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/NameServerRecord"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='MxRecords', nameInSnakeCase='MX_RECORDS', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} 
     */
    constructor(domain, mxRecords) { 
        
        DescribeMailServerDomainResult.initialize(this, domain, mxRecords);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, domain, mxRecords) { 
        obj['domain'] = domain;
        obj['mxRecords'] = mxRecords;
    }

    /**
     * Constructs a <code>DescribeMailServerDomainResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeMailServerDomainResult} obj Optional instance to populate.
     * @return {module:model/DescribeMailServerDomainResult} The populated <code>DescribeMailServerDomainResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescribeMailServerDomainResult();

            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('mxRecords')) {
                obj['mxRecords'] = ApiClient.convertToType(data['mxRecords'], [NameServerRecord]);
            }
        }
        return obj;
    }
}



export default DescribeMailServerDomainResult;

