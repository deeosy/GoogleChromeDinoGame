const dino = document.getElementById('dino');
const stone = document.getElementById('stone');
const score = document.getElementById('score');

function jump() {
  dino.classList.add('jump-animation');
  setTimeout(() => {
    dino.classList.remove('jump-animation');
  }, 500)
}

document.addEventListener('keypress', () => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
});

setInterval(() => {
  score.innerText++;
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  const stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));
  
  if (stoneLeft < 0) {
    stone.style.display = 'none';
  } else {
    stone.style.display = '';
  }

  if (stoneLeft < 60 && stoneLeft > 0 && dinoTop > 160) {
    alert(`You got a score of: ${score.innerText} 
Play again?`);
    location.reload();
  }
}, 50);