const fs = require('fs');
const countries = require('countryjs');
const all = countries.all().filter(item => ['Wales'].includes(item.name)); // Ignore, same country code

// Create individual json file per country
all.forEach((country) => {
    const { name, provinces } = country;
    const data = JSON.stringify({
        name,
        states: provinces
    });
    const code = country.ISO.alpha2 || country.ISO.alpha3;
    if (code && code.length) {
        fs.writeFile(`${__dirname}/../dist/${code}.json`, data, (err) => {
                if (err) throw err;
                console.log(`Created and wrote ./dist/${country.ISO.alpha2}`);
        });
    }
});

// Create a list of just countries
const data = JSON.stringify(
    all
        .map(item => {
            return {
                name: item.name,
                code: item.ISO.alpha2 || item.ISO.alpha3
            };
        })
        .filter(item => !!item.name)
);
fs.writeFile(`${__dirname}/../dist/countries.json`, data, (err) => {
    if (err) throw err;
    console.log(`Created and wrote ./dist/countries.json`);
});
