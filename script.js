setTimeout(() => go("s2"), 7000);

function go(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  if (!["s6","s9","s12","s15"].includes(id)) {
    resetBackground();
  }

  if (id === "s7") {
    const btn = document.getElementById("kitchen-next");
    btn.style.display = "none";
    setTimeout(() => btn.style.display = "inline-block", 8000);
  }
}

function resetBackground() {
  const video = document.getElementById("bg-video");
  const image = document.getElementById("bg-image");

  video.pause();
  video.currentTime = 0;
  video.style.opacity = "0";
  image.style.opacity = "1";
}

function playVideo(file) {
  const video = document.getElementById("bg-video");
  const image = document.getElementById("bg-image");

  video.pause();
  video.currentTime = 0;
  video.src = "assets/" + file;

  image.style.opacity = "0";
  video.style.opacity = "1";

  video.play();
}

function normalize(id){return document.getElementById(id).value.toLowerCase().trim();}
function includes(id,arr){return arr.some(a=>normalize(id).includes(a));}
function msg(id,t){document.getElementById(id).innerText=t;}
function hideBox(id){document.getElementById(id).classList.add("hidden");}

function stopVoices(){
  ["voice1","voice2","voice3","voice4"].forEach(id=>{
    let a=document.getElementById(id);
    a.pause();a.currentTime=0;
  });
}

function showShayari(id,voice){
  stopVoices();
  document.getElementById(id).style.display="block";
  document.getElementById(voice).play();
}

function replayShayari(id){
  const map={"shayari-1":"voice1","shayari-2":"voice2","shayari-3":"voice3","shayari-4":"voice4"};
  showShayari(id,map[id]);
}

/* FLOW */

function checkMeet(){
  if(includes("meet-input",["diggin"])){
    hideBox("meet-q");
    go("s3");
    setTimeout(()=>go("s4"),2500);
  } else msg("meet-msg","Yaad karo… 🤍");
}

function checkSong(){
  if(includes("song-input",["arz"])){
    hideBox("song-q");
    document.getElementById("music").play();
    go("s5");
    setTimeout(()=>{
      document.getElementById("final-line").innerText="Tumhare aane se sab badal gaya 💗";
      setTimeout(()=>go("s6"),3000);
    },2000);
  } else msg("song-msg","Thoda aur socho… 🎵");
}

function checkFlower(){
  if(includes("flower-input",["sunflower"])){
    hideBox("flower-q");
    playVideo("sunflower.mp4");
    setTimeout(()=>showShayari("shayari-1","voice1"),1500);
  } else msg("flower-msg","Woh peela phool… 🌻");
}

function checkColor(){
  if(includes("color-input",["black"])){
    hideBox("purple-q");
    playVideo("purple.mp4");
    setTimeout(()=>go("s9"),2500);
  } else msg("color-msg","Yaad karo 🖤");
}

function checkCity(){
  if(includes("city-input",["udaipur"])){
    hideBox("city-q");
    playVideo("udaipur.mp4");
    setTimeout(()=>showShayari("shayari-2","voice2"),1500);
  } else msg("city-msg","Dil wala sheher 💜");
}

function checkBhas(){
  if(includes("bhas-input",["bhas tu"])){
    hideBox("bhas-q");
    playVideo("bhas.mp4");
    setTimeout(()=>go("s12"),2500);
  } else msg("bhas-msg","Yaad hai… 😉");
}

function checkCake(){
  if(includes("cake-input",["biscof","biscoff"])){
    hideBox("cake-q");
    playVideo("cheesecake.mp4");
    setTimeout(()=>showShayari("shayari-3","voice3"),1500);
  } else msg("cake-msg","Meetha yaad karo 🍰");
}

function checkGlass(){
  if(includes("glass-input",["glasses"])){
    hideBox("glass-q");
    playVideo("glasses.mp4");
    setTimeout(()=>go("s15"),2500);
  } else msg("glass-msg","Ek jaisi cheez 👓");
}

function finalNo(){document.getElementById("no-btn").style.display="none";}
function finalYes(){
  hideBox("final-q");
  playVideo("final.mp4");
  setTimeout(()=>showShayari("shayari-4","voice4"),1500);
}
