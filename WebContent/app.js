//////////////////////////////////////////////////////////////////////////////////////
//
// Application Module
// (and global functionality)
//

var insightAdminApp = angular.module('insightAdminApp', [
  'ngRoute', 'ui.bootstrap'
]).run(
	function ($rootScope) {
		//(this will prevent the router from intercepting 'internal' hrefs used in accordions etc)
		$rootScope.preventDefault = function($event) {
			$event.preventDefault();
		};
	}
);

//////////////////////////////////////////////////////////////////////////////////////
//
// Routing
//

insightAdminApp.config(function($routeProvider) {
                      $routeProvider.
                      when('/', {
                          templateUrl: 'partials/import.html',
                          controller: 'importController'
                        }).
                        when('/administer', {
                          templateUrl: 'partials/administer.html',
                          controller: 'adminController'
                        }).
                        when('/import', {
                          templateUrl: 'partials/import.html',
                          controller: 'importController'
                        }).
                        when('/analyze', {
                          templateUrl: 'partials/analyze.html',
                          controller: 'analyzeController'
                        }).
                        when('/visualize', {
                          templateUrl: 'partials/visualize.html',
                          controller: 'visualizeController'
                        }).
                        otherwise({
                          redirectTo: 'partials/other.html'
                        });
                    });

//////////////////////////////////////////////////////////////////////////////////////
//
// Utility Controllers
//

insightAdminApp.controller('mainController', 
		['$scope', '$location',
		 function ($scope, $location) {
		    $scope.isActive = function (viewLocation) { 
		        return viewLocation === $location.path();
		    };
		}]);
