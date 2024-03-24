// Obtener el elemento del año actual
var currentYearElem = document.getElementById('currentYear');
// Asignar el año actual al elemento
currentYearElem.textContent = new Date().getFullYear();

// Obtener el elemento de la fecha de última modificación
var lastModifiedElem = document.getElementById('lastModified');
// Asignar la fecha de última modificación al elemento
lastModifiedElem.textContent = "Last modified: " + document.lastModified;
