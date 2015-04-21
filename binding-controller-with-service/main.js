'use strict';
angular.module('app', ['task', 'admin']).service('taskService', function () {
    var self = this;
    self.model = {tasks: [1, 2, 3]};

    self.loadTasks = function () {
        self.model.tasks = [1, 2, 3, 4, 5, 6];
    };
});

angular.module('task', [])
    .controller('TaskCtrl', function ($scope, taskService) {
        $scope.model = taskService.model;

        $scope.loadTasks = function () {
            taskService.loadTasks();
        };
    });

angular.module('admin', [])
    .controller('AdminCtrl', function ($scope, taskService) {
        $scope.model = taskService.model;

        $scope.loadTasks = function () {
            taskService.loadTasks();
        };
    });
