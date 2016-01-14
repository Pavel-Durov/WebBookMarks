


app.controller('mainPageController', ['$rootScope', '$state', 'storageService', '$sce', '$stateParams', function ($rootScope, $state, storageService, $sce, $stateParams) {


    this.noConfigurationsYet = !storageService.Any();

    this.navigateToSettings = function () {
        $state.go('settings');
    }

    if (!this.noConfigurationsYet) {
        var url = "none";
        if (!$rootScope.nextUrl) {
            var url = storageService.GetFirstUrl();

        } else {
            url = $rootScope.nextUrl;
        }
        this.startPageUrl = url;
    }


  

    (function () {
        this.left_qesture_area = document.getElementById("left-gesture-container");


        this.right_qesture_area = document.getElementById("right-gesture-container");


        this.hammertime = new Hammer(this.left_qesture_area);
        this.hammertime.on('swipe', function (ev) {
            console.log("Left - " + ev);

            var webview = document.getElementById("main-webview");
            webview.goBack();

        });

        this.hammertime.on('press', function (ev) {
            console.log("Left - " + ev);
            $state.go("settings");
        });
        
    })();
}]);