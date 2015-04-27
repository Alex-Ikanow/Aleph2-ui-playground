insightAdminApp.controller('analyzeController', 
	['$scope', 
	function ($scope) {
		
		$scope.example_tabs = [ true, false ];
		
		$scope.tabClick = function($event, tab_id) {			
			$event.preventDefault();
			for (var i in $scope.example_tabs) $scope.example_tabs[i] = (i == tab_id);
		};
		
	}
]);

