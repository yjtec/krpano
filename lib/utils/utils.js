"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importAudio = exports.importCDN = void 0;

var importCDN = function importCDN(url, name) {
  return new Promise(function (resolve) {
    var dom = document.createElement('script');
    dom.src = url;
    dom.type = 'text/javascript';

    dom.onload = function () {
      resolve(window[name]);
    };

    document.head.appendChild(dom);
  });
};

exports.importCDN = importCDN;

var importAudio = function importAudio(uniqueId) {
  var audio = document.createElement('audio');
  audio.id = uniqueId;
  audio.autoplay = true;
  audio.preload = true;
  audio.controls = true;
  audio.style.display = 'none';
  document.body.appendChild(audio);
  return audio;
};

exports.importAudio = importAudio;