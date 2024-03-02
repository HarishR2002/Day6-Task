//Get all the countries with a population of less than 2 lakhs using Filter function:

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        const countriesWithLessPopulation = data.filter(country => country.population < 200000);
        console.log(countriesWithLessPopulation);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
