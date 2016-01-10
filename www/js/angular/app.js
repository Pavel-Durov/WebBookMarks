var app = angular.module("my-app", ["ui.router", "pascalprecht.translate", 'hamburgerHelper']);

app.config(['$compileProvider', '$translateProvider', '$sceProvider', function ($compileProvider, $translateProvider, $sceProvider) {

    $sceProvider.enabled(false);

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|x-wmapp0):|data:image\//);

    $translateProvider.translations('en_EN', {
        'add_new_url': 'Please add a new url',
        'submit' : 'Submit',
        'back' : 'Back',
        'remove' : 'Remove'
    });

    $translateProvider.preferredLanguage('en_EN');

}]);

app.filter('trusted', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

app.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/mainPage");
	 
	$stateProvider.state('mainPage', {
	    url: "/mainPage",
      templateUrl: "./views/mainPage.html",
      controller: 'mainPageController',
      controllerAs: 'ctrl',
		onEnter: function(){
			console.log("main - Enter state");
		},
		onExit: function(){
			console.log("main - Exit state");
		}})
  

	.state('settings', {
	    url: "/settings",
	    templateUrl: "./views/settingsPage.html",
	    controller: 'settingsController',
        controllerAs: 'ctrl',
		onEnter: function(){
		    console.log("settingsController- Enter state");
		},
		onExit: function(){
		    console.log("settingsController- Exit state");
		}
	})

	});
