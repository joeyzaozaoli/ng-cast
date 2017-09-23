angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      var parent = this;

      this.videos = [];
      this.currentVideo = parent.videos[0];

      this.onClick = function(video) {
        parent.currentVideo = video;
      };

      this.searchResults = function(string) {
        parent.selectVideo(string);
      };

      this.selectVideo = function(string) {
        youTube.search({query: string, max: 5, key: YOUTUBE_API_KEY}, function(videos) {
          parent.videos = videos;
          parent.currentVideo = videos[0];
        });
      };

      parent.selectVideo('swan lake');
    },
    templateUrl: 'src/templates/app.html'
  });
