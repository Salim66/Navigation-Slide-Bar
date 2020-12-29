//Selector
let card = document.getElementById('activator');
let t1 = gsap.timeline({defaults: {ease: 'power2:inOut'}});

let toggle = false;

t1.to('.activator', {
    background: '#805ad5',
    'borderRadius': '5rem 0 0 5rem'
});
t1.to('nav', {
    'clip-path': 'ellipse(100% 100% at 50% 50%)',

}, '-=.5s');
t1.to('img',{
    opacity: 1,
    transform: 'translateX(0)',
    stagger: .05
}, '-=.5s');
t1.pause();


//Event Listener
card.addEventListener('click', () => {
    toggle = !toggle;
    if(toggle ? t1.play() : t1.reverse());
});