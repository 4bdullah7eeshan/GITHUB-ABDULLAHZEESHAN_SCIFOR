const dataDiv = document.getElementById('data');

// Helper function to display data in a colorful layout
function displayData(data) {
  dataDiv.innerHTML = `
    <h2>${data.title}</h2>
    <div>
      <p><strong>Price:</strong> $${data.price}</p>
      <p><strong>Description:</strong> ${data.description}</p>
    </div>
    <div>
      <img src="${data.thumbnail}" alt="${data.title}">
    </div>
  `;
}

// Load data using AJAX
document.getElementById('ajax').addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://dummyjson.com/products/1', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      displayData(data);
    } else {
      dataDiv.textContent = 'Error loading data via AJAX';
    }
  };
  xhr.send();
});

// Load data using Fetch API
document.getElementById('fetch').addEventListener('click', function () {
  fetch('https://dummyjson.com/products/2')
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      dataDiv.textContent = 'Error loading data via Fetch API';
    });
});
