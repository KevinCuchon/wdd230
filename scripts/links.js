// Definir la URL base del repositorio GitHub
const baseURL = "https://github.com/KevinCuchon/wdd230";

// Definir la URL del archivo JSON de enlaces
const linksURL = "https://kevincuchon.github.io/wdd230/data/links.json";

// Función asincrónica para obtener los datos de enlaces desde el archivo JSON
async function getLinks() {
  try {
    // Realizar la solicitud para obtener los datos de enlaces
    const response = await fetch(linksURL);
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    console.log (data);
    // Llamar a la función para mostrar los enlaces
    displayLinks(data);
  } catch (error) {
    console.error('There was a problem fetching the links:', error);
  }
}

// Función para mostrar los enlaces en el documento HTML
function displayLinks(weeks) {
  // Seleccionar el elemento HTML donde se insertarán los enlaces
  const linksList = document.getElementById('links-list');

  // Iterar sobre cada semana en los datos
  weeks.forEach(week => {
    // Crear un elemento de lista para la semana
    const weekItem = document.createElement('li');
    weekItem.textContent = week.week;

    // Crear una lista desordenada para los enlaces de la semana
    const linksUL = document.createElement('ul');

    // Iterar sobre cada enlace de la semana
    week.links.forEach(link => {
      // Crear un elemento de lista para cada enlace
      const linkItem = document.createElement('li');
      
      // Crear un enlace
      const linkAnchor = document.createElement('a');
      linkAnchor.href = baseURL + link.url;
      linkAnchor.textContent = link.title;

      // Agregar el enlace al elemento de lista
      linkItem.appendChild(linkAnchor);

      // Agregar el elemento de lista de enlace a la lista de enlaces de la semana
      linksUL.appendChild(linkItem);
    });

    // Agregar la lista de enlaces de la semana al elemento de lista de la semana
    weekItem.appendChild(linksUL);

    // Agregar el elemento de lista de la semana al listado principal de enlaces
    linksList.appendChild(weekItem);
  });
}

// Llamar a la función para obtener los enlaces cuando la página cargue
getLinks();
