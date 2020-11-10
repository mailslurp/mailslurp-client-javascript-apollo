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
  instance = new MailslurpJavascriptApollo.ContactControllerApi();
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

describe('ContactControllerApi', function() {
    describe('createContact', function() {
      it('should call createContact successfully', function(done) {
        //uncomment below and update the code to test createContact
        //instance.createContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteContact', function() {
      it('should call deleteContact successfully', function(done) {
        //uncomment below and update the code to test deleteContact
        //instance.deleteContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllContacts', function() {
      it('should call getAllContacts successfully', function(done) {
        //uncomment below and update the code to test getAllContacts
        //instance.getAllContacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContact', function() {
      it('should call getContact successfully', function(done) {
        //uncomment below and update the code to test getContact
        //instance.getContact(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getContacts', function() {
      it('should call getContacts successfully', function(done) {
        //uncomment below and update the code to test getContacts
        //instance.getContacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});