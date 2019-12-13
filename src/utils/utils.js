export const importCDN = (url, name) => new Promise(resolve => {
  const dom = document.createElement('script');
  dom.src = url;
  dom.type = 'text/javascript';
  dom.onload = () => {
    resolve(window[name]);
  };
  document.head.appendChild(dom);
});

export const importAudio = uniqueId => {
  const audio = document.createElement('audio');
  audio.id = uniqueId;
  audio.autoplay = true;
  audio.preload = true;
  audio.controls = true;
  audio.style.display = 'none';
  document.body.appendChild(audio);
  return audio;
}
