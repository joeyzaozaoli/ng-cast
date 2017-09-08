angular.module('video-player')

  .component('videoList', {
    bindings: {
      videos: '<',
      handleTitleClick: '<'
    },
    templateUrl: '/src/templates/videoList.html'
  });
