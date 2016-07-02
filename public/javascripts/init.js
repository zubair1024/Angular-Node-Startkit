/**
 * Created by zubair on 01-Jul-16.
 */
// create the module and name it scotchApp
var App = angular.module('App', ['ngRoute']);

// create the controller and inject Angular's $scope
App.controller('mainController', function ($scope) {
    console.log('Main Controller is running ...');
});
App.controller('aboutController', function ($scope) {
    console.log('About Controller is running ...');
});
App.controller('contactController', function ($scope) {
    console.log('Contact Controller is running ...');
});