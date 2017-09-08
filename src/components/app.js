angular.module('video-player')

  .component('app', {
    controller: function() {
      var parent = this;
      this.videos = exampleVideoData;
      this.video = exampleVideoData[0];
      this.handleTitleClick = function(video) {
        parent.video = video;
      };
    },
    templateUrl: '/src/templates/app.html'
  });
