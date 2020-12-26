/**
 * Master My Money API
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
    factory(root.expect, root.MasterMyMoneyApi);
  }
}(this, function(expect, MasterMyMoneyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MasterMyMoneyApi.Envelope();
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

  describe('Envelope', function() {
    it('should create an instance of Envelope', function() {
      // uncomment below and update the code to test Envelope
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be.a(MasterMyMoneyApi.Envelope);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be();
    });

    it('should have the property month (base name: "month")', function() {
      // uncomment below and update the code to test the property month
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be();
    });

    it('should have the property budgeted (base name: "budgeted")', function() {
      // uncomment below and update the code to test the property budgeted
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be();
    });

    it('should have the property activity (base name: "activity")', function() {
      // uncomment below and update the code to test the property activity
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new MasterMyMoneyApi.Envelope();
      //expect(instance).to.be();
    });

  });

}));
