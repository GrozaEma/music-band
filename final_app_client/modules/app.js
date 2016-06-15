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
        })
        .state('play-piano', {
            url: '/play/piano',
            templateUrl: '/modules/instruments/piano.html',
            controller: 'PianoCtrl'
        })
        .state('play-guitar', {
            url: '/play/guitar',
            templateUrl: '/modules/instruments/guitar.html',
            controller: 'GuitarCtrl'
        })
        .state('play-drum', {
            url: '/play/drum',
            templateUrl: '/modules/instruments/drum.html',
            controller: 'DrumCtrl'
        })
        .state('play-violin', {
            url: '/play/violin',
            templateUrl: '/modules/instruments/violin.html',
            controller: 'ViolinCtrl'
        });

    $urlRouterProvider.otherwise('/music-band');
});
