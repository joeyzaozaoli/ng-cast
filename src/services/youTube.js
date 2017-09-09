angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(options, callback) {
      $http({
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
      }).then(function success(result) {
        console.log('get success', result);
        callback(result.data.items);
      }, function error(error) {
        console.log('get failure');
      });
    };
  });
