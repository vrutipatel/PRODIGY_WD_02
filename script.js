let timer;
let time = 0;
let running = false;

function startTimer() {
  if (!running) {
    timer = setInterval(updateDisplay, 10);
    running = true;
  }
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  time = 0;
  updateDisplay();
  document.querySelector(".laps").innerHTML = "";
}

function updateDisplay() {
  time++;
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  document.querySelector(".display").textContent = 
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
}

function lapTimer() {
  const lapTime = document.querySelector(".display").textContent;
  const lapItem = document.createElement("li");
  lapItem.textContent = lapTime;
  document.querySelector(".laps").appendChild(lapItem);
}

document.querySelector(".start").addEventListener("click", startTimer);
document.querySelector(".pause").addEventListener("click", pauseTimer);
document.querySelector(".reset").addEventListener("click", resetTimer);
document.querySelector(".lap").addEventListener("click", lapTimer);











