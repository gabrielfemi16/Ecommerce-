const right = document.getElementById("right");
const firstElem = document.getElementById("first");
const secondElem = document.getElementById("second");
const time4Elem = document.getElementById("time4");
const time5Elem = document.getElementById("time5");

const image=document.getElementById("hero-img");
 
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

}, 1000);

let chair = 0
setInterval(()=>{
 chairImageArr = ["../chair1.png", "../chair2.png", "../chair3.png"]
  image.src=chairImageArr[chair]
  
  if(chair > 1) {
    chair = 0
  } else {
    chair += 1
  }
},2000)
