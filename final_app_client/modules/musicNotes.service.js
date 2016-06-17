angular
    .module('MusicBand')
    .factory('musicNotes', musicNotes);

function musicNotes() {
    var service = {
        'd': 'assets/do.wav',
        piano: {
            // 65: 'assets/do.wav',
            65: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_middle_C.mp3',
            87: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_C_sharp.mp3',
            83: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D.mp3',
            69: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D_sharp.mp3',
            68: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3',
            70: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F.mp3',
            82: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F_sharp.mp3',
            71: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G.mp3',
            84: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G_sharp.mp3',
            72: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A.mp3',
            89: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A_sharp.mp3',
            74: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_B.mp3',

            75: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_middle_C.mp3',
            85: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_C_sharp.mp3',
            76: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D.mp3',
            73: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D_sharp.mp3',
            186: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3',
            79: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F.mp3',
            222: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F_sharp.mp3',
            80: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G.mp3',
            191: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G_sharp.mp3',
            219: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A.mp3',
            190: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A_sharp.mp3',
            221: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_B.mp3',

            90: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_middle_C.mp3',
            88: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_C_sharp.mp3',
            67: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D.mp3',
            86: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_D_sharp.mp3',
            66: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3',
            78: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F.mp3',
            77: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_F_sharp.mp3',
            188: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_G.mp3',
            81: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_A_sharp.mp3',
            220: 'https://dl.dropbox.com/u/37434025/PianoTones/piano_E.mp3'
        },

        guitar: {
            81: 'assets/1.wav',
            87: 'assets/2.wav',
            69: 'assets/3.wav',
            82: 'assets/4.wav',
            84: 'assets/5.wav',
            89: 'assets/6.wav',
            85: 'assets/7.wav',
            73: 'assets/8.wav',
            79: 'assets/9.wav',
            80: 'assets/10.wav',
            219: 'assets/11.wav',
            221: 'assets/12.wav',
            220: 'assets/13.wav',
            65: 'assets/14.wav',
            83: 'assets/15.wav',
            68: 'assets/16.wav',
            70: 'assets/17.wav',
            71: 'assets/18.wav',
            72: 'assets/19.wav',
            74: 'assets/20.wav',
            75: 'assets/21.wav',
            76: 'assets/22.wav',
            186: 'assets/23.wav',
            222: 'assets/1.wav',
            90: 'assets/2.wav',
            88: 'assets/3.wav',
            67: 'assets/4.wav',
            86: 'assets/5.wav',
            66: 'assets/6.wav',
            78: 'assets/7.wav',
            77: 'assets/8.wav',
            188: 'assets/9.wav',
            190: 'assets/10.wav',
            191: 'assets/11.wav'
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