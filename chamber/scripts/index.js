document.getElementById('lastModified').textContent = document.lastModified;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather';


async function apiFetch() {
  try {

    const params = new URLSearchParams({
      lat: '49.75', 
      lon: '6.64', 
      units: 'imperial', 
      appid: 'f199fb8622f5eb06eabb5dc3c81e48c3' 
    });
    const apiUrl = `${url}?${params}`;


    const response = await fetch(apiUrl);


    if (response.ok) {

      const data = await response.json();
      console.log(data); // Testing only


      displayResults(data);
    } else {

      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`; 
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
  const desc = data.weather[0].description; 
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc); 
  captionDesc.textContent = desc; 
}

apiFetch();
