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
    instance = new ControlYourMoneyApi.PatchedCategoryGroupRequest();
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

  describe('PatchedCategoryGroupRequest', function() {
    it('should create an instance of PatchedCategoryGroupRequest', function() {
      // uncomment below and update the code to test PatchedCategoryGroupRequest
      //var instane = new ControlYourMoneyApi.PatchedCategoryGroupRequest();
      //expect(instance).to.be.a(ControlYourMoneyApi.PatchedCategoryGroupRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ControlYourMoneyApi.PatchedCategoryGroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instane = new ControlYourMoneyApi.PatchedCategoryGroupRequest();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instane = new ControlYourMoneyApi.PatchedCategoryGroupRequest();
      //expect(instance).to.be();
    });

  });

}));