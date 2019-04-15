const video = document.querySelector("video");
if(window.matchMedia('(prefers-reduce-motion)').matches){
	video.removeAttribute("autoplay");
	video.pause();
}