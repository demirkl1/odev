document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'apikey 6CU8DJ2U8pKlzAEaxSWWW2:6tOUP3h8UXW9xRrTeHTAuW';
    const apiUrl = 'https://api.collectapi.com/football/leaguesList';

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `apikey ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const leagues = data.result;
        const leagueList = document.getElementById('league-list');

        leagues.forEach(league => {
            const listItem = document.createElement('li');
            listItem.className = 'league-item';
            listItem.textContent = `${league.league} (${league.country})`;
            leagueList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('API deneme hatası:', error);
    });
});
