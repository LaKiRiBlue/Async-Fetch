// Function to load and display the data
function loadData() {
    fetch('becode.json')
      .then(response => response.json())
      .then(data => {
        const dataList = document.getElementById('dataList');
        dataList.innerHTML = ''; // Clear previous data

        // Iterate through each line in the JSON data and create a list item
        data.forEach(line => {
          const listItem = document.createElement('li');
          listItem.textContent = line;
          dataList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // Add event listener to the button
  const loadButton = document.getElementById('loadButton');
  loadButton.addEventListener('click', loadData);