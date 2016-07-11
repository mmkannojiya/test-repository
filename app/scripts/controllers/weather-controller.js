weatherApp.controller("weatherController", function($scope, weatherService,providerExample) {
    $scope.description = "a simple weather app";
	console.log('weather provider value',providerExample.title);
	//providerExample.setType('ranie');
    setTemprature();
	
 function setTemprature(){
		
		weatherService.getWeather("Delhi").then(function(data){
		console.log('weather data got',data);
		$scope.temp = data ; 
		return data ;
	},function(error){
		console.log('error in controller',error);
		
	})
		
	}

	
	$scope.name = "Harry";
    $scope.color = "#333333";
    $scope.reverseName = function(){
     $scope.name = $scope.name.split("").reverse().join("");
    };
    $scope.randomColor = function(){
        $scope.color = '#'+Math.floor(Math.random()*16777215).toString(16);
    };
	 
  })