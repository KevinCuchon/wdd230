var slider = document.getElementById('pageRating'),
    output = document.getElementById('value');

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}


var currentYearElem = document.getElementById('currentYear');

currentYearElem.textContent = new Date().getFullYear();

const hamburguerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburguerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburguerElement.classList.toggle('open');
})

const myBtn = document.querySelector('#darkBtn');
const main = document.querySelector('main');

myBtn.addEventListener('click',() =>{
    main.classList.toggle('dark');
})