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
    instance = new MasterMyMoneyApi.Budget();
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

  describe('Budget', function() {
    it('should create an instance of Budget', function() {
      // uncomment below and update the code to test Budget
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be.a(MasterMyMoneyApi.Budget);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "last_modified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be();
    });

    it('should have the property months (base name: "months")', function() {
      // uncomment below and update the code to test the property months
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be();
    });

    it('should have the property categoryGroups (base name: "categoryGroups")', function() {
      // uncomment below and update the code to test the property categoryGroups
      //var instane = new MasterMyMoneyApi.Budget();
      //expect(instance).to.be();
    });

  });

}));
