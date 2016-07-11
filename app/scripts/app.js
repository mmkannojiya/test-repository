var weatherApp = angular.module('weatherApp', ['ui.router']);

weatherApp.provider("providerExample", function () {
  var type;
  return {
    setType: function (value) {
      type = value;
    },
    $get: function () {
      return {
        title: type + "day"
      };
    }
  };
});

weatherApp.config(function($stateProvider, $urlRouterProvider,providerExampleProvider) {
    
    $urlRouterProvider.otherwise('/home');
    console.log('from provider',providerExampleProvider.setType('ranie'));
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'scripts/views/partial-home.html'
        })
        // nested list with custom controller
		.state('home.list', {
			url: '/list/:itemId',
			templateUrl: 'scripts/views/partial-home-list.html',
			controller: function($scope,$stateParams) {
				$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
				console.log('stateparam item',$stateParams.itemId);
			}
		})

		// nested list with just some random string data
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'This is paragraph partial page.'
		})

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});
