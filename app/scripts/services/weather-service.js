weatherApp.service("weatherService", function($q,$http) {
    this.getWeather = function(cityName) {	
      var defer = $q.defer();
	  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=ef7eac21639e8af6bd4c66eb92bdf1d6&units=Metric').then(function(response){
		  
			defer.resolve(response.data.main.temp);
			
		  
	  },function(error){
		  
		  defer.reject(error);
	  })
	  
	  return defer.promise;
    };
  })