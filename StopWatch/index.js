const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapseTime = 0;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapseTime = currentTime - startTime;

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapseTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapseTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapseTime % 1000) / 10);

    let formattedHours = String(hours).padStart(2, "0");
    let formattedMinutes = String(minutes).padStart(2, "0");
    let formattedSeconds = String(seconds).padStart(2, "0");
    let formattedMilliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}
