const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", function() {
	const video = document.querySelector(".quadrant video");
	const audio = document.querySelector(".quadrant audio");
	const image = document.querySelector(".quadrant img");
	const text = document.querySelector(".quadrant p");

	video.src = "path/to/new/video.mp4";
	audio.src = "path/to/new/audio.mp3";
	image.src = "path/to/new/image.jpg";
	text.textContent = "New text content";
});
