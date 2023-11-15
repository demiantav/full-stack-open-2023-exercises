import axios from 'axios';

const URI = `https://studies.cs.helsinki.fi/restcountries/api/all`;
const KEY_API= import.meta.env.VITE_API_WEATHER;

async function getCountries (){

    try {

        const countries = await axios.get(URI);

        return countries.data
        
    } catch (error) {

        console.log(error)
        
    }

    

}

async function getWeatherCountry (country){

    try {

        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${KEY_API}&units=metric`);

        return weather.data
        
    } catch (error) {

        console.log(error)
        
    }

    

}

export { getCountries, getWeatherCountry }