// Obtener el elemento del año actual
var currentYearElem = document.getElementById('currentYear');
// Asignar el año actual al elemento
currentYearElem.textContent = new Date().getFullYear();

// Obtener el elemento de la fecha de última modificación
var lastModifiedElem = document.getElementById('lastModified');
// Asignar la fecha de última modificación al elemento
lastModifiedElem.textContent = "Last modified: " + document.lastModified;


    document.addEventListener('DOMContentLoaded', function() {
        // Obtiene el número total de visitas almacenado en localStorage
        let visitCount = localStorage.getItem('visitCount') || 0;
        
        // Incrementa el contador de visitas
        visitCount++;
        
        // Almacena el nuevo número total de visitas en localStorage
        localStorage.setItem('visitCount', visitCount);
        
        // Muestra el número total de visitas en la página
        document.getElementById('visit-counter').textContent = visitCount;
    });

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