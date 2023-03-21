console.log("page loaded...");
const video = document.getElementById('myVideo');

video.addEventListener('mouseover', () => {
  video.play();
});

video.addEventListener('mouseout', () => {
  video.pause();
  video.currentTime = 0;
});