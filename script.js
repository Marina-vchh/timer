const millisecondsSection = document.querySelector('#millisecondsId');
const secondsSection = document.querySelector('#secondsId');
const minutesSection = document.querySelector('#minutesId');
const hoursSection = document.querySelector('#hoursId');

const results = document.querySelector('#results__bloc');


let milliseconds = 00;
let seconds = 00;
let minutes = 00;
let hours = 00;
let interval;
let disabled = true;

const clear = () => {
   millisecondsSection.innerHTML = 00;
   secondsSection.innerHTML = 00;
   minutesSection.innerHTML = 00;
   hoursSection.innerHTML = 00;
}

const time = () =>{
   ++milliseconds;
   if(milliseconds <= 99){ 
      millisecondsSection.innerHTML = `${milliseconds}`
   } else {
      ++seconds
      secondsSection.innerHTML = `${seconds}`
      milliseconds = 0
      millisecondsSection.innerHTML = `${milliseconds}`
   }

   if(seconds > 60) {
      ++minutes;
      minutesSection.innerHTML = minutes;
      seconds = 0;
      secondsSection.innerHTML = `${seconds}`;
      milliseconds = 0
      millisecondsSection.innerHTML = `${milliseconds}`
   }

   if(minutes > 60){
      ++hours;
      hoursSection.innerHTML = hours;
      minutes = 0;
      minutesSection.innerHTML = minutes;
      seconds = 0;
      secondsSection.innerHTML = `${seconds}`;
      milliseconds = 0
      millisecondsSection.innerHTML = `${milliseconds}`
   }
   saveButton.disabled = false;
}


const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const saveButton = document.querySelector('#save');

startButton.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(time, 10);
})

pauseButton.addEventListener('click', () => {
   clearInterval(interval)
})

stopButton.addEventListener('click', () => {
   clearInterval(interval);
   clear();
   disabledSave();
});

saveButton.addEventListener('click', () => {
   clearInterval(interval)
   let counter = 0;
   results.innerHTML += `<div class = 'results__save'><span class = 'counter'>${++counter}.</span> ${milliseconds} : ${seconds} : ${minutes} : ${hours}</div>`
   clear();
   clearInterval();
});

const disabledSave = () =>{
   if(disabled){
      saveButton.disabled = true;
   }
}
disabledSave()



