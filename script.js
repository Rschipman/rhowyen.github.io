/* ---------- Audio Toggle ---------- */
const audioBtn = document.getElementById("audio-toggle");
const audio = document.getElementById("forest-audio");

audioBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.3;
    audio.play();
    audioBtn.textContent = "🌲 ambience: on";
  } else {
    audio.pause();
    audioBtn.textContent = "🌲 ambience: off";
  }
});

/* ---------- Collapsible Sections ---------- */
document.querySelectorAll(".collapse-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

/* ---------- Cursor Leaf Trail (Desktop Only) ---------- */
document.addEventListener("mousemove", e => {
  if (window.innerWidth < 768) return;

  const leaf = document.createElement("span");
  leaf.textContent = "🍃";
  leaf.style.position = "fixed";
  leaf.style.left = e.clientX + "px";
  leaf.style.top = e.clientY + "px";
  leaf.style.pointerEvents = "none";
  leaf.style.opacity = "0.6";
  leaf.style.transition = "opacity 1s ease, transform 1s ease";
  document.body.appendChild(leaf);

  setTimeout(() => {
    leaf.style.opacity = "0";
    leaf.style.transform = "translateY(12px)";
  }, 10);

  setTimeout(() => leaf.remove(), 1000);
});
