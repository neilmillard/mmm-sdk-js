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
    instance = new MasterMyMoneyApi.PatchedCategoryRequest();
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

  describe('PatchedCategoryRequest', function() {
    it('should create an instance of PatchedCategoryRequest', function() {
      // uncomment below and update the code to test PatchedCategoryRequest
      //var instane = new MasterMyMoneyApi.PatchedCategoryRequest();
      //expect(instance).to.be.a(MasterMyMoneyApi.PatchedCategoryRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new MasterMyMoneyApi.PatchedCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instane = new MasterMyMoneyApi.PatchedCategoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property categoryGroup (base name: "category_group")', function() {
      // uncomment below and update the code to test the property categoryGroup
      //var instane = new MasterMyMoneyApi.PatchedCategoryRequest();
      //expect(instance).to.be();
    });

  });

}));
