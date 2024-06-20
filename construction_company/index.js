const btnStart = document.querySelector('.video-cover__btn');

const video = document.querySelector('video');

btnStart.addEventListener('click',function(){
  video.play();
  btnStart.classList.add('hidden');
  console.log(btnStart.classList)
});

// btnStop.addEventListener('click',function(){
//   wrapperVideo.pause();
// });