(function(){

"use strict";

function ToDoController($scope){
  $scope.count = 0;
  $scope.tasks = [];

  $scope.addTask = function(task){
    $scope.tasks.push(task);
    $scope.count++;
  };

  $scope.removeTask = function(task){
    var taskToRemove = $scope.tasks.indexOf(task);
    $scope.tasks.splice(taskToRemove,1);
    $scope.count--;
  };

}

    ToDoController.$inject = ['$scope'];

angular
  .module('toDo', [])
  .controller('ToDoController', ToDoController)
  .config(['$compileProvider', function($compileProvider){
    $compileProvider.debugInfoEnabled(false);
  }]);

})();
