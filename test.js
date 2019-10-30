const getCountries = require('./dist/index').getCountries;


console.log(getCountries());
console.log(getCountries(['US']));
