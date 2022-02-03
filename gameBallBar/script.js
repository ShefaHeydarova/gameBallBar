let general = document.querySelector("#general");
let bar = document.querySelector(".bar");
let ball = document.querySelector(".ball");
let player = document.querySelector("#player");

let barX = 0;
let ballX = 0;
let ballY = 0;
let dx = 5;
let dy = 5;
let scoreP = 0;

document.onkeydown = barMove; 

function barMove(e) {
  e = e || window.event;

  if (e.keyCode == "39") {
    if (barX < 0 || barX < 600) {
      barX += 25;
    }
  }

  if (e.keyCode == "37") {
    if (barX > 0) {
      barX -= 25;
    }
  }

  bar.style.left = barX + "px";
}

const myinterval = setInterval(game, 40);

function game() {

  if (ballX < 0 || ballX > 650) {
    dx *= -1;
    general.style.backgroundColor = "#"+color();
  }

  if (ballY < 0) {
    dy *= -1;
    general.style.backgroundColor = "#"+color();
  } else if (ballY > 450 && ballX >= barX - 25 && ballX <= barX + 100) {
    scoreP++;
    player.innerHTML = `Point : ${scoreP}`;
    general.style.border = "none";
    general.style.backgroundColor = "#"+color();
    ball.style.backgroundColor = "#"+color();
    bar.style.backgroundColor = "#"+color();
    dx+=2;
    dy+=2;
    dy *= -1;
  } else if (ballY > 450) {
    clearInterval(myinterval);
    document.body.innerHTML = `Uduzdunuz. Point : ${scoreP}`;
  }

  ballX += dx;
  ballY += dy;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function color(){
    
let arr = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let x = "";
for (let i = 0; i <6; i++) {
x += arr[Math.floor(Math.random() * arr.length)];
}

return x;

}