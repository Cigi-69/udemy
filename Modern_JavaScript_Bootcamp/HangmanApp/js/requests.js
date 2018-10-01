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
    const [responseLocation, responseCountry] = await Promise.all([
        fetch('https://ipinfo.io/json?token=34c1bbef294ab2'),
        fetch('http://restcountries.eu/rest/v2/all')
    ]);
    if (responseLocation.status === 200 && responseCountry.status === 200) {
        const [location, countryData] = await Promise.all([
            responseLocation.json(),
            responseCountry.json()
        ]);
        return countryData.find((country) => countra.alpha2Code === location.country.toUpperCase());
    } else {
        throw new Error('Unable to fetch data.');
    }
};