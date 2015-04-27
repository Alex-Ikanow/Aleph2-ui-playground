insightAdminApp.controller('importController', 
	['$scope', '$modal', 'bucketService',
	function ($scope, $modal, bucketService) {
		
		////////////////////////////////////////////////////////////////////
		//
		// State:

		$scope.buckets = bucketService.getBuckets();
		$scope.selected = $scope.buckets[0];				
		
		////////////////////////////////////////////////////////////////////
		//
		// Controller interface:

		$scope.selectBucket = function(bucket) {
			$scope.selected = bucket;
		};
		$scope.isBucketSelected = function(bucket) {
			return bucket === $scope.selected; 
		};
		$scope.refreshBucketList = function() {			
			bucketService.resetBuckets();
		};		
		
		////////////////////////////////////////////////////////////////////
		//
		// Controller internal logic:
		
		// Look for changes in the buckets
		
		$scope.$watch(bucketService.getBucketUpdateDate, 
				function(new_value, old_val) {
					//TODO: check if selected is still present, remove if not
					if (!$scope.selected) {
						$scope.selected = $scope.buckets[0];
					}
				}
			);
		
		////////////////////////////////////////////////////////////////////
		//
		// Modals interface:
		
		$scope.openLinkedSource = function(size) {

		    var modalInstance = $modal.open({
		      templateUrl: 'partials/import_linked_source.html',
		      controller: 'importLinkedSourceController',
		      size: size,
		      resolve: {
		        selected: function () {
		          return $scope.selected;
		        }
		      }
		    });

		    modalInstance.result.then(function (return_val) {
		      // incorporate return_val into $scope
		    	//TODO: copy the object back again
		    }, function () {});
		  };		
		  
		$scope.openEnrichments = function(size) {

			    var modalInstance = $modal.open({
			      templateUrl: 'partials/import_enrichments.html',
			      controller: 'importEnrichmentController',
			      size: size,
			      resolve: {
			        selected: function () {
			          return $scope.selected;
			        }
			      }
			    });

			    modalInstance.result.then(function (return_val) {
			      // incorporate return_val into $scope
			    	//TODO: copy the object back again
			    }, function () {});
			  };		
		  
			$scope.openAnalytics = function(size) {

			    var modalInstance = $modal.open({
			      templateUrl: 'partials/import_analytics.html',
			      controller: 'importAnalyticsController',
			      size: size,
			      resolve: {
			        selected: function () {
			          return $scope.selected;
			        }
			      }
			    });

			    modalInstance.result.then(function (return_val) {
			      // incorporate return_val into $scope
			    	//TODO: copy the object back again
			    }, function () {});
			  };		
			  
			$scope.openSchemas = function(size) {

			    var modalInstance = $modal.open({
			      templateUrl: 'partials/import_schemas.html',
			      controller: 'importSchemasController',
			      size: size,
			      resolve: {
			        selected: function () {
			          return $scope.selected;
			        }
			      }
			    });

			    modalInstance.result.then(function (return_val) {
			      // incorporate return_val into $scope
			    	//TODO: copy the object back again
			    }, function () {});
			  };		
				  
			$scope.openNewBucket = function(size) {

			    var modalInstance = $modal.open({
			      templateUrl: 'partials/import_new_bucket.html',
			      controller: 'importNewBucketController',
			      size: size,
			      resolve: {
			        selected: function () {
			          return $scope.selected;
			        }
			      }
			    });

			    modalInstance.result.then(function (return_val) {
			      // incorporate return_val into $scope
			    	//TODO: copy the object back again
			    }, function () {});
			  };		
				  
	}
]);

