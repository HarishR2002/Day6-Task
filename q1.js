//Get all the countries from Asia continent /region using Filter function

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia').map(country => country.name.common);
    console.log(asiaCountries);
  })
  .catch(error => console.log(error));
