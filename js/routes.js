app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'HomeController'
    }).when('/detail/:id', {
        templateUrl: 'pages/book-detail.html'
    }).when('/cart', {
        templateUrl: 'pages/cart.html',
        controller: 'CartController'
    }).when('/checkout', {
        templateUrl: 'pages/checkout.html',
        controller: 'CheckoutController'
    }).otherwise({
        redirectTo: '/'
    });

});