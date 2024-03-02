//Print the total population of countries using reduce function:

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log(`Total Population: ${totalPopulation}`);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
