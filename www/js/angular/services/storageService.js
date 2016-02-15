app.factory("storageService", [function () {


    return {

        _get: function () {
            var result = [];

            if (localStorage && localStorage.urlCollection) {
                var temp = localStorage.getItem('urlCollection');
                if (temp != undefined) {
                    result = JSON.parse(temp);
                } else {
                    localStorage.removeItem('urlCollection');
                }
            }

            return result;
        },

        _set: function (arr) {
            localStorage.setItem('urlCollection', JSON.stringify(arr));

        },
        Remove: function (url) {
            var arr = this._get();
            var result = -1;

            for (var i = 0; i < arr.length; i++) {
                if (arr[i].url == url) {
                    arr.splice(i, 1);
                    result = i;
                    break;
                }
            }

            this._set(arr);
            return result;
        },
        GetFirstUrl: function () {
            return this._get()[0];
        },
        GetAll: function () {
            return this._get();
        },
        Any: function () {
            return localStorage && localStorage.urlCollection;
        },
        Add: function (url) {
            var arr = this._get();
            arr.push(url);
            this._set(arr);
        }
    }
}]);