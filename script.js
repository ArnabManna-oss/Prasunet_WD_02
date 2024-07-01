let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCounter = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('lapBtn').disabled = true;
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('startStopBtn').textContent = 'Stop';
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('lapBtn').disabled = false;
    }
    isRunning = !isRunning;
}

function pause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('pauseBtn').textContent = 'Resume';
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('pauseBtn').textContent = 'Pause';
    }
    isRunning = !isRunning;
}

function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('display').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 1;
    document.getElementById('display').textContent = '00:00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
    document.getElementById('pauseBtn').textContent = 'Pause';
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('lapBtn').disabled = true;
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    const lapTime = document.getElementById('display').textContent;
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCounter++;
}

var bdy = document.querySelector('body');
function changeN() {
    bdy.classList.add("night");
}

var bdy1 = document.querySelector('body');
function changeL() {
    bdy1.classList.remove("night");
}

