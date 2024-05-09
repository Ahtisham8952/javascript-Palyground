const Buttons = document.querySelectorAll('button');
const body= document.querySelector('body');

Buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if (e.target==="grey") {
            body.style.backgroundColor=e.target.id
            
        }
    })

})