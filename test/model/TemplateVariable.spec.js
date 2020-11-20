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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MailslurpJavascriptApollo);
  }
}(this, function(expect, MailslurpJavascriptApollo) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MailslurpJavascriptApollo.TemplateVariable();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TemplateVariable', function() {
    it('should create an instance of TemplateVariable', function() {
      // uncomment below and update the code to test TemplateVariable
      //var instane = new MailslurpJavascriptApollo.TemplateVariable();
      //expect(instance).to.be.a(MailslurpJavascriptApollo.TemplateVariable);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MailslurpJavascriptApollo.TemplateVariable();
      //expect(instance).to.be();
    });

    it('should have the property variableType (base name: "variableType")', function() {
      // uncomment below and update the code to test the property variableType
      //var instane = new MailslurpJavascriptApollo.TemplateVariable();
      //expect(instance).to.be();
    });

  });

}));
