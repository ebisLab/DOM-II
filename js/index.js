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