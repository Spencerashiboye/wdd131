// Footer current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Footer last modified date
document.getElementById('lastmodified').textContent = document.lastModified;

// Windchill calculation
const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
const windChillElement = document.getElementById('wind-chill');

function calculateWindChill(temp, speed) {
    // Formula for Metric (Celsius and km/h)
    // Source: Environment Canada, adjusted for metric units for typical display
    // Wind chill formula for Celsius:
    // W = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
    // Where T is air temperature in Celsius and V is wind speed in km/h
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(2);
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}°C`;
} else {
    windChillElement.textContent = 'N/A';
}