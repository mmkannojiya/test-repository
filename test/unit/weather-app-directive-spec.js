'use strict';
//var assert = chai.assert;
var expect = chai.expect;

describe('Testing directive',function(){
var scope, templateCache,compile,$rootScope,directiveElem;
	beforeEach(module('weatherApp'));
		beforeEach(inject(function (_$compile_,_$templateCache_,_$rootScope_){
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();
		compile = _$compile_;
		templateCache = _$templateCache_;
		templateCache.put('scripts/views/weather.html');
		templateCache.put('scripts/views/weather.html','<div ><p ng-bind="description"></p><p ng-bind="temp"></p></div>');
		directiveElem = compile('<div weather></div>')(scope);
		scope.$digest();
	}))
	afterEach(function () {
		scope = null;
		$rootScope = null;
	});
it('should have p element',function(){
	console.log('directiveElem',directiveElem);
	var pElement = directiveElem.find('p');
	expect(pElement).not.to.be.undefined;

});

 afterEach(function () {
      
      $rootScope = null;
      scope =null;
    });

});