var url = "https://proxy.notificationsounds.com/message-tones/to-the-point-568/download/file-sounds-1111-to-the-point.mp3"
function playSound() {
  var audio = new Audio(url);
  audio.play();
}

var btn = document.querySelector('#btn');
btn.onclick = function() {
  playSound();
}

document.addEventListener('DOMContentLoaded', function(event) {
  if (document.readyState == 'complete') {
    btn.click();
  }
});
