const audio = document.querySelector(".audio");
const isiSurat = document.querySelector(".pesan");
const card = document.querySelector(".card");
const content2 = document.querySelector(".content2");
const wa = document.querySelector(".wa");

let i = 0;
let speed = 50;

function Mulai() {
    card.style.transition = "0.5s ease";
    card.style.transform = "scale(0)";
    card.style.opacity = "0";

    audio.volume = 1.0;
    audio.play();

    setTimeout(() => {
        content2.style.display = "block";
        typeWriter();
    }, 500);
}

function typeWriter() {
    if (i < ucapanSurat.length) {
        isiSurat.value += ucapanSurat.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        wa.style.display = "block";
    }
}

function Beraksi() {
    alert("Ujian akan dimulai!");
    window.location.href = "mathexam.html";
}
