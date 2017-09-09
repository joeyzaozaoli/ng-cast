angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      var parent = this;

      this.videos = [];
      this.video = parent.videos[0];

      this.selectVideo = function(video) {
        parent.video = video;
      };

      this.searchResults = function(string) {
        parent.populateLiveData(string);
      };

      this.populateLiveData = function(string) {
        youTube.search({query: string, max: 5, key: YOUTUBE_API_KEY}, function(videos) {
          parent.videos = videos;
          parent.video = videos[0];
        });
      };

      parent.populateLiveData('swan lake');
    },
    templateUrl: '/src/templates/app.html'
  });
