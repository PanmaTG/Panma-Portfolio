let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((item) => {
    item.addEventListener('click', function(){
        document.querySelector('nav ul li a.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('main > section.active').classList.remove('active');
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})




document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('open')
})

var options = {
    strings: ['Web Developer', 'WinForms Developer', 'UE Modder'],
    loop: true,
    typeSpeed: 72,
    backSpeed: 10
};

new Typed('.typefield h2', options);


const shuffleInstance = new Shuffle(document.querySelector('#projects .project-items'), {
    itemSelector: '.item',
});

const filterButtons = document.querySelectorAll('#projects .filters button')

filterButtons.forEach((item) => {
    item.addEventListener('click', workFilter)
})

function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#projects .filters button.active')

    activeButton.classList.remove('active');
    clickedButton.classList.add("active");


    shuffleInstance.filter(clickedButtonGroup)
}

const projectModal = new bootstrap.Modal(document.getElementById('projectModal'))
const projectElements = document.querySelectorAll("#projects .project-items .wrap");

projectElements.forEach((item) => {
    item.addEventListener('click', function() {
        // console.log(item.getAttribute('data-image'))
        document.querySelector('#projectModal .modal-body img').setAttribute('src',  item.getAttribute('data-image'))
        document.querySelector('#projectModal .modal-body .title').innerText = item.getAttribute('data-title')
        document.querySelector('#projectModal .modal-body .description').innerText = item.getAttribute('data-description')
        document.querySelector('#projectModal .modal-body .tech-used .value').innerText = item.getAttribute('data-tech-used')

        document.querySelector('#projectModal .modal-body .project-link .sub-link1 a').setAttribute('href', item.getAttribute('data-project-sublink1'))
        document.querySelector('#projectModal .modal-body .project-link .sub-link2 a').setAttribute('href', item.getAttribute('data-project-sublink2'))

        projectModal.show();
    })
})


// BLUR
const projectModalElement = document.getElementById('projectModal')
projectModalElement.addEventListener('show.bs.modal', event => {
    document.getElementById('projects').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

projectModalElement.addEventListener('hide.bs.modal', event => {
    document.getElementById('projects').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})