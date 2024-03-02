//Print the following details name, capital, flag, using forEach function

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        data.forEach(country => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
        });
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

xhr.onerror = function () {
    console.error('Request failed');
};

xhr.send();

