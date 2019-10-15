# Country State List

This project generates a more browser friendly npm package based on countryjs.

### Installing

```
npm i @jbreneman/country-state-list
```

## Usage

```
import { getCountries } from '@jbreneman/country-state-list';
```

To get a list of all countries with states, you can run `getCountries()` without any arguments:

```
const countries = getCountries();
/* Returns an array that looks like:
[{
    "name": "United States",
    "code": "US",
    "states": ["Alabama", ...]
}, ...]
*/
```

You can optionally pass in an array of country codes (2 letter ISO code) and get a filtered list that should knock your bundle size down:

```
const countries = getCountries(['us', 'ca', 'mx']);
/* Returns an array that only includes these 3 countries
*/
```

To get an individual country, you can pull in the `getCountry()` method and use that instead. It accepts a single `countryCode` parameter and outputs a single country object:

```
const US = getCountry('us');
/* Returns:
{
    "name": "United States",
    "code": "US",
    "states": ["Alabama", ...]
}
*/
```

## Build

To rebuild the index, run `npm run compile`. This will regenerate the entire dist folder.

## Contributing

Submit a PR.
