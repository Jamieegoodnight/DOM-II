// Your code goes here


// -----1-----
const ride=document.querySelector('.main-navigation');

ride.addEventListener('mouseover', e => { 
console.log(`RIDE THE FUN BUS`)
})
//-----2------
const navStuff=document.querySelectorAll(`nav a`);
navStuff[0].addEventListener(`mouseover`, e => {navStuff[0].style.color=`pink`});
navStuff[1].addEventListener(`mouseover`, e => {navStuff[1].style.color=`green`});
navStuff[2].addEventListener(`mouseover`, e => {navStuff[2].style.color=`orange`});
navStuff[3].addEventListener(`mouseover`, e => {navStuff[3].style.color=`blue`});
//------4-------
const dblHeading=document.querySelector(`.logo-heading`);
dblHeading.addEventListener(`dblclick`, e=>{dblHeading.style.fontFamily=`Amatic SC`, `cursive`});

//------5-------
const keyPress=document.querySelector(`body`);
keyPress.addEventListener(`keypress`, e=> {alert("ARE YOU HAVING FUN?")});


//------6-------
const copyStuff=document.querySelector(`body`);
copyStuff.addEventListener(`copy`, e=>{alert('HAVE YOUR OWN FUN! THAT IS MY FUN!')});

//------7-------
const moreNav=document.querySelectorAll(`nav a`);
moreNav[0].addEventListener(`mouseout`, e => {navStuff[0].style.color=`red`});
moreNav[1].addEventListener(`mouseout`, e => {navStuff[1].style.color=`yellow`});
moreNav[2].addEventListener(`mouseout`, e => {navStuff[2].style.color=`purple`});
moreNav[3].addEventListener(`mouseout`, e => {navStuff[3].style.color=`beige`});

//------8-------
const wheelIt=document.querySelector(`.home p`);
copyStuff.addEventListener(`wheel`, e=>{
    wheelIt.style.fontFamily=`Amatic SC`, `cursive`; 
    wheelIt.style.fontSize=`10em`
});

//------9-------
window.addEventListener(`load`, e=>{alert(`READY FOR FUN`)});


//------10-------

const text=document.querySelector(`textarea`);
text.addEventListener(`select`, e=>{text.style.color=`red`});