
const circle = document.getElementById('circle');
const input = document.getElementById('myTextInput');
const button = document.getElementById('myButton');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');

const colors = ['red','blue', '#184da3', 'rgb(124, 31, 186)', 'rgba(124, 31, 186 ,.3)', 'yellow' , 'green', 'rgba(252, 211, 30,.6)', '#000' , 'pink'];

button.addEventListener('click', () => {
  circle.style.backgroundColor = input.value.toLowerCase();
});

resetButton.addEventListener('click', () => {
  circle.style.backgroundColor = 'initial';
});

randomButton.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  circle.style.backgroundColor = colors[randomColor];
});
