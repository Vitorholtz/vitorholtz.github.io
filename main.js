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

let navButtonUXUI = document.querySelector('.uxui')

navButtonUXUI.addEventListener ('click', () => {

    navButtonUXUI.classList.toggle ('uxui-active');
})

// sliders

var counter = 1

setInterval(() => {

    document.querySelector('#radio' + counter).checked = true;
    counter++
    if (counter > 4) {
        counter = 1
    }
    
}, 4000);
