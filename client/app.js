//Created by Muli on 09-May-16.
angular.module('app', [
    'ui.router',
    'app.services',
    'app.controllers',
    'ngMaterial'
])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        console.log('config');
            // $urlRouterProvider.otherwise('/');

            // $stateProvider
            //     .state('home', {
            //         url: '/',
            //         templateUrl: 'components/statics/home.html'
            //     });

            // $locationProvider
            //     .html5Mode(true)
            //     .hashPrefix('!');

        }])
    .run(['$rootScope', '$state', function ($rootScope, $state) {

        console.log('run');
        $rootScope.$on('$stateChangeError', function (evt, to, toParams, from, fromParams, error) {
            if (error.redirect) {
                $state.go(error.redirect);
            } else {
                $state.go('error', {status: error.status})
            }
        })
    }]);