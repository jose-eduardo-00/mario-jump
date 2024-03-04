const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const overBoard = document.querySelector(".over-board");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

let score = 0;

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && marioPosition > 80) {
    score++;
  }

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    overBoard.classList.remove("hidden");

    const finalScore = document.querySelector(".score");
    finalScore.innerHTML += `Score: ${score}`;

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);

const btnReset = document.querySelector(".reset");

btnReset.addEventListener("click", () => {
  window.location.reload();
});
