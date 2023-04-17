const video = document.getElementById("video");
const text = document.getElementById("text");
const audio = document.getElementById("audio");
const image = document.getElementById("image");
const refresh = document.getElementById("refresh");

// API urls
const textApiUrl = "https://api.quotable.io/random";
const audioApiUrl = "https://api.npr.org/audio/v2/programs/programs.json?apiKey=";
const imageApiUrl = "https://picsum.photos/200";
const videoApiUrl = "https://api.pexels.com/videos/popular?per_page=1&page=1";

// API keys/tokens
const audioApiKey = "YOUR_AUDIO_API_KEY";

// Refresh function
function refreshContent() {
  // Get random text
  fetch(textApiUrl)
    .then((response) => response.json())
    .then((data) => {
      text.innerHTML = data.content;
    });

  // Get random audio
  fetch(audioApiUrl + audioApiKey)
    .then((response) => response.json())
    .then((data) => {
      const items = data.items;
      const randomIndex = Math.floor(Math.random() * items.length);
      const audioUrl = items[randomIndex].audio[0].format.mp4.$text;
      audio.src = audioUrl;
    });

  // Get random image
  image.src = imageApiUrl + "?random=" + Math.random();

  // Get random video
  fetch(videoApiUrl, {
      headers: {
           Authorization: "Bearer cIx05540qpxd4HTZGFFdoheqhEMqAuzdBveuwO5WBhZNb90uzn0v7bZO"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      const videoUrl = data.videos[0].video_files[0].link;
      video.src = videoUrl;
    });

 //get audio
fetch('https://api.jamendo.com/v3.0/tracks/?client_id=80ece56c&limit=1&random=true')
  .then(response => response.json())
  .then(data => {
    const track = data.results[0];
    const audioElement = document.getElementById('audio');
    audioElement.src = track.audio;
  });
}

// Initial content load
refreshContent();

// Add event listener for refresh button
refresh.addEventListener("click", refreshContent);
