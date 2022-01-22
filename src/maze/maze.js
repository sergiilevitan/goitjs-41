'use strict'


const refs = {
  start: document.querySelector('.start'),
  finish: document.querySelector('.finish'),
  maze: document.querySelector('#maze'),
  indicator: document.querySelector("#indicator"),
}

let isInGame = false;

function onStart() {
  isInGame = true;
  refs.indicator.textContent = "InGame";
}

function onFinish() {
  if (isInGame === true) {
    isInGame = false;
    refs.indicator.textContent = "Win";
  }
}
  
function onLeave() {
  if (isInGame === true) {
    isInGame = false;
    refs.indicator.textContent = "Game over";
  }
}
  
function onMazeOver(e) {
  if (isInGame && e.target.classList.contains('block')) {
    isInGame = false;
    refs.indicator.textContent = 'Game over'
  }

  console.log(e.target)
}


refs.start.addEventListener('mouseover', onStart);
refs.finish.addEventListener('mouseover', onFinish);
refs.maze.addEventListener('mouseleave', onLeave);
refs.maze.addEventListener('mouseover', onMazeOver);