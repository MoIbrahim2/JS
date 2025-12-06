class Bird {
  constructor() {
    this.img = document.createElement("img");
    this.img.src = "../images/bird.gif";
    this.img.className = "bird";
    document.body.appendChild(this.img);

    this.left = Math.random() * (window.innerWidth - this.img.width);
    this.top = Math.random() * (window.innerHeight - this.img.height);
    this.direction = Math.random() > 0.5 ? 1 : -1;

    this.img.style.left = this.left + "px";
    this.img.style.top = this.top + "px";
    if (this.direction === -1) this.img.style.transform = "scaleX(-1)";

    this.moveInterval = setInterval(() => this.move(), 100);

    this.img.addEventListener("click", () => {
      this.img.style.border = "10px solid red";
      this.fall();
    });
  }

  move() {
    this.left += 10 * this.direction;

    if (this.left + this.img.width > window.innerWidth) {
      this.direction = -1;
      this.img.style.transform = "scaleX(-1)";
      this.top = Math.random() * (window.innerHeight - this.img.height);
    } else if (this.left < 0) {
      this.direction = 1;
      this.img.style.transform = "scaleX(1)";
      this.top = Math.random() * (window.innerHeight - this.img.height);
    }

    this.img.style.left = this.left + "px";
    this.img.style.top = this.top + "px";
  }

  fall() {
    clearInterval(this.moveInterval);
    let top = this.top;
    const fallInterval = setInterval(() => {
      top += 12;
      this.img.style.top = top + "px";
      this.img.style.transform = "rotate(90deg)";
      if (top > window.innerHeight - this.img.height) {
        clearInterval(fallInterval);
        this.img.style.display = "none";
      }
    }, 30);
  }
}

class Game {
  constructor(count) {
    this.birds = [];
    for (let i = 0; i < count; i++) {
      this.birds.push(new Bird());
    }
  }
}

new Game(10);
