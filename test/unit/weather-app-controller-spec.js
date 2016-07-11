'use strict';
//var assert = chai.assert;
var expect = chai.expect;

describe('check scope objects values',function(){
var weatherAppController,scope,$q, self,$rootScope,httpBackend,weatherService;
	var mockWeatherService = {
    getWeather: function () {
		var deferred = $q.defer();
		deferred.resolve(55);
		return deferred.promise;
	
	}
  };
	beforeEach(module('weatherApp'));
		beforeEach(inject(function (_$controller_,_$rootScope_,_$httpBackend_,_weatherService_,_$q_){
		weatherAppController = _$controller_;
		$rootScope = _$rootScope_;
		scope = $rootScope.$new();
		httpBackend = _$httpBackend_;
		$q = _$q_;
		weatherService = _weatherService_;
		self = weatherAppController('weatherController',{$scope:scope,weatherService:mockWeatherService})
		$rootScope.$apply();
		
	}))
	afterEach(function () {
		scope = null;
	});
it('should give scope description value',function(){
	expect(scope.description).to.equal('a simple weather app');

});
it('testing getWeather functionality',function(){
	//console.log('rootscope',$rootScope);
	mockWeatherService.getWeather();
    scope.$apply();
    expect(mockWeatherService.getWeather())
      .not.to.equal(null);
	

});
it('testing getWeather returned data',function(){
	//console.log('rootscope',$rootScope);
	var promiseData;
	mockWeatherService.getWeather().then(function(data){
	promiseData = data ;
	});
	scope.$apply();
	expect(promiseData).to.equal(55);

});
 afterEach(function () {
      
      $rootScope = null;
      scope =null;
    });

});
