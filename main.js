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

// scroll animations

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    let position1 = 1; 
    let position2 = 1700; 
    let position3 = 2800; 
    let position4 = 3700; 
    let position5 = 4500; 

    if (currentScrollPos >= position2) {
        document.querySelector(".dot2").style = 'background: #5A66FF';
        document.querySelector(".dot1").style = 'background: white';

        navButtonUXUI.classList.remove ('uxui-active');
        navButtonBranding.classList.add('branding-active');
        navButtonDigital.classList.remove('digital-active');
        navButtonImpresso.classList.remove('impresso-active');
        navButtonEstudos.classList.remove('estudos-active');


    } else {

        if (currentScrollPos <= position2) {

        document.querySelector(".dot1").style = 'background: #5A66FF';
        document.querySelector(".dot2").style = 'background: white';

        navButtonUXUI.classList.add ('uxui-active');
        navButtonBranding.classList.remove('branding-active');
        navButtonDigital.classList.remove('digital-active');
        navButtonImpresso.classList.remove('impresso-active');
        navButtonEstudos.classList.remove('estudos-active');

      }
        
    }

    if(currentScrollPos > position3) {

        document.querySelector(".dot3").style = 'background: #5A66FF';
        document.querySelector(".dot2").style = 'background: white';
        document.querySelector(".dot1").style = 'background: white';

        navButtonUXUI.classList.remove ('uxui-active');
        navButtonBranding.classList.remove('branding-active');
        navButtonDigital.classList.add('digital-active');
        navButtonImpresso.classList.remove('impresso-active');
        navButtonEstudos.classList.remove('estudos-active');
    } else {

        document.querySelector(".dot3").style = 'background: white';


    }

    if(currentScrollPos > position4) {

        document.querySelector(".dot4").style = 'background: #5A66FF';
        document.querySelector(".dot3").style = 'background: white';
        document.querySelector(".dot2").style = 'background: white';
        document.querySelector(".dot1").style = 'background: white';

        navButtonUXUI.classList.remove ('uxui-active');
        navButtonBranding.classList.remove('branding-active');
        navButtonDigital.classList.remove('digital-active');
        navButtonImpresso.classList.add('impresso-active');
        navButtonEstudos.classList.remove('estudos-active');

    } else {

        document.querySelector(".dot4").style = 'background: white';


    }

    if(currentScrollPos >= position5) {

        document.querySelector(".dot5").style = 'background: #5A66FF';
        document.querySelector(".dot4").style = 'background: white';
        document.querySelector(".dot3").style = 'background: white';
        document.querySelector(".dot2").style = 'background: white';
        document.querySelector(".dot1").style = 'background: white';

        navButtonUXUI.classList.remove ('uxui-active');
        navButtonBranding.classList.remove('branding-active');
        navButtonDigital.classList.remove('digital-active');
        navButtonImpresso.classList.remove('impresso-active');
        navButtonEstudos.classList.add('estudos-active');
        
    } else {

        document.querySelector(".dot5").style = 'background: white';


    }


}




