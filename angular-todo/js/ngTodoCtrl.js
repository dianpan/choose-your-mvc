ngTodo.controller('NgTodoCtrl', function($scope) {
//angular has dependecy injection, hence the $scope argument
  $scope.todos = [
    { val: "read a book", completed: false },
    { val: "run a mile", completed: false },
    { val: "take a shower", completed: true },
    { val: "walk the dog", completed: false },
    { val: "read a book", completed: true },
  ];
});