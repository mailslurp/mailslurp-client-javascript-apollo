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
  instance = new MailslurpJavascriptApollo.EmailControllerApi();
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

describe('EmailControllerApi', function() {
    describe('deleteAllEmails', function() {
      it('should call deleteAllEmails successfully', function(done) {
        //uncomment below and update the code to test deleteAllEmails
        //instance.deleteAllEmails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmail', function() {
      it('should call deleteEmail successfully', function(done) {
        //uncomment below and update the code to test deleteEmail
        //instance.deleteEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadAttachment', function() {
      it('should call downloadAttachment successfully', function(done) {
        //uncomment below and update the code to test downloadAttachment
        //instance.downloadAttachment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forwardEmail', function() {
      it('should call forwardEmail successfully', function(done) {
        //uncomment below and update the code to test forwardEmail
        //instance.forwardEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttachmentMetaData', function() {
      it('should call getAttachmentMetaData successfully', function(done) {
        //uncomment below and update the code to test getAttachmentMetaData
        //instance.getAttachmentMetaData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAttachments', function() {
      it('should call getAttachments successfully', function(done) {
        //uncomment below and update the code to test getAttachments
        //instance.getAttachments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmail', function() {
      it('should call getEmail successfully', function(done) {
        //uncomment below and update the code to test getEmail
        //instance.getEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailHTML', function() {
      it('should call getEmailHTML successfully', function(done) {
        //uncomment below and update the code to test getEmailHTML
        //instance.getEmailHTML(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailsPaginated', function() {
      it('should call getEmailsPaginated successfully', function(done) {
        //uncomment below and update the code to test getEmailsPaginated
        //instance.getEmailsPaginated(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRawEmailContents', function() {
      it('should call getRawEmailContents successfully', function(done) {
        //uncomment below and update the code to test getRawEmailContents
        //instance.getRawEmailContents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRawEmailJson', function() {
      it('should call getRawEmailJson successfully', function(done) {
        //uncomment below and update the code to test getRawEmailJson
        //instance.getRawEmailJson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnreadEmailCount', function() {
      it('should call getUnreadEmailCount successfully', function(done) {
        //uncomment below and update the code to test getUnreadEmailCount
        //instance.getUnreadEmailCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('validateEmail', function() {
      it('should call validateEmail successfully', function(done) {
        //uncomment below and update the code to test validateEmail
        //instance.validateEmail(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});