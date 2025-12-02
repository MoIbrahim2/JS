// ...existing code...
const startBirds = () => {
  const birds = document.querySelectorAll("img.bird");

  birds.forEach((bird) => {
    const maxLeft = window.innerWidth - bird.width;
    const maxTop = window.innerHeight - bird.height;

    const left = Math.random() * (maxLeft + 1);
    const top = Math.random() * (maxTop + 1);

    bird.style.left = left + "px";
    bird.style.top = top + "px";

    bird.dataset.left = left;
    bird.dataset.dir = Math.random() < 0.5 ? "1" : "-1";
    bird.dataset.speed = Math.random() * 20;

    bird.style.transform =
      bird.dataset.dir === "-1" ? "scaleX(-1)" : "scaleX(1)";
  });

  const timerId = setInterval(() => {
    birds.forEach((bird) => {
      let left = bird.dataset.left * 1;
      let dir = bird.dataset.dir * 1;
      const speed = bird.dataset.speed * 1;
      const maxRight = window.innerWidth - bird.width;

      left = left + dir * speed;

      if (left >= maxRight) {
        left = maxRight;
        dir = -1;
        bird.style.transform = "scaleX(-1)";
      } else if (left <= 0) {
        left = 0;
        dir = 1;
        bird.style.transform = "scaleX(1)";
      }

      bird.dataset.left = left;
      bird.dataset.dir = dir;
      bird.style.left = left + "px";
    });
  }, 100);

  birds.forEach((b) => (b.dataset.timerId = String(timerId)));
  return timerId;
};

const stopBirds = () => {
  clearInterval(document.images[0].dataset.timerId);
};

startBirds();
