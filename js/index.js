// Your code goes here

const dontTouch=document.querySelector('.main-navigation');

dontTouch.addEventListener('mouseover', e => { 
console.log(`DON'T TOUCH THAT!`)
})

const navStuff=document.querySelectorAll(`nav a`);

navStuff[0].addEventListener(`mouseover`, e => {navStuff[0].style.color=`pink`});

navStuff[1].addEventListener(`mouseover`, e => {navStuff[1].style.color=`green`});

navStuff[2].addEventListener(`mouseover`, e => {navStuff[2].style.color=`orange`});
