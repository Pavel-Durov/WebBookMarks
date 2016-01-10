


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
        //var per = $sce.trustAsResourceUrl(url);
        //var trusted = $sce.getTrustedResourceUrl(url);
        this.startPageUrl = url;//

    }
}]);