(function() {
//alert("helo")
  var app = angular.module("githubViewer");

  var MainController = function($http,$scope,github, $interval, $location) {
    
    $scope.color_filter = [];
    $scope.pattern_filter = [];
    $scope.material_filter = [];
    $scope.tvf = {};
    $scope.tryit = {}; 
    
    var OnReadComplete = function(data) {
      $scope.object = data;
      $scope.curtains = $scope.object.data;
        
      
      var len = $scope.curtains.length;

      angular.forEach($scope.curtains, function(item){
        for (var i = 0; i < item.color_filter.length; i++) {
                $scope.tryit[item.color_filter[i]] = true;
            }
         });

       for (var key in $scope.tryit) {
            $scope.color_filter.push(key);
           }

      $scope.checked = { color: [] };

     /* for (var key1 in $scope.tryit){
        var temp = [];
        angular.forEach($scope.curtains, function(item){
         for (var i = 0; i < item.color_filter.length; i++) {
           if(key1 == item.color_filter[i]){
            temp.push(item);
           }
          }
         });
        tvf[key1] = temp;
      }*/
    
    //alert(tvf.length);

    };

    var OnError = function(reason) {
      $scope.error = "could not find data";
    };  


    $scope.clicked = function(obj){
      $scope.p_image = obj;
      $scope.p_image_url = obj.url; 
    }

    /*$scope.get_popUp = function () {
        alert('opening pop up');
        $modal.open({ templateUrl : 'user.html'});
    }*/


    // ******************   Search **********************

    $scope.p_image;
    $scope.repoSortOrder = "+id";
    $scope.username = "angular";
    $scope.countDown = 5;
    github.getJson().then(OnReadComplete,OnError);

    //alert("here");
  };
 
  app.controller("MainController", MainController);

}());


