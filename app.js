// app.js

document.addEventListener('DOMContentLoaded', function () {
  // Initial request to get animal data
  fetchAnimalData();

  // Event delegation for button clicks
  mainContent.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
      const animalId = target.dataset.animalId;

      if (target.classList.contains('details-btn')) {
        showAnimalDetails(animalId);
      } else if (target.classList.contains('favorite-btn')) {
        addToFavorites(animalId);
      }
    }
  });
});

async function fetchAnimalData() {
  try {
    const response = await fetch('db.json'); // Change this if you have a different path
    const data = await response.json();
    renderAnimalList(data.animals);
  } catch (error) {
    console.error('Error fetching animal data:', error);
  }
}

function renderAnimalList(animals) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';

  animals.forEach(animal => {
    const animalCard = document.createElement('div');
    animalCard.className = 'animal-card';
    animalCard.innerHTML = `
      <h2>${animal.name}</h2>
      <p>${animal.description}</p>
      <button class="details-btn" data-animal-id="${animal.id}">Details</button>
      <button class="favorite-btn" data-animal-id="${animal.id}">Favorite</button>
    `;
    mainContent.appendChild(animalCard);
  });
}

function showAnimalDetails(animalId) {
  // Placeholder: Log details to the console for demonstration
  console.log(`Showing details for animal with ID: ${animalId}`);
}

function addToFavorites(animalId) {
  // Placeholder: Log to the console for demonstration
  console.log(`Adding animal with ID ${animalId} to favorites`);
}
