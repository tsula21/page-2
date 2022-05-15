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
const page1 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_1/Themeforest_1.html";
const page2 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_2/Themeforest_2.html";
const page3 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_3/Themeforest_3.html";
const page4 = "file:///C:/Users/user/Desktop/Themeforest_Portfolio/page_4/Themeforest_4.html";


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
let progressEndValueHtml = 25;
let progressEndValueCss = 70;
let progressEndValueJs = 89;
let progressEndValuePs = 90;

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