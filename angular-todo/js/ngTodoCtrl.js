ngTodo.controller('NgTodoCtrl', function ($scope) {
//angular has dependecy injection, hence the $scope argument
  $scope.todos = [
    { val: "learn Angular", completed: true },
    { val: "run a mile", completed: false },
    { val: "take a shower", completed: true },
    { val: "walk the dog", completed: false },
  ];

  $scope.addNewTask = function() {
    $scope.todos.unshift({ completed: false, val: $scope.newTask });
    $scope.newTask = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(task) {
        return !task.completed;
    });
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };

});