

app.controller('AppController', ['$rootScope','$state', function($rootScope, $state){


    this.GoToSettings = function () {
        if ($state.$current == "settings") {
            $state.go("mainPage");
        } else {
            $state.go("settings");
        }
    }

}]);