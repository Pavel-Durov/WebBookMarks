


app.controller('settingsController', ['$rootScope', '$state', 'storageService', function ($rootScope, $state, storageService) {

    this.addUrl = function () {
        if (this.urlCandidate) {
            storageService.Add(this.urlCandidate);
        }
        this.loadurls();
    }

    this.back = function () {
        $state.go("mainPage");
    }
    this.loadurls = function () {
        var temp = storageService.GetAll();

        this.urlCollection = [];
        for (var i = 0; i < temp.length; i++) {
            this.urlCollection.push({
                url: temp[i],
                icon: temp[i] + "/favicon.ico"
            });
        }
    }

    this.navigateTo = function (url) {
        $rootScope.nextUrl = url;
        $state.go("mainPage");
    }
    this.Remove = function (url) {
        storageService.Remove(url);
        this.loadurls();
    }
    this.loadurls();
}]);