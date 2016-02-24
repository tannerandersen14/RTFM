angular.module('rtfmApp').controller('threadsCtrl', function($scope, $firebaseArray, threadsRef) {


  $scope.threads = $firebaseArray(threadsRef)

  $scope.threads.$loaded().then(function (threads) {
    console.log(threads);
  });

  $scope.createThread = function (username, title) {
    $scope.threads.$add({
      username: username,
      title: title
    });

  };



});
