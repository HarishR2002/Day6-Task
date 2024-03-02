//Get all the countries from Asia continent /region using Filter function

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define the request method, URL, and asynchronous flag
xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

// Set the request header (optional)
xhr.setRequestHeader('Content-Type', 'application/json');

// Define the onload event handler
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);
        const asiaCountries = data.filter(country => country.region === 'Asia');
        console.log(asiaCountries);
    } else {
        console.error('Request failed with status:', xhr.status);
    }
};

// Define the onerror event handler
xhr.onerror = function () {
    console.error('Request failed');
};

// Send the request
xhr.send();

