const titleBtn = document.getElementById("title-btn");
const links = document.getElementById("links");
const header = document.querySelector(".header");
const audio = document.querySelector("audio");
const logo = document.querySelector(".logo");
const mute = document.getElementById("mute");

titleBtn.addEventListener("click", () => {
	links.classList.toggle("active");
	header.classList.toggle("active");
});

logo.addEventListener("click", () => {
	logo.classList.toggle("active");
	if (logo.classList.contains("active")) {
		audio.play();
	} else {
		audio.pause();
	}
});
