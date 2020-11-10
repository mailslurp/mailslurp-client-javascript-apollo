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

// CommonJS-like environments that support module.exports, like Node.
factory(require('expect.js'), require(process.cwd()+'/src/index'));

'use strict';

var instance;

beforeEach(function() {
  instance = new MailslurpJavascriptApollo.WaitForControllerApi();
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

describe('WaitForControllerApi', function() {
    describe('waitFor', function() {
      it('should call waitFor successfully', function(done) {
        //uncomment below and update the code to test waitFor
        //instance.waitFor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('waitForEmailCount', function() {
      it('should call waitForEmailCount successfully', function(done) {
        //uncomment below and update the code to test waitForEmailCount
        //instance.waitForEmailCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('waitForLatestEmail', function() {
      it('should call waitForLatestEmail successfully', function(done) {
        //uncomment below and update the code to test waitForLatestEmail
        //instance.waitForLatestEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('waitForMatchingEmail', function() {
      it('should call waitForMatchingEmail successfully', function(done) {
        //uncomment below and update the code to test waitForMatchingEmail
        //instance.waitForMatchingEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('waitForNthEmail', function() {
      it('should call waitForNthEmail successfully', function(done) {
        //uncomment below and update the code to test waitForNthEmail
        //instance.waitForNthEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});