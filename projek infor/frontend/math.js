document.documentElement.requestFullscreen().catch(()=>{});

let soal = [];
let tanya = [];
let index = 0;
let life = 3;
let score = 0;
let time = 30;
let timer;

function genSoal() {
    for(let i=0;i<10;i++){
        let a = Math.floor(Math.random()*10)+1;
        let b = Math.floor(Math.random()*10)+1;
        soal.push({q:`${a} × ${b}`, a:a*b ,});
    }
}

function render() {
    if(index >= 10){
        alert("Ujian selesai\nSkor: "+score);
        location.reload();
    }

    time = 10;
    document.getElementById("question").innerText = soal[index].q;
    document.getElementById("answer").value="";
    startTimer();
}

function startTimer(){
    clearInterval(timer);
    document.getElementById("timer").innerText=time;
    timer=setInterval(()=>{
        time--;
        document.getElementById("timer").innerText=time;
        if(time<=0){
            salah();
        }
    },1000);
}

function submit(){
    let jawab = document.getElementById("answer").value;
    if(jawab == soal[index].a,tanya.length){
        score+=10;
        index++;
        document.getElementById("score").innerText="Skor: "+score;
        render();
    } else {
        salah();
    }
}

function salah(){
    clearInterval(timer);
    life--;
    document.getElementById("life").innerText="❤️".repeat(life);
    index++;
    if(life<=0){
        jumpscare();
    } else {
        render();
    }
}

function jumpscare(){
    let v=document.getElementById("jumpscare");
    v.style.display="block";
    v.muted=false;
    v.volume=1;
    v.play();
    v.requestFullscreen();
}

genSoal();
render();


document.addEventListener("keydown", e=>{
    if(
        e.ctrlKey || 
        ["Escape","F12"].includes(e.key)
    ){
        e.preventDefault();
        jumpscare();
    }
});

document.addEventListener("visibilitychange", ()=>{
    if(document.hidden) jumpscare();
});

document.addEventListener("fullscreenchange", ()=>{
    if(!document.fullscreenElement) jumpscare();
});
