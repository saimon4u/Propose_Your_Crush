const no = document.querySelector('.no');

no.addEventListener('mouseover', ()=>{
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const b_width = no.offsetWidth;
    const b_height = no.offsetHeight;
    const max_height = window.innerHeight - b_height;
    const max_width = window.innerWidth - b_width;
    const adjustX = x < max_width ? x : max_width;
    const adjustY = y < max_height ? y : max_height;
    no.style.position = 'absolute';
    no.style.left = `${adjustX}px`;
    no.style.top = `${adjustY}px`;
});

const yes = document.querySelector('.yes');
const image = document.getElementById('image');
const nav = document.querySelector('.nav');
yes.addEventListener('click', ()=>{
    image.src = 'propose.gif';
    const button = document.getElementsByClassName('button-container')[0];
    button.classList.add('v-class');
    nav.innerHTML = 'You choose the perfect person.I love you🥰'
});
