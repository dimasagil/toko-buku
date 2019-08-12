app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    var self = this;

    $http.get(api_url + '/list.php')
        .then(function (response) {
            $scope.books = response.data;
        }, function (response) {
            return response.data;
        });

}]);
