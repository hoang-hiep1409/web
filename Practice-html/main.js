const selectedElement = function(element){
    return document.querySelector(element);
};
let menuToggler = selectedElement('.menu-toggle');
let body = selectedElement('body');
menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});
window.sr = ScrollReveal();
sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000,
    distance:'25rem',
    deplay:300,
});
sr.reveal('.animate-right',{
    origin:'right',
    duration: 1000,
    distance:'25rem',
    deplay:300,
});
sr.reveal('.animate-top',{
    origin:'top',
    duration: 1000,
    distance:'25rem',
    deplay:600,
});
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration: 1000,
    distance:'25rem',
    deplay:600,
});
