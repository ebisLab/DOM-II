// Your code goes here
//mouseover nav links

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
y= x.reverse();

let imgRand = x[Math.floor(Math.random() * x.length)]
let colRev = y[Math.floor(Math.random() * y.length)]

//background color change
window.addEventListener('scroll', function(){
    bodyColor.style.background = imgRand;
    })

// header color change
   //let headerHover = document.getElementsByTagName('h2');
let headerHover = document.querySelectorAll('.container h2');
  
    headerHover.forEach(hohov=> {hohov.addEventListener('mouseleave', function(e){
        e.target.style.color = colRev;
        
        setTimeout(function(){
        e.target.style.color= '';
        }, 500);
        }, false);
    });

//text increase
    let textIncrease = document.querySelector('header p')
    textIncrease.addEventListener('mouseover', function(e){
        e.target.style.fontSize = 'xx-large';

        setTimeout(function(){
            e.target.style.fontSize='';
        }, 500);

    }, false);

    //Animate image

    let addHead2Head = document.querySelector('head') //select existing head tag
    let linktag = document.createElement('link') //create a new link tag
    linktag.setAttribute('rel', 'stylesheet') //set rel attribute to link tag
    linktag.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css') //set href attribute to link
    addHead2Head.appendChild(linktag) //add new link tag to existing head tag
   

    let imgHdr = document.querySelector('header img')
    document.querySelector('header img').setAttribute('class', 'animated')

    imgHdr.addEventListener('mouseenter', function(){

        imgHdr.classList.add('animated', 'shake');

        // if (imgHdr.classList.contains('shake')){
        //     return imgHdr.classList.add('animated', 'shake'); 
        // }

        // return imgHdr.classList.add('animated', 'shake');

        setTimeout(function(){
        imgHdr.classList.remove('animated', 'shake');
        }, 500);
       
        
        }, false);