weatherApp.directive("weather", function() {
    return {
      restrict: "A",
      templateUrl: "scripts/views/weather.html",
	  transclude:true,
	  scope: {
            name: "@",
			color: "=",
            reverse: "&"
        },
		
	compile: function(element, attributes){
	console.log('in compile',element);
         return {
             
             post: function(scope, element, attributes, controller, transcludeFn){
				console.log('in post link',element,scope);
             },
			 pre: function(scope, element, attributes, controller, transcludeFn){
				console.log('in pre link',element,attributes);
             }
         }
     }
	}
  })
  
  //http://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/