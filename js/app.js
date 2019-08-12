var app = angular.module('MyApp', ['ngRoute']);
var api_url = 'http://localhost/intern-api';

app.filter('rupiah', function () {
    return function toRp(angka, prefix) {
        var rev = parseInt(angka, 10).toString().split('').reverse().join('');
        var rev2 = '';
        for (var i = 0; i < rev.length; i++) {
            rev2 += rev[i];
            if ((i + 1) % 3 === 0 && i !== (rev.length - 1)) {
                rev2 += '.';
            }
        }

        return prefix + rev2.split('').reverse().join('') + ',00';
    }
});

app.directive('bookItem', function () {
    return {
        templateUrl: 'directive/book-item.html'
    };
});

app.factory('Server', ['$http', 'Config', function ($http, Config) {

    var self = this;
    self.api_url = 'http://localhost/intern-api';

    return {
        get: function (params, query, cache, test) {
            var config = {};
            if (typeof query !== "undefined") {
                config.params = query;
            }

            config.cache = (typeof cache === "undefined") ? false : cache
            var urls = (test) ? params : self.baseurl + params;
            return $http.get(urls, config)
                .then(function (response) {

                    return response.data;

                }, function (response) {
                    // invalid response
                    // handle in controller ?
                    return response.data;
                });
        },
        post: function (params, data) {

            return $http.post(self.baseurl + params, $.param(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(function (response) {

                    return response.data;

                }, function (response) {
                    // invalid response
                    // handle in controller ?
                    return response.data;
                });
        },
    }
}]);