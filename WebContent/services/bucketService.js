
insightAdminApp.service('bucketService', [ '$http', '$q', function($http, $q) {
	
	////////////////////////////////////////////////////////////////////////
	//
	// STATE
	//
	
	var _buckets = [];
	var _bucket_last_updated = new Date();
	
	var _demo_buckets = 
		[
		 {
			 name: 'Netflow Logs',
			 source: {
				 type: 'File',
				 summary: 'S3, Streaming, CSV'
			 },
			 objects: 341643,
			 enrichments: [ 'IP Extraction', 'IP Geolocation' ],
			 schema: {
				 isSearchable: true,
				 isTimeSliced: true,
				 isGeoAnalysisEnabled: true,
				 isGraphAnalysisEnabled: true,
				 isNumericAnalysisEnabled: true,        	
				 isCustomEnabled: false
			 },
			 availableAnalytics: [ 'Graph Layout' ]
		 },
		 {
			 name: 'IP Blacklist Lookups',
			 source: {
				 type: 'Upload',
				 summary: 'Excel'
			 },
			 objects: 10000,
			 enrichments: [ ],
			 schema: {
				 isSearchable: false,
				 isTimeSliced: false,
				 isGeoAnalysisEnabled: false,
				 isGraphAnalysisEnabled: false,
				 isNumericAnalysisEnabled: false,        	
				 isCustomEnabled: false
			 },
			 availableAnalytics: [ ]
		 },
		 {
			 name: 'Open Source Threat Intel',
			 source: {
				 type: 'API',
				 summary: 'JSON, Daily'
			 },
			 objects: 52647,
			 enrichments: [ 'Cyber NLP', 'IP Extraction' ],
			 schema: {
				 isSearchable: true,
				 isTimeSliced: false,
				 isGeoAnalysisEnabled: false,
				 isGraphAnalysisEnabled: true,
				 isNumericAnalysisEnabled: false,        	
				 isCustomEnabled: true
			 },
			 availableAnalytics: [ 'Graph Layout', 'Content Analysis' ]
		 },
		 {
			 name: 'Geo-political twitter streams',
			 source: {
				 type: 'API',
				 summary: 'JSON, Hourly'
			 },
			 objects: 2145954,
			 enrichments: [ 'NLP', 'Twitter' ],
			 schema: {
				 isSearchable: true,
				 isTimeSliced: true,
				 isGeoAnalysisEnabled: true,
				 isGraphAnalysisEnabled: true,
				 isNumericAnalysisEnabled: false,        	
				 isCustomEnabled: false
			 },
			 availableAnalytics: [ 'Graph Layout', 'Content Analysis' ]
		 },
		 {
			 name: 'Geo Layers - DC overlays',
			 source: {
				 type: 'Web',
				 summary: '10 pages, Weekly'
			 },
			 objects: 21,
			 enrichments: [ 'XPath', 'Attachment' ],
			 schema: {
				 isSearchable: false,
				 isTimeSliced: false,
				 isGeoAnalysisEnabled: true,
				 isGraphAnalysisEnabled: false,
				 isNumericAnalysisEnabled: false,        	
				 isCustomEnabled: false
			 },
			 availableAnalytics: [ ]
		 }
		 ];
	
	////////////////////////////////////////////////////////////////////////
	//
	// INTERFACE
	//

	this.getBucketUpdateDate = function() {
		return _bucket_last_updated;
	};

	this.getBuckets = function() {
		return _buckets;
	};

	this.resetBuckets = function() {
		while (_buckets.length) {
			_buckets.pop();
		}
		$http.get('/').
		  success(function(data, status, headers, config) {
				for (var x in _demo_buckets) {
					_buckets.push(_demo_buckets[x]);
				}
				_bucket_last_updated = new Date();
		  }).
		  error(function(data, status, headers, config) {
				alert('error');
		  });		
	};
	
	////////////////////////////////////////////////////////////////////////
	//
	// INITIALIZATION LOGIC
	//
	
	// Launch request:
	this.resetBuckets();
	

}]);