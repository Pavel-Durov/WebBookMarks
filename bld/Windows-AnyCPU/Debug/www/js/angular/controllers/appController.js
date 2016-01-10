

app.controller('AppController', ['$rootScope','$state', function($rootScope, $state){


    this.GoToSettings = function () {
        if ($state.$current == "settings") {
            $state.go("mainPage");
        } else {
            $state.go("settings");
        }
    }
    this.webViewBackCommand = function () {
        //x-ms-webview.goBack();
        var webview = document.getElementById("main-webview");
        webview.goBack();
    };
}]);