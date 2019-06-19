// Your code goes here
//mouseenter

let linx = document.querySelectorAll('.nav-link');

linx.forEach(anchor => {
    anchor.addEventListener('mouseenter', function(e){
e.target.style.color= 'red';
setTimeout(function(){e.target.style.color='';
}, 500)
}, false);
});


//pop up event listener

let firstPop = document.querySelector('.btn')

firstPop.addEventListener('click', function(){
    alert ('Imma let you finish, but Beyonce had one of the best albums ever. Sorry, not sorry')})


//image change

imagesChange = document.querySelector('.img-content img')

imagesChange.addEventListener('click', function(){
    if (imagesChange.src != 'img/fun.jpg'){
    imagesChange.src = 'img/fun.jpg';}
    else{
    imagesChange.src = 'img/adventure.jpg';}})
    

    //random colors 

const bodyColor = document.querySelector('body');
x = ['Blue', 'Green', 'Yellow', 'Orange', 'Pink'];

let imgRand = x[Math.floor(Math.random() * x.length)]

window.addEventListener('scroll', function(){
    bodyColor.style.color = imgRand;
    })