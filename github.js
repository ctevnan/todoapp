angular.module('todoApp')
.controller('GithubController', function($scope, $http) {
  $scope.works = 'djksdksj';

  $scope.$watch('username', function() {
    $http.get('https://api.github.com/users/' + $scope.username + '/repos')
    .then(function(response){
      $scope.repos = response.data
    });
  });
});