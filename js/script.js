// VARIABLES
// MAIN MENU
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
// resp menu
const menuBar = document.querySelector('.barMenuBtn');
const closeMenu = document.querySelector('.closebtn');
const allSideBar = document.querySelector('.responsive__menu');
console.log(closeMenu);

// ADRESS(URL)
const page1 = "https://tsula21.github.io/page-1/";
const page2 = "https://tsula21.github.io/page-2/";
const page3 = "https://tsula21.github.io/page-3/";
const page4 = "https://tsula21.github.io/page-4/";

//html
let progressBarHtml = document.querySelector('.html');
let valueContainerHtml = document.querySelector('.valhtml');
// CSS
let progressBarCss = document.querySelector('.css');
let valueContainerCss = document.querySelector('.valcss');
// JAVASCRIPT
let progressBarJs = document.querySelector('.js');
let valueContainerJs = document.querySelector('.valjs');
// PHOTOSHOP
let progressBarPs = document.querySelector('.ps');
let valueContainerPs = document.querySelector('.valps');

let progressValue = 0;
let progressValueJs = 0;
let progressValuePs = 0;
// END VALUES
let progressEndValueHtml = 81;
let progressEndValueCss = 80;
let progressEndValueJs = 60;
let progressEndValuePs = 10;

let speed = 20;

console.log(progressBarPs);
console.log(valueContainerPs);

// Event Listeners
// MAIN MENU
home.addEventListener('click', () => {
    window.open(page1, '_top');
});

about.addEventListener('click', () => {
    window.open(page2, '_top');
});

portfolio.addEventListener('click', () => {
    window.open(page3, '_top');
});

contact.addEventListener('click', () => {
    window.open(page4, '_top');
});

menuBar.addEventListener('click',openMenu);
closeMenu.addEventListener('click',menuCloes);

// HTML
let progressHtml = setInterval(() => {
    progressValue++;
    valueContainerHtml.textContent = `${progressValue}%`;
    progressBarHtml.style.background = `conic-gradient(
        #ffb400 ${progressValue * 3.6}deg,
        #252525 ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValueHtml){
        clearInterval(progressHtml);
    }
}, speed);

// CSS
let progressCss = setInterval(() => {
    progressValue++;
    valueContainerCss.textContent = `${progressValue}%`;
    progressBarCss.style.background = `conic-gradient(
        #ffb400 ${progressValue * 3.6}deg,
        #252525 ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValueCss){
        clearInterval(progressCss);
    }
}, speed);

// JAVASCRIPT
let progressJs = setInterval(() => {
    progressValueJs++;
    valueContainerJs.textContent = `${progressValueJs}%`;
    progressBarJs.style.background = `conic-gradient(
        #ffb400 ${progressValueJs * 3.6}deg,
        #252525 ${progressValueJs * 3.6}deg
    )`;
    if(progressValueJs == progressEndValueJs){
        clearInterval(progressJs);
    }
}, speed);

// PHOTOSHOP
let progressPs = setInterval(() => {
    progressValuePs++;
    valueContainerPs.textContent = `${progressValuePs}%`;
    progressBarPs.style.background = `conic-gradient(
        #ffb400 ${progressValuePs * 3.6}deg,
        #252525 ${progressValuePs * 3.6}deg
    )`;
    if(progressValuePs == progressEndValuePs){
        clearInterval(progressPs);
    }
}, speed);




function openMenu(){
    menuBar.classList.add('active');
    closeMenu.classList.add('active');
    allSideBar.classList.add('active');
}

function menuCloes(){
    closeMenu.classList.remove('active');
    menuBar.classList.remove('active');
    allSideBar.classList.remove('active');
}