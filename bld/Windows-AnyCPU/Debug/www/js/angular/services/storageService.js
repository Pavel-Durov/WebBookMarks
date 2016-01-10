app.factory("storageService", [function () {


    return {

        _get: function () {
            var result = [];

            if (localStorage && localStorage.urlCollection) {
                var temp = localStorage.getItem('urlCollection');
                result = JSON.parse(temp);
            }

            return result;
        },

        _set: function (arr) {
            localStorage.setItem('urlCollection', JSON.stringify(arr));

        },
        Remove: function (url) {
            var arr = this._get();
            var index = arr.indexOf(url);
            if (index > -1) {
                arr.splice(index, 1);
            }
            this._set(arr);
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