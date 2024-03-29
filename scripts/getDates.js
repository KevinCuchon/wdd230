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

