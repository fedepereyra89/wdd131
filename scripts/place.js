
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");


const today = new Date();
const dateLastModified = new Date(document.lastModified);


currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last modification: ${dateLastModified.toLocaleString()}`;



function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 50 && windSpeed > 3) ?
        Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) :
        "N/A";
}

function displayWindChill() {
    const temperatureElement = document.querySelector('.weather li:nth-child(1)');
    const windSpeedElement = document.querySelector('.weather li:nth-child(3)');
    const windChillElement = document.querySelector('.weather li:nth-child(4)');

    const temperatureValue = parseFloat(temperatureElement.textContent.match(/\d+/)[0]);
    const windSpeedValue = parseFloat(windSpeedElement.textContent.match(/\d+/)[0]);

    const windChill = calculateWindChill(temperatureValue, windSpeedValue);
    windChillElement.textContent = `Wind Chill: ${windChill}°F`; 
}

window.addEventListener('load', displayWindChill);