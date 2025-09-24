document.addEventListener('DOMContentLoaded', function () {
    const page1 = document.querySelector('.page1');
    const page2 = document.querySelector('.page2');
    const playNowBtn = document.getElementById('playNowBtn');

    page1.classList.add('active');
    page2.classList.remove('active');

    playNowBtn.addEventListener('click', function () {
        page1.classList.remove('active');
        page2.classList.add('active');
    });
});


let playBtn = document.querySelector("#playNowBtn")
let score = document.querySelector(".sc-ts .ttsr")
let errormsg = document.querySelector(".error-msg")
let nmbtns = document.querySelectorAll(".nm-btns")
let dice = document.querySelector(".dices")
let errmsg = document.querySelector(".error-msg")
let reset = document.querySelector(".resetBtn")
const showRulesBtn = document.querySelector('.showRulesBtn');

playBtn.addEventListener("mouseenter", () => {
    gsap.to(playBtn, { backgroundColor: "#fff", color: "#000", duration: 0.2 })
})
playBtn.addEventListener("mouseleave", () => {
    gsap.to(playBtn, { backgroundColor: "#000", color: "#fff", duration: 0.2 })
})

reset.addEventListener("mouseenter", () => {
    gsap.to(reset, { backgroundColor: "black", color: "#fff", duration: 0.2 })
})
reset.addEventListener("mouseleave", () => {
    gsap.to(reset, { backgroundColor: "white", color: "#000", duration: 0.2 })
})

showRulesBtn.addEventListener('mouseenter', () => {
    gsap.to(showRulesBtn, { backgroundColor: "#fff", color: "#000", duration: 0.2 });
});
showRulesBtn.addEventListener('mouseleave', () => {
    gsap.to(showRulesBtn, { backgroundColor: "#000", color: "#fff", duration: 0.2 });
});




let images = [
    "./images/dice_1.png",
    "./images/dice_2.png",
    "./images/dice_3.png",
    "./images/dice_4.png",
    "./images/dice_5.png",
    "./images/dice_6.png",
]



let selectedNum = undefined;
let hasSelected = false;

nmbtns.forEach((nmbtn) => {
    nmbtn.addEventListener("click", function () {
        selectedNum = Number(nmbtn.innerText);
        console.log(selectedNum);
        nmbtns.forEach(btn => {
            gsap.to(btn, { backgroundColor: "#fff", color: "#000", duration: 0.2 });
            btn.classList.remove("bg-black", "text-white");
        });
        nmbtn.classList.add("bg-black", "text-white");
        gsap.to(nmbtn, { backgroundColor: "#000", color: "#fff", duration: 0.2 });
        errormsg.style.display = "none";
        hasSelected = true; // Mark as selected
    });
});


let diceImg = document.querySelector(".diceImg");
if (diceImg) {
    diceImg.src = images[0];
}

dice.addEventListener("click", function () {
    if (selectedNum === undefined) {
        errormsg.style.display = "block";
        return;
    }

    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);

    if (diceImg) {
        gsap.to(diceImg, {
            rotate: 684,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: function () {
                diceImg.src = images[randomNum - 1];
                // Reset rotation for next time
                gsap.set(diceImg, { rotate: 0 });
            }
        });
    }

    if (selectedNum === randomNum) {
        score.innerText = Number(score.innerText) + 10;
    } else {
        score.innerText = Number(score.innerText) - 5;
    }
    errormsg.style.display = "none";
    hasSelected = false;
    nmbtns.forEach(btn => btn.classList.remove("bg-black", "text-white"));
    selectedNum = undefined;
});


reset.addEventListener("click", function () {
    score.innerText = 0
    errmsg.style.display = 'none'
})

