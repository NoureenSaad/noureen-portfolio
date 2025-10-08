function openWindow(id) {
  const win = document.getElementById(id + "-window");
  if (win) {
    win.style.display = "flex";
    win.style.zIndex = Date.now();
    makeDraggable(win);
  }
}

function closeWindow(id) {
  const win = document.getElementById(id + "-window");
  if (win) win.style.display = "none";
}

function makeDraggable(el) {
  const header = el.querySelector(".window-header");
  let offsetX = 0, offsetY = 0, isDown = false;

  header.addEventListener("mousedown", (e) => {
    isDown = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    el.style.zIndex = Date.now();
  });

  document.addEventListener("mouseup", () => isDown = false);
  document.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    el.style.left = `${e.clientX - offsetX}px`;
    el.style.top = `${e.clientY - offsetY}px`;
  });
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();