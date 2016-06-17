angular
    .module('MusicBand')
    .factory('musicNotes', musicNotes);

function musicNotes() {
    var service = {
        'd': 'assets/do.wav',
        piano: {
            65: 'assets/do.wav'
        }
    };

    service.playMusicNote = playMusicNote;

    function playMusicNote(instrument, keyCode) {
        var sound = new Howl({
            urls: [service[instrument][keyCode]]
        });
        sound.play();
    }

    return service;
}