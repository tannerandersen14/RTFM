var app = angular.module('rtfmApp', ['firebase', 'ui.router'])

app.constant('fb', {
  url: 'https://tan-devmtn-rtfm.firebaseio.com/'
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('threads', {
      url: '/threads',
      templateUrl: '/templates/threads.html',
      controller: 'threadsCtrl',
      resolve: {
        threadsRef: function(threadService) {
          return threadService.getThreads()
        }
      }
    })
    .state('thread', {
      url: '/threads/:threadId',
      templateUrl: '/templates/thread.html',
      controller: 'threadCtrl',
      resolve: {
        threadRef: function (threadService, $stateParams) {
          return threadService.getThread($stateParams.threadId);
        },
        commentsRef: function (threadService, $stateParams) {
          return threadService.getComments($stateParams.threadId);
        }
      }
    })
    $urlRouterProvider.otherwise('/threads');




})
