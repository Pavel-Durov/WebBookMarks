app.directive('imageonload', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('load', function () {

            });
            element.bind('error', function (element) {
                //settings default image
                element.srcElement.src = "./images/default-image.png"
            });
        }
    };
});