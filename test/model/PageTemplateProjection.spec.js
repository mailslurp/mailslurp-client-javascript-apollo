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
    instance = new MailslurpJavascriptApollo.PageTemplateProjection();
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

  describe('PageTemplateProjection', function() {
    it('should create an instance of PageTemplateProjection', function() {
      // uncomment below and update the code to test PageTemplateProjection
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be.a(MailslurpJavascriptApollo.PageTemplateProjection);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property empty (base name: "empty")', function() {
      // uncomment below and update the code to test the property empty
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property first (base name: "first")', function() {
      // uncomment below and update the code to test the property first
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property last (base name: "last")', function() {
      // uncomment below and update the code to test the property last
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property numberOfElements (base name: "numberOfElements")', function() {
      // uncomment below and update the code to test the property numberOfElements
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property pageable (base name: "pageable")', function() {
      // uncomment below and update the code to test the property pageable
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property totalElements (base name: "totalElements")', function() {
      // uncomment below and update the code to test the property totalElements
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

    it('should have the property totalPages (base name: "totalPages")', function() {
      // uncomment below and update the code to test the property totalPages
      //var instane = new MailslurpJavascriptApollo.PageTemplateProjection();
      //expect(instance).to.be();
    });

  });

}));
