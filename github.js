(function() {


  var github = function($http) {


    var getUser = function(username) {

      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getJson = function(username) {
      return $http.get("obj.json")
        .then(function(response) {
          return response.data;
        });

    };    


    var getRepos = function(user) {

      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    
    var getRepoDetails = function(username, reponame) {

      var repos;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;

      return $http.get(repoUrl)
        .then(function(response) {
          repo = response.data;
          return $http.get(repoUrl + "/collaborators");
        })
        .then(function(response){
          repo.collaborators = response.data;
          return repo;
        });

    };

    return {
      getJson:getJson,
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
        //returns an object
    };
  };

  var module = angular.module("githubViewer"); // having reference to the already created module.
  module.factory("github", github); // registering the service


}());