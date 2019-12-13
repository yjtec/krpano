export var importCDN = function importCDN(url, name) {
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
export var importAudio = function importAudio(uniqueId) {
  var audio = document.createElement('audio');
  audio.id = uniqueId;
  audio.autoplay = true;
  audio.preload = true;
  audio.controls = true;
  audio.style.display = 'none';
  document.body.appendChild(audio);
  return audio;
};