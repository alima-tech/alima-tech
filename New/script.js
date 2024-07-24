document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const query = urlParams.get('query');

    if (query) {
        document.querySelector('h2').innerText = `Search Results for "${query}"`;

        // Fake search result example
        const resultsDiv = document.querySelector('.results');
        resultsDiv.innerHTML = `
            <p>Found 2 results for "${query}":</p>
            <ul>
                <li><a href="nutrition-articles.html">Nutrition Articles</a></li>
                <li><a href="exercise-routines.html">Exercise Routines</a></li>
            </ul>
        `;
    }
});
<script src="search.js"></script>