setTimeout(() => go("s2"), 7000);

function go(id) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");

  if (id === "s7") {
    const btn = document.getElementById("kitchen-next");
    btn.style.display = "none";
    setTimeout(() => btn.style.display = "inline-block", 10000);
  }
}

// MEET
function checkMeet() {
  if (meetVal() === "diggin") {
    hideBox("s2");
    document.getElementById("bg-image").classList.add("lit");
    go("s3");
    setTimeout(() => go("s4"), 3000);
  } else msg("meet-msg", "Come on…");
}

// SONG
function checkSong() {
  if (songVal().startsWith("arz")) {
    hideBox("s4");
    document.getElementById("music").play();
    go("s5");
    setTimeout(() => {
      document.getElementById("final-line").innerText =
        "Everything feels different since you came ❤️";
      setTimeout(() => go("s6"), 3000);
    }, 3000);
  } else msg("song-msg", "Almost.");
}

// FLOWER
function checkFlower() {
  if (flowerVal() === "sunflower") {
    hideBox("flower-q");
    playVideo("sunflower.mp4");
    showShayari("shayari-1");
  } else msg("flower-msg", "Come on…");
}

// PURPLE (FIXED)
function checkColor() {
  if (colorVal() === "purple") {
    hideBox("purple-q");
    playVideo("purple.mp4");
    setTimeout(() => go("s9"), 2000); // ✅ THIS WAS MISSING
  } else msg("color-msg", "Come on…");
}

// CITY
function checkCity() {
  if (cityVal() === "udaipur") {
    hideBox("city-q");
    playVideo("udaipur.mp4");
    showShayari("shayari-2");
  } else msg("city-msg", "Come on…");
}

// HELPERS
function hideBox(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("hidden");
}

function playVideo(file) {
  const v = document.getElementById("bg-video");
  v.src = "assets/" + file;
  v.style.opacity = "1";
  v.play();
}

function showShayari(id) {
  const s = document.getElementById(id);
  s.style.display = "none";
  void s.offsetWidth;
  s.style.display = "block";
  document.getElementById("voice").currentTime = 0;
  document.getElementById("voice").play();
}

function replayShayari(id) {
  showShayari(id);
}

// INPUT HELPERS
const meetVal = () => document.getElementById("meet-input").value.toLowerCase().trim();
const songVal = () => document.getElementById("song-input").value.toLowerCase().trim();
const flowerVal = () => document.getElementById("flower-input").value.toLowerCase().trim();
const colorVal = () => document.getElementById("color-input").value.toLowerCase().trim();
const cityVal = () => document.getElementById("city-input").value.toLowerCase().trim();
const msg = (id, t) => document.getElementById(id).innerText = t;
