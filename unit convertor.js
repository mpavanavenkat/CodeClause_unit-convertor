// Length conversion function
function convertLength() {
  const lengthInput = document.getElementById('lengthInput').value;
  const lengthUnit = document.getElementById('lengthUnit').value;
  let result;

  switch (lengthUnit) {
    case 'm':
      result = {
        cm: lengthInput * 100,
        ft: lengthInput * 3.28084,
        in: lengthInput * 39.3701
      };
      break;
    case 'cm':
      result = {
        m: lengthInput / 100,
        ft: lengthInput / 30.48,
        in: lengthInput / 2.54
      };
      break;
    case 'ft':
      result = {
        m: lengthInput / 3.28084,
        cm: lengthInput * 30.48,
        in: lengthInput * 12
      };
      break;
    case 'in':
      result = {
        m: lengthInput / 39.3701,
        cm: lengthInput * 2.54,
        ft: lengthInput / 12
      };
      break;
  }

  document.getElementById('lengthResult').innerHTML = `Results:<br>
    Centimeter (cm): ${result.cm}<br>
    Feet (ft): ${result.ft}<br>
    Inch (in): ${result.in}`;
}

// Temperature conversion function
function convertTemperature() {
  const tempInput = document.getElementById('tempInput').value;
  const tempUnit = document.getElementById('tempUnit').value;
  let result;

  switch (tempUnit) {
    case 'c':
      result = {
        f: (tempInput * 9/5) + 32,
        k: parseFloat(tempInput) + 273.15
      };
      break;
    case 'f':
      result = {
        c: (tempInput - 32) * 5/9,
        k: (tempInput - 32) * 5/9 + 273.15
      };
      break;
    case 'k':
      result = {
        c: tempInput - 273.15,
        f: (tempInput - 273.15) * 9/5 + 32
      };
      break;
  }

  document.getElementById('tempResult').innerHTML = `Results:<br>
    Celsius (°C): ${result.c}<br>
    Fahrenheit (°F): ${result.f}<br>
    Kelvin (K): ${result.k}`;
}

// Weight conversion function
function convertWeight() {
  const weightInput = document.getElementById('weightInput').value;
  const weightUnit = document.getElementById('weightUnit').value;
  let result;

  switch (weightUnit) {
    case 'kg':
      result = {
        g: weightInput * 1000,
        lb: weightInput * 2.20462,
        oz: weightInput * 35.274
      };
      break;
    case 'g':
      result = {
        kg: weightInput / 1000,
        lb: weightInput / 453.592,
        oz: weightInput / 28.3495
      };
      break;
    case 'lb':
      result = {
        kg: weightInput / 2.20462,
        g: weightInput * 453.592,
        oz: weightInput * 16
      };
      break;
    case 'oz':
      result = {
        kg: weightInput / 35.274,
        g: weightInput * 28.3495,
        lb: weightInput / 16
      };
      break;
  }

  document.getElementById('weightResult').innerHTML = `Results:<br>
    Gram (g): ${result.g}<br>
    Kilogram (kg): ${result.kg}<br>
    Pound (lb): ${result.lb}<br>
    Ounce (oz): ${result.oz}`;
}
