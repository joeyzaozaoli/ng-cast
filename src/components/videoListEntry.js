angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<',
      handleTitleClick: '<'
    },
    templateUrl: '/src/templates/videoListEntry.html'
  });
