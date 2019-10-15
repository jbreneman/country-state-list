/**
 * Gets a list of states by country code
 * 
 * @param {string} countryCode - The 2 or 3 letter country code
 */
const getCountry = (countryCode) => {
    const required = require(`./dist/${countryCode.toUpperCase()}.json`);
    return JSON.parse(required);
}

/**
 * Gets a list of countries with state data
 * 
 * @param {string[]} filter - An array of country codes (2 letter preferred, falls back to 3 letter)
 */
const getCountries = (filter) => {
    const list = filter ? filter : JSON.parse(require('./dist/countries.json')).map(item => item.code);
    return list.map(item => {
        return {
            ...getCountry(item),
            code: item.toUpperCase()
        };
    });
}

module.exports = {
    getCountry,
    getCountries
}