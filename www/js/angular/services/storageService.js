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
        Remove: function (index) {
            var arr = this._get();
            var result = arr.splice(index, 1);
            this._set(arr);
            return result;
        },
        GetFirstUrl: function () {
            return this._get()[0].url;
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