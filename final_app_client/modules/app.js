'use strict';

var MB = angular.module('MusicBand', [
    'ui.router',
    'SocketData.Service'
]);

MB.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('musicBand', {
            url: '/music-band',
            templateUrl: '/modules/music-band/musicBand.html',
            resolve: {
                socket: function(socketDataService) {
                    return socketDataService.init();
                }
            },
            controller: 'MusicBandCtrl'
        })
        .state('play', {
            url: '/play/:username/:instrument',
            templateUrl: '/modules/instruments/play.html',
            controller: 'PlayCtrl'
        });

    $urlRouterProvider.otherwise('/music-band');
});
