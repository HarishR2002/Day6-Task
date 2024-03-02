//Print the country that uses US dollars as currency:

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        const usDollarCountries = data.filter(country => {
            const currencies = country.currencies;
            return currencies && currencies.USD;
        }).map(country => country.name.common);
        console.log(usDollarCountries);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();
