const startButton = document.getElementById('start-button');
const rouletteItems = document.getElementById('roulette-items');
let isSpinning = false;
let spinDuration;

startButton.addEventListener('click', () =< {
  if (isSpinning) return;

  isSpinning = true;
  spinDuration = Math.random() *3000 + 3000;

  rouletteItems.style.transition = 'top ${spinDuration}ms cubic-bezier(.1, .1, .1, 1)';
  rouletteItems.style.top = '-${rouletteItems.offsetHeight}px';

  setTimeout(() => {
    isSpinning = false;
    rouletteItems.style.transition ='';
    rouletteItems.style.top ='0px';

    const selectedItemIndex = Math.floor(Math.random() * rouletteItems.children.length);
    const selectedItem = rouletteItems.children[selectedItemIndex];
    alert('今日の部位は${selectedItem.textContent}です！');
  },spinDuration);
});
  
