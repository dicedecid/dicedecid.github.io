const refreshButton = document.getElementById("refresh-button");

refreshButton.addEventListener("click", function() {

	// Get random audio from Free Music Archive
	fetch("https://freemusicarchive.org/featured.json")
	  .then(response => response.json())
	  .then(data => {
	    const audio = document.getElementById("audio");
	    const audioUrl = data.audios[Math.floor(Math.random() * data.audios.length)].file;
	    audio.src = audioUrl;
	  })
	  .catch(error => console.log(error));

	// Get random image from Unsplash
	fetch("https://source.unsplash.com/random")
	  .then(response => {
	    const image = document.getElementById("image");
	    image.src = response.url;
	  })
	  .catch(error => console.log(error));

	// Get random video from Coverr
	fetch("https://api.coverr.co/videos/random")
	  .then(response => response.json())
	  .then(data => {
	    const video = document.getElementById("video");
	    const videoUrl = data.mp4;
	    video.src = videoUrl;
	  })
	  .catch(error => console.log(error));

	// Get random text from Bacon Ipsum
	fetch("https://baconipsum.com/api/?type=all-meat&sentences=1")
	  .then(response => response.json())
	  .then(data => {
	    const text = document.getElementById("text");
	    text.innerText = data[0];
	  })
	  .catch(error => console.log(error));


});


