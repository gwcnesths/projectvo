/**
 * Weijian Zeng
 */
angular.module('app.services', [
    // list any dependencies below
    'ngResource'
])
// angular.module('app')
    .factory('API', ['$resource', function ($resource) {

        console.log('resources');

        var TokenResource = $resource('/api/token/:token');
        var ListResource = $resource('/api/list/:wishlistid');
        var UserListResource = $resource('/api/list/:wishlistid/:clientid', { wishlistid: '@wishlistid', clientid: '@clientid'});
        return {
            Token: TokenResource,
            List: ListResource,
            UserList: UserListResource
        };
    }]);
