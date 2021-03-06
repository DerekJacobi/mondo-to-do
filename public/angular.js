(function(){

"use strict";

function ToDoController($scope){
  $scope.count = 0;
  $scope.tasks = [];

  //add task to to-do list
  $scope.addTask = function(task){
    //make sure a task was entered, add to tasks array, clear task input field in html
    if (task !== undefined && $scope.tasks.indexOf(task) === -1) {
      $scope.tasks.push(task);
      $('#task-entry').val('');
      $scope.count++;
    } else if ($scope.tasks.indexOf(task) != -1){
      alert('Task already exists!');
    } else {
      alert('Please enter a task!');
    }
  };

  //remove task from to-do list
  $scope.removeTask = function(task){
    var taskToRemove = $scope.tasks.indexOf(task);
    $scope.tasks.splice(taskToRemove,1);
    $scope.count--;
  };

  $scope.removeAllTasks = function(){
    $scope.count = 0;
    $scope.tasks = [];
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
