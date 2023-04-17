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
const lastfmApiKey = "YOUR_LASTFM_API_KEY";

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
        Authorization: "cIx05540qpxd4HTZGFFdoheqhEMqAuzdBveuwO5WBhZNb90uzn0v7bZO",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      const videoUrl = data.videos[0].video_files[0].link;
      video.src = videoUrl;
    });

  // Get random artist from Last.fm API and update background color
  fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=" + lastfmApiKey + "&format=json")
    .then((response) => response.json())
    .then((data) => {
      const artists = data.artists.artist;
      const randomIndex = Math.floor(Math.random() * artists.length);
      const randomArtist = artists[randomIndex].name;
      document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    });
}

// Initial content load
refreshContent();

// Add event listener for refresh button
refresh.addEventListener("click", refreshContent);
