const hoaroi = document.querySelector(".flakeani");
function taohoaroi() {
  const flake = document.createElement("img");
  const images = [
    "../images/la.svg",
    "../images/hoa.svg",
    "../images/flower-tet-cuc.svg",
  ];
  flake.src = images[Math.floor(Math.random() * images.length)];
  flake.classList.add("flake");
  flake.style.left = Math.random() * 100 + "vw";
  const size = Math.random() * 20 + 20;
  flake.style.width = `${size}px`;
  flake.style.height = `${size}px`;
  flake.style.animationDuration = Math.random() * 2 + 3 + "s";
  flake.style.animationDelay = "0s";
  hoaroi.appendChild(flake);
  setTimeout(() => {
    flake.remove();
  }, 5000);
}

setInterval(taohoaroi, 300);
