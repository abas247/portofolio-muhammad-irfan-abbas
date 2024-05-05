/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // perbaikan pengejaan
    navbar.classList.toggle('active'); // perbaikan pengejaan
};



/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // perbaikan pengejaan
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // perbaikan pengejaan
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // perbaikan pengejaan
        }
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100); // perbaikan pengejaan

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x'); // perbaikan pengejaan
    navbar.classList.remove('active'); // perbaikan pengejaan

};



/*==================== scroll reveal ====================*/
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .about-img, .contactform',  { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1',  { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });



// circle skill//

const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
    var dots = parseInt(elem.getAttribute("data-dots"));
    var marked = parseInt(elem.getAttribute("data-percent"));
    var rotate = 360 / dots;

    // Menambahkan titik-titik pada lingkaran
    var points = "";
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate * i}deg"></div>`;
    }
    elem.innerHTML = points;

    // Mengatur rotasi lingkaran sesuai dengan persentase
    var rotationDegrees = 360 * (marked / 100);
    elem.style.setProperty('--rot', rotationDegrees + 'deg');

    // Mengatur titik-titik yang akan ditandai sesuai dengan persentase
    const pointsMarked = elem.querySelectorAll('.points');
    var percent = Math.floor(dots * marked / 100); // Menghitung jumlah titik yang akan diberi kelas 'marked'
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }

    
});
