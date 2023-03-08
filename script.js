function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function showSongInfo(songName) {
	// Open a new window with the song info page
	window.open(songName + '.html', '_blank');
}
