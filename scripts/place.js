// 1. Mostrar el año actual en el footer
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// 2. Mostrar la fecha de última modificación del documento
const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

// 3. Cálculo de Sensación Térmica (Windchill)
// Puedes cambiar estos valores estáticos para probar el cálculo
const temperature = 8;  // Temperatura en grados Celsius (ejemplo)
const windSpeed = 20;   // Velocidad del viento en km/h (ejemplo)

/**
 * Calcula la sensación térmica (windchill) basada en la temperatura y la velocidad del viento.
 * La fórmula es válida solo bajo ciertas condiciones.
 * @param {number} temp Temperatura en grados Celsius.
 * @param {number} speed Velocidad del viento en kilómetros por hora.
 * @returns {string} El valor de la sensación térmica redondeado a un decimal, o "N/A" si las condiciones no se cumplen.
 */
function calculateWindChill(temp, speed) {
    // La fórmula solo es aplicable si la temperatura es <= 10°C y la velocidad del viento > 4.8 km/h
    if (temp <= 10 && speed > 4.8) {
        // Fórmula de Windchill para unidades métricas (Fuente: Environment Canada/NWS, adaptada)
        // C = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
        // Donde T = temperatura en °C, V = velocidad del viento en km/h
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
        return windChill.toFixed(1); // Redondea a un decimal
    } else {
        return "N/A"; // No aplica si las condiciones no se cumplen
    }
}

// Obtener el elemento donde se mostrará el windchill
const windchillSpan = document.getElementById('windchill');
if (windchillSpan) {
    const calculatedWindChill = calculateWindChill(temperature, windSpeed);
    // Muestra el resultado. Si es "N/A", lo muestra tal cual; si no, añade "°C".
    windchillSpan.textContent = calculatedWindChill !== "N/A" ? `${calculatedWindChill}°C` : "N/A";
}