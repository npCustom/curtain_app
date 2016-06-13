(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github,$routeParams) {

    var OnUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(OnRepo, OnError);
    };

    var OnError = function(reason) {
      $scope.error = "could not find data";
    };

    var OnRepo = function(data) {
      $scope.repos = data;
     };

    $scope.repoSortOrder = "-stargazers_count";
    $scope.username =$routeParams.username;
    github.getUser($scope.username).then(OnUserComplete,OnError);

  };
  app.controller("UserController", UserController);
}());
