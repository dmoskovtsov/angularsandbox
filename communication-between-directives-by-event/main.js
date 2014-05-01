var app = angular.module("app", []);

app.directive("chart", function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            scope.showMenu();
        });
        element.bind("mouseout", function () {
            scope.hideMenu();
        });
    }
});
app.controller("ChartCtrl", function ($scope, $rootScope) {
    $scope.showMenu = function () {
        $rootScope.$emit('show');
    }
    $scope.hideMenu = function () {
        $rootScope.$emit('hide');
    }
});

app.controller("MenuCtrl", function ($scope, $rootScope) {
    $scope.isMenuVisible = false;

    $rootScope.$on('show', showMenu);
    $rootScope.$on('hide', hideMenu);

    function showMenu() {
        $scope.isMenuVisible = true;
        $scope.$apply()
    }

    function hideMenu() {
        $scope.isMenuVisible = false;
        $scope.$apply()
    }
});