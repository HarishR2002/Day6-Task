//Print the country that uses US dollars as currency:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usDollarCountries = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.USD;
    }).map(country => country.name.common);
    console.log(usDollarCountries);
  })
  .catch(error => console.log(error));
