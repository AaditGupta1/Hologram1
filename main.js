link = prompt()

document.querySelector('.c').src = link;
document.querySelector('.d').src = link;

function play(){
    document.querySelector('.c').src = link+'&autoplay=1';
    document.querySelector('.d').src = link+'&autoplay=1';
}