import axios from 'axios';

const URI = `https://studies.cs.helsinki.fi/restcountries/api/all`;

async function getCountries (){

    try {

        const countries = await axios.get(URI);

        return countries.data
        
    } catch (error) {

        console.log(error)
        
    }

    

}

export { getCountries }