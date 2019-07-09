const rockets= Array.from(document.querySelectorAll('.block'));

rockets.forEach(rocket => {
    rocket.addEventListener('click', event=> {
        console.log('a rocket has been clicked');
        const thisRocket = event.target;
        const thisIndex = rockets.indexOf(thisRocket);
        if(thisIndex > 0) {
        rockets.splice(thisIndex, 1);
        rockets.unshift(thisRocket);
        rockets.forEach(rocket => {
            rocket.style.order = rockets.indexOf(rocket);
        })
         }
    })
})