'use strict';

// require([
//     'angular'
// ], function (angular) {
//     require([
//         'controllers/todo', 
//         'directives/todoFocus', 
//         'directives/todoEscape',
//         'services/todoStorage'
//     ], function (todoCtrl, todoFocusDir, todoEscapeDir, todoStorageSrv) {
//         angular
//             .module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
//             .controller('TodoController', todoCtrl);
//         angular.bootstrap(document, ['todomvc']);           
//     }); 
// });

var MB = angular.module('MusicBand', [
    'ui.router',
    'SocketData.Service'
]);

MB.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('musicBand', {
        url: '/music-band',
        templateUrl: '/modules/music-band/musicBand.html',
        controller: 'MusicBandCtrl'
    });

    $urlRouterProvider.otherwise('/music-band');
});

MB.run(function(socketData) {

});
