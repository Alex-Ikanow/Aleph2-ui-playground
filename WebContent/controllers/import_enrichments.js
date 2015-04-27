insightAdminApp.controller('importEnrichmentController', 
		['$scope', '$modalInstance', 'selected',
		function ($scope, $modalInstance, selected) {

			// Deep copy:
			$scope.selected = JSON.parse(JSON.stringify(selected));
			
			$scope.ok = function() {
				$modalInstance.close($scope.selected);
			};
			$scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
			//TODO Other logic
		}
	]);
