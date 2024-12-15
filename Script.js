let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
 menu.classList.toggle('bx-x');
 navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 250,
    reset: true
})

sr.reveal('.player-text',{delay:200, origin:'top'});
sr.reveal('.player-image',{delay:400, origin:'top'});
sr.reveal('.Social-media-icons',{delay:460, origin:'left'});
sr.reveal('.scroll-down',{delay:460, origin:'right'});

