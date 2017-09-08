angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
    },
    templateUrl: '/src/templates/app.html'
  });
