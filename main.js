const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.body;
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
let timerId;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function changeColor() { 
// body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
// }

// refs.startBtn.addEventListener('click', (event) => { 
//     timerId = setInterval(changeColor, 2000);
//     event.target.setAttribute('disabled', 'disabled');
// })

// refs.stopBtn.addEventListener('click', () => { 
//     clearInterval(timerId);
//     refs.startBtn.removeAttribute('disabled', 'disabled');
// })
refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function changeColor() { 
  timerId = setInterval(function () { body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)] }, 2000);
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.addEventListener('click', stopChangeColor);
}

function stopChangeColor() { 
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', 'disabled');
  refs.stopBtn.removeEventListener('click', stopChangeColor);
  //  console.log('click')
}


