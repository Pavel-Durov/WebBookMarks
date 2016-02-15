


app.controller('settingsController', ['$rootScope', '$scope', '$state', 'storageService', function ($rootScope, $scope, $state, storageService) {

    this.showActions = false;

    this.addUrl = function () {
        if (this.urlCandidate) {
            storageService.Add({ "url": this.urlCandidate, "image": this.getImageUrl() });
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
                url: temp[i].url,
                icon: temp[i].image
            });
        }
    }
    this.getImageUrl = function (url) {
        if (this.urlImage) {
            return this.urlImage;
        } else {
            return this.urlCandidate + "/favicon.ico"
        }
    }


    this.navigateTo = function (url) {
        $rootScope.nextUrl = url;
        $state.go("mainPage");
    }
    this.Remove = function (item, $event, indexOfElement) {

        var arr = document.getElementsByClassName("settings-bookmark-list-item");
        arr[indexOfElement].className +=  "animated bounceOutLeft";
        storageService.context = this;

        $event.stopPropagation();

        $('#' + indexOfElement).one('oanimationend animationend', function () {

            var result = storageService.Remove(item.url);

            if (result != -1) {
                storageService.context.urlCollection.splice(result, 1);
            }
        });
    }

    this.ovelayClicked = function () {
        this.submitPopUpvisibility = false;
    }

    this.loadurls();

    this.checkEmpty = function () {
        if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
            alert("Fill All Fields !");
        } else {
            document.getElementById('form').submit();
            alert("Form Submitted Successfully...");
        }
    }

    this.submitPopUpvisibility = false;
    this.submitPopUpShow = function () {
        this.submitPopUpvisibility = true;
        //var elem = document.getElementById("add-url-pop-up");
        //elem.style.display = "block";
        //elem.className = "submit-popup-style animate slideInDown";
    }

    this.submitPopUpHide = function () {
        this.submitPopUpvisibility = false;
    }


}]);



