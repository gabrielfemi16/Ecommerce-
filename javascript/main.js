const right = document.getElementById("right");
const firstElem = document.getElementById("first");
const secondElem = document.getElementById("second");
const time4Elem = document.getElementById("time4");
const time5Elem = document.getElementById("time5");

setInterval(() => {
    let launchDate = new Date("oct 27, 2025, 00:00:00").getTime();
    let now = new Date().getTime();
    let distance = launchDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    firstElem.innerHTML = `${days}`;
    secondElem.innerHTML = `${hours}`;
    time4Elem.innerHTML = `${minutes}`;
    time5Elem.innerHTML = `${seconds}`;

    

    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
}, 1000);
