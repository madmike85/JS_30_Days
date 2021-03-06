const clock = document.querySelector('#clock');
const hexColor = document.querySelector('#hex-color');

function hexClock() {
    const time = new Date();
    let hours = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let clockStr = hours + ':' + minutes + ':' + seconds;
    let hexColorStr = '#' + hours + minutes + seconds;

    clock.textContent = clockStr;
    hexColor.textContent = hexColorStr;

    document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);