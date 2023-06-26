  // Function to handle the button click event
  function handleSubmit() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name === '') {
      alert('Please enter a name.');
      return;
    }

    const apiUrl = `https://api.agify.io/?name=${encodeURIComponent(name)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayResult(name, data.age);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    nameInput.value = ''; // Clear the input field
  }

  // Function to display the result in a new div
  function displayResult(name, age) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.textContent = `Name: ${name}, Age: ${age}`;
    resultsContainer.appendChild(resultDiv);
  }

  // Add event listener to the button
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);