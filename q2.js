//Get all the countries with a population of less than 2 lakhs using Filter function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLessPopulation = data.filter(country => country.population < 200000).map(country => country.name.common);
    console.log(countriesWithLessPopulation);
  })
  .catch(error => console.log(error));
