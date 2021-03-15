// nav skills

let skillsToggleBtn = document.querySelector('.skills-btn')
let skillsToggle = document.querySelector('.skills-toggle')
let skillsArrow = document.querySelector('.fa-chevron-down')

skillsToggleBtn.addEventListener('click', () => {

    skillsToggle.classList.toggle('skills-toggle-active')
    if (skillsToggle.classList.contains('skills-toggle-active')) { 
    skillsArrow.style = 'color: #5A66FF; transform: rotate(180deg)'}  
    else {
    skillsArrow.style = 'transform: rotate(0deg);'

}

});



// sliders

var counter = 1

setInterval(() => {

    document.querySelector('#radio' + counter).checked = true;
    counter++
    if (counter > 4) {
        counter = 1
    }
    
}, 4000);


// manual slider btns

let manualSliderBtn1 = document.querySelector('.auto-btn1');
let manualSliderBtn2 = document.querySelector('.auto-btn2');
let manualSliderBtn3 = document.querySelector('.auto-btn3');
let manualSliderBtn4 = document.querySelector('.auto-btn4');

manualSliderBtn1.addEventListener ('click', () => {

    document.querySelector('#radio1').checked = true;
})

manualSliderBtn2.addEventListener ('click', () => {

    document.querySelector('#radio2').checked = true;
})

manualSliderBtn3.addEventListener ('click', () => {

    document.querySelector('#radio3').checked = true;
})

manualSliderBtn4.addEventListener ('click', () => {

    document.querySelector('#radio4').checked = true;
})

// nav options animation

let navButtonUXUI = document.querySelector('.uxui')
let navButtonBranding = document.querySelector('.branding')
let navButtonDigital = document.querySelector('.digital')
let navButtonImpresso= document.querySelector('.impresso')
let navButtonEstudos = document.querySelector('.estudos')
let navButtonBio = document.querySelector('.fullbio')

// dots 

let dots = document.querySelector('.dot');
let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');
let dot4 = document.querySelector('.dot4');
let dot5 = document.querySelector('.dot5');

// scroll animations

navButtonUXUI.addEventListener('click', () => {

    navButtonUXUI.classList.add ('active');
    navButtonBranding.classList.remove('active');
    navButtonDigital.classList.remove('active');
    navButtonImpresso.classList.remove('active');
    navButtonEstudos.classList.remove('active');
    navButtonBio.classList.remove('active');

    dot1.style = 'background-color: #5A66FF';
    dot2.style = 'background-color: white';
    dot3.style = 'background-color: white';
    dot4.style = 'background-color: white';
    dot5.style = 'background-color: white';

})

navButtonBranding.addEventListener('click', () => {

    navButtonUXUI.classList.remove ('active');
    navButtonBranding.classList.add('active');
    navButtonDigital.classList.remove('active');
    navButtonImpresso.classList.remove('active');
    navButtonEstudos.classList.remove('active');
    navButtonBio.classList.remove('active');

    dot1.style = 'background-color: white';
    dot2.style = 'background-color: #5A66FF';
    dot3.style = 'background-color: white';
    dot4.style = 'background-color: white';
    dot5.style = 'background-color: white';
})

navButtonDigital.addEventListener('click', () => {

    navButtonUXUI.classList.remove ('active');
    navButtonBranding.classList.remove('active');
    navButtonDigital.classList.add('active');
    navButtonImpresso.classList.remove('active');
    navButtonEstudos.classList.remove('active');
    navButtonBio.classList.remove('active');

    dot1.style = 'background-color: white';
    dot2.style = 'background-color: white';
    dot3.style = 'background-color: #5A66FF';
    dot4.style = 'background-color: white';
    dot5.style = 'background-color: white';
})

navButtonImpresso.addEventListener('click', () => {

    navButtonUXUI.classList.remove ('active');
    navButtonBranding.classList.remove('active');
    navButtonDigital.classList.remove('active');
    navButtonImpresso.classList.add('active');
    navButtonEstudos.classList.remove('active');
    navButtonBio.classList.remove('active');

    dot1.style = 'background-color: white';
    dot2.style = 'background-color: white';
    dot3.style = 'background-color: white';
    dot4.style = 'background-color: #5A66FF';
    dot5.style = 'background-color: white';
})

navButtonEstudos.addEventListener('click', () => {

    navButtonUXUI.classList.remove ('active');
    navButtonBranding.classList.remove('active');
    navButtonDigital.classList.remove('active');
    navButtonImpresso.classList.remove('active');
    navButtonEstudos.classList.add('active');
    navButtonBio.classList.remove('active');

    dot1.style = 'background-color: white';
    dot2.style = 'background-color: white';
    dot3.style = 'background-color: white';
    dot4.style = 'background-color: white';
    dot5.style = 'background-color: #5A66FF';
})

navButtonBio.addEventListener('click', () => {

    navButtonUXUI.classList.remove ('active');
    navButtonBranding.classList.remove('active');
    navButtonDigital.classList.remove('active');
    navButtonImpresso.classList.remove('active');
    navButtonEstudos.classList.remove('active');
    navButtonBio.classList.add('active');

    dot1.style = 'background-color: white';
    dot2.style = 'background-color: white';
    dot3.style = 'background-color: white';
    dot4.style = 'background-color: white';
    dot5.style = 'background-color: #5A66FF';
})

//hamburger menu 

let hamburgerToggle = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-menu')

hamburgerToggle.addEventListener('click', () => {

    hamburgerToggle.classList.toggle('hamburger-close');
    mobileMenu.classList.toggle('mobile-menu-active');

})

window.onload





