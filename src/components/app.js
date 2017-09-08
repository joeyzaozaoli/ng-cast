angular.module('video-player')

  .component('app', {
    controller: function() {
      console.log(exampleVideoData[0]);
      this.videos = exampleVideoData;
      this.video = exampleVideoData[0];
    },
    templateUrl: '/src/templates/app.html'
  });
