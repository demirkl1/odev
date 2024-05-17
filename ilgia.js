document.addEventListener("DOMContentLoaded", function() {
    // API anahtarı
    const apiKey = '0b657e9bd77a459aa4cff44cede56eb3';

    // API'den veri al
    fetch('"https://v3.football.api-sports.io/leagues', {
        headers: {
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
            'x-rapidapi-key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        // API'den gelen verileri işle
        const ilgiaList = document.getElementById('ilgia-list');
        data.api.leagues.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            ilgiaList.appendChild(listItem);
        });
    })
    .catch(error => console.error('API deneme hatası:', error));
});
