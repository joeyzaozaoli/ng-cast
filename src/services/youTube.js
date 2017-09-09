angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(options, cb) {
      return $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
          part: 'snippet',
          maxResults: options.max || 5,
          q: options.query,
          type: 'video',
          videoEmbeddable: 'true',
          key: options.key
        }
      }).then(function successCallback(result) {
        console.log('get success', result);
        cb(result.data.items);
      }, function errorCallback(error) {
        console.log('get failure', error);
      });
    };
  });
