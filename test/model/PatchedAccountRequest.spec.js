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
    instance = new ControlYourMoneyApi.PatchedAccountRequest();
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

  describe('PatchedAccountRequest', function() {
    it('should create an instance of PatchedAccountRequest', function() {
      // uncomment below and update the code to test PatchedAccountRequest
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be.a(ControlYourMoneyApi.PatchedAccountRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property onBudget (base name: "on_budget")', function() {
      // uncomment below and update the code to test the property onBudget
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property clearedBalance (base name: "cleared_balance")', function() {
      // uncomment below and update the code to test the property clearedBalance
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property unclearedBalance (base name: "uncleared_balance")', function() {
      // uncomment below and update the code to test the property unclearedBalance
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

    it('should have the property closed (base name: "closed")', function() {
      // uncomment below and update the code to test the property closed
      //var instane = new ControlYourMoneyApi.PatchedAccountRequest();
      //expect(instance).to.be();
    });

  });

}));
