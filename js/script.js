const images = document.querySelectorAll(".fly");

function go(image) {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const x = Math.random() * w;
  const y = Math.random() * h;

  image.style.transform = `translate(${x}px, ${y}px)`;
}

if (images.length > 0) {
  images.forEach((img) => {
    go(img);

    setInterval(() => {
      go(img);
    }, 2500);
  });
}