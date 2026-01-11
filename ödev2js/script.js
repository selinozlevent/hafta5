// Tüm drum butonlarını seç
const drums = document.querySelectorAll(".drum");

// Butona tıklama olayını dinle
drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    playSound(drum.dataset.sound);
    animateButton(drum);
  });
});

// Klavye tuşlarını dinle
document.addEventListener("keydown", (event) => {
  let keyMap = {
    a: "sounds/kick.wav",
    s: "sounds/snare.wav",
    d: "sounds/hihat.wav",
    f: "sounds/tom.wav",
    g: "sounds/crash.wav",
  };

  if (keyMap[event.key]) {
    playSound(keyMap[event.key]);
    let button = [...drums].find((d) => d.dataset.sound === keyMap[event.key]);
    animateButton(button);
  }
});

// Ses çalma fonksiyonu
function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.currentTime = 0; // Sesin baştan başlaması için
  audio.play();
}

// Animasyon fonksiyonu
function animateButton(button) {
  button.classList.add("playing");
  setTimeout(() => {
    button.classList.remove("playing");
  }, 150);
}
