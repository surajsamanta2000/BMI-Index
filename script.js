document.getElementById('bmiForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters
  const weight = parseFloat(document.getElementById('weight').value);
  
  if (height <= 0 || weight <= 0) {
    document.getElementById('result').innerText = "Please enter valid values.";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let message = `Your BMI is ${bmi} - `;

  if (bmi < 18.5) {
    message += "Underweight";
  } else if (bmi < 25) {
    message += "Normal weight";
  } else if (bmi < 30) {
    message += "Overweight";
  } else {
    message += "Obese";
  }

  document.getElementById('result').innerText = message;
});
