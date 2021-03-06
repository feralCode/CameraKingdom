var services = angular.module('NetworkWebApp.services', ['ngResource']);

//var baseUrl = 'http://localhost:18080/pi_twin-web/rest';

/*
services.factory('rewardsFactory', function ($resource) {
	return $resource(baseUrl + '/flights/2', {}, {
        get: { method: 'GET'},
        
    });
});

services.factory('rewardFactory', function ($resource) {
	return $resource(baseUrl + '/reward', {}, {
     
        create: { method: 'POST' }
    });
});
services.factory('deleterewardFactory', function ($resource) {
    return $resource(baseUrl + '/reward/delete?id=:id', {}, {
      
        remove: { method: 'DELETE', params: {id: '@id'} }
    });
});
services.factory('Updatereward', function ($resource) {
    return $resource(baseUrl + '/reward/update?id=:id', {}, {
    	update: { method: 'PUT', params: {id: '@id'} }
    });
});


services.factory('rewardPutFactory', function ($resource) {
    return $resource(baseUrl + '/reward/update/:id', {}, {
        update: { method: 'PUT', params: {id: '@id'} }
    });
});
*/
//Instagram
services.factory('InstagramFactory', ['$http', function ($http){

	var dataFactory = {};

	dataFactory.photos = function (){
		return $http.get('http://localhost:3000/instagram/json');
	};

	return dataFactory;

}]);

//Youtube
services.factory('YoutubeFactory', ['$http', function ($http){

	var dataFactory = {};

	dataFactory.videos = function (){
		return $http.get('http://localhost:3000/youtube');
	};

	return dataFactory;

}]);

