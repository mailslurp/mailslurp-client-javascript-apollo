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
  instance = new MailslurpJavascriptApollo.GroupControllerApi();
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

describe('GroupControllerApi', function() {
    describe('addContactsToGroup', function() {
      it('should call addContactsToGroup successfully', function(done) {
        //uncomment below and update the code to test addContactsToGroup
        //instance.addContactsToGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createGroup', function() {
      it('should call createGroup successfully', function(done) {
        //uncomment below and update the code to test createGroup
        //instance.createGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteGroup', function() {
      it('should call deleteGroup successfully', function(done) {
        //uncomment below and update the code to test deleteGroup
        //instance.deleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllGroups', function() {
      it('should call getAllGroups successfully', function(done) {
        //uncomment below and update the code to test getAllGroups
        //instance.getAllGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupWithContacts', function() {
      it('should call getGroupWithContacts successfully', function(done) {
        //uncomment below and update the code to test getGroupWithContacts
        //instance.getGroupWithContacts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroupWithContactsPaginated', function() {
      it('should call getGroupWithContactsPaginated successfully', function(done) {
        //uncomment below and update the code to test getGroupWithContactsPaginated
        //instance.getGroupWithContactsPaginated(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroups', function() {
      it('should call getGroups successfully', function(done) {
        //uncomment below and update the code to test getGroups
        //instance.getGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeContactsFromGroup', function() {
      it('should call removeContactsFromGroup successfully', function(done) {
        //uncomment below and update the code to test removeContactsFromGroup
        //instance.removeContactsFromGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});