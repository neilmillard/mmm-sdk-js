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
    instance = new ControlYourMoneyApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('rootCreate', function() {
      it('should call rootCreate successfully', function(done) {
        //uncomment below and update the code to test rootCreate
        //instance.rootCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rootDestroy', function() {
      it('should call rootDestroy successfully', function(done) {
        //uncomment below and update the code to test rootDestroy
        //instance.rootDestroy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rootList', function() {
      it('should call rootList successfully', function(done) {
        //uncomment below and update the code to test rootList
        //instance.rootList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rootPartialUpdate', function() {
      it('should call rootPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test rootPartialUpdate
        //instance.rootPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rootRetrieve', function() {
      it('should call rootRetrieve successfully', function(done) {
        //uncomment below and update the code to test rootRetrieve
        //instance.rootRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rootUpdate', function() {
      it('should call rootUpdate successfully', function(done) {
        //uncomment below and update the code to test rootUpdate
        //instance.rootUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
