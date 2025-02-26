document.getElementById('calculate-btn').addEventListener('click', function () {
  // Get input values
  const principal = parseFloat(document.getElementById('principal').value);
  const interest = parseFloat(document.getElementById('interest').value);
  const tenure = parseFloat(document.getElementById('tenure').value);

  // Validate inputs
  if (isNaN(principal) || isNaN(interest) || isNaN(tenure)) {
    alert('Please enter valid numbers for all fields.');
    return;
  }

  // Calculate EMI
  const monthlyInterest = interest / 12 / 100;
  const emi =
    (principal *
      monthlyInterest *
      Math.pow(1 + monthlyInterest, tenure)) /
    (Math.pow(1 + monthlyInterest, tenure) - 1);

  // Display result
  document.getElementById('emi-result').textContent = `₹${emi.toFixed(2)}`;
});
