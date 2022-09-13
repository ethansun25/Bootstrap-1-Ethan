document.getElementById("flashOn").addEventListener("click", flashOn => {document.body.style.setProperty("--playstate", "running")})
document.getElementById("flashOff").addEventListener("click", flashOff => {document.body.style.setProperty("--playstate", "paused")})
document.getElementById("audioplayer").addEventListener("click", playAudio => {new Audio("audio/happysong.mp3").play()})