// Display Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Display Last Modified Date
document.getElementById("lastModified").textContent = document.lastModified;

// STATIC VALUES (must match the HTML)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Element to update
const windChillSpan = document.getElementById("windchill");

// Wind Chill Formula for Celsius (°C)
function calculateWindChill(t, w) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(w, 0.16) +
    0.3965 * t * Math.pow(w, 0.16)
  ).toFixed(1);
}

// Apply conditions
if (temp <= 10 && wind > 4.8) {
  windChillSpan.textContent = calculateWindChill(temp, wind) + " °C";
} else {
  windChillSpan.textContent = "N/A";
}
