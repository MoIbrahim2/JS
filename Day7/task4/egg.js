class Egg {
  constructor() {
    this.normalImg = "../images/1182.png";
    this.brokenImgSrc = "../images/Uovo_sorridente.png";
    this.x = Math.floor(Math.random() * (window.innerWidth - 80));
    this.y = 0;
    this.isBroken = false;
    this.imgElement = document.createElement("img");
    this.imgElement.src = this.normalImg;
    this.imgElement.className = "egg";
    this.imgElement.style.left = this.x + "px";
    this.imgElement.style.top = this.y + "px";
    document.body.appendChild(this.imgElement);
  }

  move(speed) {
    if (!this.isBroken) {
      this.y += speed;
      this.imgElement.style.top = this.y + "px";
    }
  }

  break() {
    this.isBroken = true;
    this.imgElement.src = this.brokenImgSrc;
  }

  deleteEgg() {
    this.imgElement.remove();
  }
}

class Basket {
  constructor() {
    this.x = (window.innerWidth - 140) / 2;
    this.y = window.innerHeight - 80;
    this.speed = 20;

    this.imgElement = document.createElement("img");
    this.imgElement.src = "../images/basket.png";
    this.imgElement.className = "basket";
    this.imgElement.style.position = "absolute";
    this.imgElement.style.left = this.x + "px";
    this.imgElement.style.top = this.y + "px";

    document.body.appendChild(this.imgElement);

    this.initControls();
  }

  moveLeft() {
    this.x = Math.max(0, this.x - this.speed);
    this.imgElement.style.left = this.x + "px";
  }

  moveRight() {
    this.x = Math.min(window.innerWidth - 160, this.x + this.speed);
    this.imgElement.style.left = this.x + "px";
  }

  initControls() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.moveLeft();
      if (e.key === "ArrowRight") this.moveRight();
    });
  }
}

class Game {
  constructor() {
    this.score = 0;
    this.eggs = [];
    this.basket = new Basket();
    this.spawnRate = 4000;
    this.fallSpeed = 5;
    this.scoreElement = document.getElementById("score");
    this.stopButton = document.getElementById("stopBtn");
    this.stopButton.addEventListener("click", () => this.stop());
    this.start();
  }

  start() {
    this.spawnInterval = setInterval(() => {
      let egg = new Egg();
      this.eggs.push(egg);
    }, this.spawnRate);

    this.gameInterval = setInterval(() => this.main(), 50);
  }

  main() {
    const eggWidth = 80;
    const eggHeight = 90;
    const basketWidth = 160;

    this.eggs.forEach((egg, index) => {
      egg.move(this.fallSpeed);

      if (
        !egg.isBroken &&
        egg.y + eggHeight >= this.basket.y &&
        egg.x + eggWidth >= this.basket.x &&
        egg.x <= this.basket.x + basketWidth
      ) {
        egg.deleteEgg();
        this.eggs.splice(index, 1);
        this.score++;
        this.scoreElement.innerText = `Score: ${this.score}`;
      } else if (!egg.isBroken && egg.y >= window.innerHeight - eggHeight) {
        egg.break();
      }
    });
  }

  stop() {
    clearInterval(this.spawnInterval);
    clearInterval(this.gameInterval);
    alert("Game Stopped! Your score: " + this.score);
  }
}

new Game();
