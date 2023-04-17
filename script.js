function getRandomContent() {
    // Get random image from Unsplash API
    fetch('https://source.unsplash.com/random')
        .then(response => {
            document.getElementById('random-image').src = response.url;
        });

    // Get random audio from FreeSound API
    fetch('https://freesound.org/apiv2/search/text/?query=random&token=YOUR_API_KEY_HERE')
        .then(response => response.json())
        .then(data => {
            const previewUrl = data.results[0].previews['preview-hq-mp3'];
            document.getElementById('random-audio').src = previewUrl;
        });

    // Get random text from Lorem Ipsum API
    fetch('https://loripsum.net/api')
        .then(response => response.text())
        .then(data => {
            document.getElementById('random-text').innerHTML = data;
        });

    // Get random video from YouTube API
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=random&type=video&key=YOUR_API_KEY_HERE')
        .then(response => response.json())
        .then(data => {
            const videoId = data.items[0].id.videoId;
            document.getElementById('random-video').src = `https://www.youtube.com/embed/${videoId}`;
        });
}

// Get initial random content on page load
getRandomContent();

// Add event listener to refresh button
document.getElementById('refresh-button').addEventListener('click', () => {
    getRandomContent();
});
