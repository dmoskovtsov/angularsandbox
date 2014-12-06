var app = angular.module("app", ['scroll']);

app.controller("listController", function ($scope) {
    var counter = 0;
    $scope.todos = [];

    $scope.getTodos = function () {
        for (var i = 0; i < 50; i++) {
            $scope.todos.push({
                name: 'todo ' + counter
            });
            counter += 1;
        }
    };
});
