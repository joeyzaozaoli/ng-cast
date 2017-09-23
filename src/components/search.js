angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
