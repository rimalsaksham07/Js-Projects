const forms = document.querySelectorAll("form");
console.log(forms);

forms.forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input elements
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const results = document.getElementById('results');

    // Get values from inputs and convert to numbers
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validate inputs
    if (isNaN(height) || height <= 0) {
      results.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
      results.innerHTML = "Please provide a valid weight.";
    } else {
      // Calculate BMI
      const bmi = ((weight / (height * height)) * 10000).toFixed(2);
      results.innerHTML = `BMI: ${bmi}`;
    }
  });
});