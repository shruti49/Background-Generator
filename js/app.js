let css = document.querySelector('h3');
let input1 = document.querySelector('.color1');
let input2 = document.querySelector('.color2');
let body = document.getElementById('main');

function setGradient(){
body.style.background = `linear gradient(to right, 
     ${color1.value}, ${color2.value} ) `;

     css.innerText = body.style.background + ';';
}


input1.addEventListener('input' , setGradient);
input2.addEventListener('input' , setGradient);