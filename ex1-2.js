const roulette = document.querySelector('#roulette ul');
const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
  const itemCount = roulette.children.length;

  const randomIndex = Math.floor(Math.random() * itemCount);
});
