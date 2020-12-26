/**
 * Control Your Money API
 * Direct access to your budgets. Or use the APP
 *
 * OpenAPI spec version: Unknown
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ControlYourMoneyApi);
  }
}(this, function(expect, ControlYourMoneyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ControlYourMoneyApi.TransactionApi();
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

  describe('TransactionApi', function() {
    describe('transactionCreate', function() {
      it('should call transactionCreate successfully', function(done) {
        //uncomment below and update the code to test transactionCreate
        //instance.transactionCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transactionList', function() {
      it('should call transactionList successfully', function(done) {
        //uncomment below and update the code to test transactionList
        //instance.transactionList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transactionPartialUpdate', function() {
      it('should call transactionPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test transactionPartialUpdate
        //instance.transactionPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transactionRetrieve', function() {
      it('should call transactionRetrieve successfully', function(done) {
        //uncomment below and update the code to test transactionRetrieve
        //instance.transactionRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transactionUpdate', function() {
      it('should call transactionUpdate successfully', function(done) {
        //uncomment below and update the code to test transactionUpdate
        //instance.transactionUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));