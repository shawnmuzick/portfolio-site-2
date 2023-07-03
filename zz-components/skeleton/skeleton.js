export const skeleton = ` 
let up = 8;
let left = 9;
let down = 10;
let right = 11;
let size = 64;

let map = new Map();
map.set("up", up * size);
map.set("left", left * size);
map.set("down", down * size);
map.set("right", right * size);
map.set(8, up * size);
map.set(9, left * size);
map.set(10, down * size);
map.set(11, right * size);

class Skeleton {
  constructor({
    img,
    frameX = 0,
    frameY = 10,
    width = 64,
    height = 64,
    x = 0,
    y = 0,
  }) {
    this.img = img;
    this.frameX = frameX;
    this.frameY = frameY * height;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "./components/skeleton/skeleton.png";
    this.scaleWidth = this.width * 1.5;
    this.scaleHeight = this.height * 1.5;
    this.speed = 5;
    this.isIdle = true;
  }
  update(start = 0, end = 8, offset = 1) {
    if (this.frameX >= this.width * end * offset) {
      this.frameX = start;
    }
    this.frameX += this.width * offset;
  }

  up() {
    this.frameY = map.get("up");
    this.y -= this.speed;
  }

  left() {
    console.log('left');
    this.frameY = map.get("left");
    this.x -= this.speed;
  }

  down() {
    this.frameY = map.get("down");
    this.y += this.speed;
  }

  right() {
    this.frameY = map.get("right");
    this.x += this.speed;
  }

  idle() {
    this.frameY = map.get(this.frameY / this.height);
    this.frameX = 0;
    this.isIdle = true;
  }
}
const canvas = document.createElement("canvas");
canvas.classList.add("canvas");
canvas.classList.add('componentInner');

const u = document.createElement('button');
const l = document.createElement('button');
const r = document.createElement('button');
const d = document.createElement('button');
const btns = [l,r,u,d];
const dir = ['u','l','r','d'];
const arr = ['^','<','>','v'];
let TOUCH = false;

const gamepad = document.createElement('div');
gamepad.classList.add('gamepad');

for(let i = 0; i < btns.length; i++){
   btns[i].classList.add('gamepad-btn');
   btns[i].innerText = arr[i];
   btns[i].value = arr[i];
   btns[i].setAttribute('id', dir[i]);
   btns[i].addEventListener('pointerdown',(e)=>{
      const interval = setInterval(()=>{
      handleTouch(e); 
    }, 100)
    document.body.addEventListener('pointerup',(e)=>{
     clearInterval(interval);
     keyUp();
    });
  });

   gamepad.appendChild(btns[i]);
};

document.getElementById('skeleton').prepend(gamepad);
document.getElementById('skeleton').prepend(canvas);
const context = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let player; 

function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0,0,canvas.width, canvas.height);
}

function draw(obj) {
  let offset = 1;
  let updateParams = [0];
  let scaleX = 0;
  let scaleY = 0;
  if (obj.isIdle) {
    updateParams.push(0);
  } else {
    updateParams.push(8);
  }
  context.drawImage(
    obj.img,
    obj.frameX,
    obj.frameY,
    obj.width * offset,
    obj.height * offset,
    obj.x - obj.width - scaleX,
    obj.y - obj.width - scaleY,
    obj.scaleWidth * offset,
    obj.scaleHeight * offset
  );
  obj.update(...updateParams, offset);
}

function paint() {
  clear();
  draw(player);
}
function keydown(e, player) {
  player.isIdle = false;
  switch (e.key) {
    case "ArrowRight":
      player.right();
      break;
    case ">":
      player.right();
      break;
    case "ArrowLeft":
      player.left();
      break;
    case "<":
      player.left();
      break;
    case "ArrowUp":
      player.up();
      break;
    case "^":
      player.up();
      break;
    case "ArrowDown":
      player.down();
      break;
    case "v":
      player.down();
      break;
  }
}
function handleTouch(e) {
  e.key = e.target.value;
  keydown(e, player);
}

function keyUp() {
  player.idle();
}

document.addEventListener("keydown", (e) => keydown(e, player));
document.addEventListener("keyup", keyUp);
window.onload = ()=>{
  player = new Skeleton({ x: centerX, y: centerY, context });
  setInterval(paint, 1000 / 15);
}
`;
