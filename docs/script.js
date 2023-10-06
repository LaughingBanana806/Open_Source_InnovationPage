const searchInput = document.getElementById('search');
const suggestionList = document.getElementById('suggestion-list');
const projectCards = document.querySelectorAll('.project-card');
const searchButton = document.getElementById('search-button');
const noResult = document.getElementById('no-result'); // Added line

// Sample list of project suggestions (replace with your actual data)
const projectSuggestions = [
    "AI/ML Project",
    "WEB DEVELOPMENT Project",
    "APP DEVELOPMENT Project",
    "BLOCKCHAIN Project",
    "UI/UX Project",
    "API's Project",
    "Research Project",

    // Add more project suggestions here
];

// Function to update the suggestion dropdown
function updateSuggestions(inputValue) {
    suggestionList.innerHTML = '';
    const matchingSuggestions = projectSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    matchingSuggestions.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.textContent = suggestion;
        listItem.addEventListener('click', () => {
            searchInput.value = suggestion;
            suggestionList.innerHTML = '';
            filterProjects(suggestion);
        });
        suggestionList.appendChild(listItem);
    });
}

// Function to filter projects based on search input
function filterProjects(searchTerm) {
    let noResultsFound = true; // Added line
    projectCards.forEach(card => {
        const projectTitle = card.querySelector('h2').textContent.toLowerCase();
        const projectDescription = card.querySelector('p').textContent.toLowerCase();
        if (projectTitle.includes(searchTerm.toLowerCase()) || projectDescription.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
            noResultsFound = false; // Added line
        } else {
            card.style.display = 'none';
        }
    });
    noResult.style.display = noResultsFound ? 'block' : 'none'; // Added line
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    filterProjects(inputValue);
});

searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value;
    if (inputValue.length >= 1) {
        updateSuggestions(inputValue);
    } else {
        suggestionList.innerHTML = '';
    }
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        suggestionList.innerHTML = '';
    }, 200);
});
const stars=document.querySelectorAll('.star');
const current_rating=document.querySelector('.current-rating');

stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{

    let current_star=index+1;
    current_rating.innerText=`${current_star} of 5`;

    stars.forEach((star,i)=>{
        if(current_star>=i+1){
          star.innerHTML='&#9733;';
        }else{
          star.innerHTML='&#9734;';
        }
    });

  });
});
