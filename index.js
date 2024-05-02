const textBox = document.getElementById("textBox");
const toFarthenheit = document.getElementById("toFarthenheit");
const toCelsium = document.getElementById("toCelsium");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFarthenheit.checked) {
   // result.textContent = "You selected to Fahrenheit";
   temp = Number(textBox.value);
   temp = temp * 9 / 5 + 32;
   result.textContent = temp.toFixed(1) + "°F"

  } else if (toCelsium.checked) {
    //result.textContent = "You selected to Celsium";
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°С"
  } else {
    result.textContent = "Select a unit";
  }
}
