const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch get puzzle');
    }
}

const getCurrentCountry = async () => {
    const responseLocation = await fetch('https://ipinfo.io/json?token=34c1bbef294ab2');
    const responseCountry = await fetch('http://restcountries.eu/rest/v2/all');
    if (responseLocation.status === 200 && responseCountry.status === 200) {
        const location = await responseLocation.json();
        const countryData = await responseCountry.json();
        return countryData.find((country) => country.alpha2Code === location.country.toUpperCase());
    } else {
        throw new Error('Unable to fetch data.');
    }
};

// const getCountryDetail = async (countryCode) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all');
//     if (response.status === 200) {
//         const data = await response.json();
//         return data.find((country) => country.alpha2Code === countryCode.toUpperCase());
//     } else {
//         throw new Error('Unable to fetch data.');
//     }
// };

// const getLocation = async () => {
//     const response = await fetch('https://ipinfo.io/json?token=34c1bbef294ab2');
//     if (response.status === 200) {
//         return await response.json();
//     } else {
//         throw new Error('Unable to fetch data.');
//     }
// };