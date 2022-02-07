/* Get elements*/
const videoPlayer = document.querySelector(".video-player");
const video = document.querySelector(".video-player__viewer");
const videoPlayerBtn = document.querySelector(".video-player__btn");
const videoPlayerPoster = document.querySelector(".video-player__poster");
const controlsPlayBtn = document.querySelector(".constrols__play-btn");
const volumeBtn = document.querySelector(".controls__sound");
const volumeIcon = document.querySelector(".controls__volume");
const progressBar = document.querySelector(".controls__duration");
const scale = document.querySelector(".controls__scale");

/* Creat functions*/

function hideBtn() {
  videoPlayerPoster.classList.add("hidden");
  if (video.paused) {
    video.play();
    videoPlayerBtn.style.display = "none";
    controlsPlayBtn.classList.remove("play");
    controlsPlayBtn.classList.add("pause");
  } else {
    videoPlayerBtn.style.display = "block";
    video.pause();
    controlsPlayBtn.classList.remove("pause");
    controlsPlayBtn.classList.add("play");
  }
}

function changeVolume() {
  let value = this.value;
  video.volume = value;
  this.style.background = `linear-gradient( to right, #bdae82 0%, #bdae82 ${
    value * 100
  }%, #c8c8c8 ${value * 100}%, #c8c8c8 100% )`;
  if (this.value === "0") {
    volumeIcon.style.backgroundImage = "url(./assets/svg/mute.svg)";
  } else {
    volumeIcon.style.backgroundImage = "url(./assets/svg/volume.svg)";
  }
}

function makeMute() {
  if (video.muted) {
    video.muted = false;
    volumeIcon.style.backgroundImage = "url(./assets/svg/volume.svg)";
  } else {
    video.muted = true;
    volumeIcon.style.backgroundImage = "url(./assets/svg/mute.svg)";
  }
}

function changeProgressBar() {
  video.currentTime = this.value;
  this.style.background = `linear-gradient( to right, #bdae82 0%, #bdae82 ${this.value}%, #c8c8c8 ${this.value}%, #c8c8c8 100% )`;
  video.currentTime = (video.duration / 100) * this.value;
}
function updateProgressBar(event) {
  const value = ((event.target.currentTime / video.duration) * 100).toFixed(0);

  progressBar.style.background = `
            linear-gradient( to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100% )`;
  progressBar.value = value;
}

function changeScale() {
  video.webkitEnterFullScreen();
}

/* Hook up the event listeners*/
video.addEventListener("timeupdate", updateProgressBar);
videoPlayerPoster.addEventListener("click", hideBtn);
videoPlayerBtn.addEventListener("click", hideBtn);
video.addEventListener("click", hideBtn);
controlsPlayBtn.addEventListener("click", hideBtn);
//
//
//
//
//
//
volumeBtn.addEventListener("input", changeVolume);
volumeIcon.addEventListener("click", makeMute);
//
//
//
//
progressBar.addEventListener("input", changeProgressBar);
//
//
//
//
//
//
scale.addEventListener("click", changeScale);
