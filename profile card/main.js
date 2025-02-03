let time = document.querySelector('[data-testid="currentTimeUTC"]');

let currentTime = new Date();

let hours = currentTime.getUTCHours();
let minutes = currentTime.getUTCMinutes();
let seconds = currentTime.getUTCSeconds();

let currentUTC = hours + ":" + minutes + ":" + seconds;

time.textContent = currentUTC;

// console.log(new Date().toUTCString())