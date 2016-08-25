angular.module('todoapp') //singleton- exists once
.controller('TodoController', function($scope){
  $scope.todos = [];

  $scope.addTodo = function() {
    $scope.todos.push({
      done: false,
      task: $scope.newTodo
    });

    $scope.newTodo = '';
  }
});