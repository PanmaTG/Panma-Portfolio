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
    strings: ['Fullstack Web Developer', 'WinForms Developer', 'UE Modder'],
    loop: true,
    typeSpeed: 72,
    backSpeed: 10
};

new Typed('.typefield h2', options);