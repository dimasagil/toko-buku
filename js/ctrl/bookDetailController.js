app.controller('BookDetailController', ['$scope', '$routeParams', function ($scope, $routeParams) {

    var self = this;

    self.id = $routeParams.id;

    self.book = {
        id: 1,
        title: 'Greatest Book',
        price: 200000,
    }

    self.buy = function (id) {
        $scope.home.item_cart.push(id);
    }

}]);
