angular.module("scroll", []).directive('ngScroll', function () {
    return function (scope, element, attributes) {
        var list = element[0];

        element.bind('scroll', function () {
            if (list.scrollTop + list.offsetHeight >= list.scrollHeight) {
                scope.$apply(attributes.ngScroll);
            }
        });
    };
});
