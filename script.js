let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '35px',
    duration: '2400',
    reset: true,
})

//mouse move home img

document.addEventListener('mousemove', move);

function move(e) {
    document.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;

        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
}

sr.reveal('.logo',{delay:410, origin: 'left'});
sr.reveal('.navbar .nav_item',{delay:310, origin: 'top'});
// sr.reveal('.top-btnn',{delay:410, origin: 'right'});

sr.reveal('.title',{delay:310, origin: 'left'});
sr.reveal('.description',{delay:410, origin: 'left'});
sr.reveal('.btn',{delay:310, origin: 'bottom'});

sr.reveal('.image',{delay:510, origin: 'right'});
// sr.reveal('.main-btnn',{delay:510, origin: 'bottom'});




