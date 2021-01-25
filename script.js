const video = document.getElementById('video');
const stop = document.getElementById('stop');
const play = document.getElementById('play');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play & pause video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//Update play/pause icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Update progress & timestamp
function updateProgress() {
    return true;
}


function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress() {
    return true;
}

//All event listeners 
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('click', setVideoProgress);