"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(krpano, musicBg, musicExplain) {
  var web = navigator.userAgent;
  var isiOS = !!web.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var music_bg = '';
  var music_explain = '';

  window.getXmlScene = function (music1, music2, loop1, loop2) {
    if (music1) {
      krpano.set('layer["musicBg_img"].crop', '0|0|100|100');
    } else {
      krpano.set('layer["musicBg_img"].crop', '0|100|100|100');
    }

    if (music2) {
      krpano.set('layer["musicExplain_img"].crop', '0|0|100|100');
    } else {
      krpano.set('layer["musicExplain_img"].crop', '0|100|100|100');
    }

    if (music1 != musicBg.src) {
      music_bg = music1;
      musicBg.src = music1;

      if (loop1 == 0) {
        musicBg.loop = true;
      } else {
        musicBg.loop = false;
      }
    }

    if (music2 != musicExplain.src) {
      music_explain = music2;
      musicExplain.src = music2;

      if (loop2 == 0) {
        musicExplain.loop = true;
      } else {
        musicExplain.loop = false;
      }
    }
  };

  window.playMusicBg = function () {
    musicBg.load();
    musicBg.play();
  };

  window.playMusicExplain = function () {
    musicExplain.load();
    musicExplain.play();
  }; //播放暂停背景音乐


  window.musicBgPlayOrPause = function () {
    if (music_bg !== null) {
      if (!musicBg.paused) {
        krpano.set('layer["musicBg_img"].crop', '0|100|100|100');
        musicBg.pause();
      } else {
        krpano.set('layer["musicBg_img"].crop', '0|0|100|100');
        musicBg.play();
      }
    }
  }; //播放暂停解说


  window.musicExplainPlayOrPause = function () {
    if (music_explain !== null) {
      if (!musicExplain.paused) {
        krpano.set('layer["musicExplain_img"].crop', '0|100|100|100');
        musicExplain.pause();
      } else {
        krpano.set('layer["musicExplain_img"].crop', '0|0|100|100');
        musicExplain.play();
      }
    }
  };

  musicBg.addEventListener('play', function () {
    document.removeEventListener('click', playMusicBg, false);
    document.removeEventListener('WeixinJSBridgeReady', playMusicBg, false);
  }, false);
  musicExplain.addEventListener('play', function () {
    document.removeEventListener('click', playMusicExplain, false);
    document.removeEventListener('WeixinJSBridgeReady', playMusicExplain, false);
  }, false); //ios微信下自动播放音乐

  if (isiOS) {
    document.addEventListener("WeixinJSBridgeReady", playMusicBg, false);
    document.addEventListener("WeixinJSBridgeReady", playMusicExplain, false);
  } else {
    playMusicBg();
    playMusicExplain();
  }

  document.addEventListener('click', playMusicBg);
  document.addEventListener('click', playMusicExplain);
  var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
  var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');

  var onVisibilityChange = function onVisibilityChange() {
    if (document[hiddenProperty]) {
      musicBg.pause();
      musicExplain.pause();
    } else {
      musicBg.play();
      musicExplain.play();
    }
  };

  document.addEventListener(visibilityChangeEvent, onVisibilityChange);
};

exports.default = _default;