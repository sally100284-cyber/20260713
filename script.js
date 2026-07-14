const playBtn = document.getElementById("play");
const audio = document.getElementById("audio");
playBtn.addEventListener("click", () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = "❚❚";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});
audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
});
