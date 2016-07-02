/**
 * Created by zubair on 01-Jul-16.
 */
App.config(function ($routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
    // route for the home page
        .when('/home', {
            templateUrl: '/pages/home.html',
            controller: 'mainController'
        })
        // route for the about page
        .when('/about', {
            templateUrl: '/pages/about.html',
            controller: 'aboutController'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl: '/pages/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            templateUrl: '/pages/home.html',
            controller: 'mainController'
        });
});
