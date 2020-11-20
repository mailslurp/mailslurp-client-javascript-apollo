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
import MatchOption from './MatchOption';

/**
 * The MatchOptions model module.
 * @module model/MatchOptions
 * @version 8.2.10
 */
class MatchOptions {
    /**
     * @member {Array.<CodegenProperty{openApiType='MatchOption', baseName='matches', complexType='MatchOption', getter='getMatches', setter='setMatches', description='null', dataType='MatchOption', datatypeWithEnum='MatchOption', dataFormat='null', name='matches', min='null', max='null', defaultValue='null', defaultValueWithParam=' = MatchOption.constructFromObject(data['matches']);', baseType='MatchOption', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/MatchOption"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Matches', nameInSnakeCase='MATCHES', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>} matches
     * @type {Array.<CodegenProperty{openApiType='MatchOption', baseName='matches', complexType='MatchOption', getter='getMatches', setter='setMatches', description='null', dataType='MatchOption', datatypeWithEnum='MatchOption', dataFormat='null', name='matches', min='null', max='null', defaultValue='null', defaultValueWithParam=' = MatchOption.constructFromObject(data['matches']);', baseType='MatchOption', containerType='null', title='null', unescapedDescription='null', maxLength=null, minLength=null, pattern='null', example='null', jsonSchema='{
  "$ref" : "#/components/schemas/MatchOption"
}', minimum='null', maximum='null', exclusiveMinimum=false, exclusiveMaximum=false, hasMore=false, required=false, deprecated=false, secondaryParam=false, hasMoreNonReadOnly=false, isPrimitiveType=false, isModel=true, isContainer=false, isString=false, isNumeric=false, isInteger=false, isLong=false, isNumber=false, isFloat=false, isDouble=false, isByteArray=false, isBinary=false, isFile=false, isBoolean=false, isDate=false, isDateTime=false, isUuid=false, isUri=false, isEmail=false, isFreeFormObject=false, isListContainer=false, isMapContainer=false, isEnum=false, isReadOnly=false, isWriteOnly=false, isNullable=false, isSelfReference=false, isCircularReference=false, isDiscriminator=false, _enum=null, allowableValues=null, items=null, mostInnerItems=null, vendorExtensions={}, hasValidation=false, isInherited=false, discriminatorValue='null', nameInCamelCase='Matches', nameInSnakeCase='MATCHES', enumName='null', maxItems=null, minItems=null, maxProperties=null, minProperties=null, uniqueItems=false, multipleOf=null, isXmlAttribute=false, xmlPrefix='null', xmlName='null', xmlNamespace='null', isXmlWrapped=false}>}
     */
    matches;

    

    /**
     * Constructs a new <code>MatchOptions</code>.
     * Optional filter for matching emails based on fields. For instance filter results to only include emails whose &#x60;SUBJECT&#x60; value does &#x60;CONTAIN&#x60; given match value.
     * @alias module:model/MatchOptions
     */
    constructor() { 
        
        MatchOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchOptions} obj Optional instance to populate.
     * @return {module:model/MatchOptions} The populated <code>MatchOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchOptions();

            if (data.hasOwnProperty('matches')) {
                obj['matches'] = ApiClient.convertToType(data['matches'], [MatchOption]);
            }
        }
        return obj;
    }
}



export default MatchOptions;

