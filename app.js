(function(){

"use strict";

function ToDoController($scope){
  $scope.count = 0;

  $scope.addTask = function(task){

    $scope.count++;
  };

  $scope.removeTask = function(task){

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
