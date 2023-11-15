import { useEffect, useState } from "react"
import { getWeatherCountry } from "../services/services";

const Weather = ({countryName}) => {
    
    const [info, setInfo] = useState(null);
    const [loading, setIsLoading]= useState(true)

    useEffect(() => {

        const res = getWeatherCountry(countryName);

        res.then(data =>{

            setInfo(data)

        }).catch(error => console.log(error))
          .finally(() => setIsLoading(false))

    },[])

    

    return (

       

        <div>
            <h3>Weather in {countryName}:</h3>

            {loading ? 
             (<p>Loading...</p>) :
             (
             <>
               <p>Temperature: {`${Math.round(info.main.temp)}° C`}</p>
               <img src= {`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} alt="Weather icon" />
               <p>Wind: {info.wind.speed} ms</p>
             
             </>)
             }

          
          

             <div>
                
             </div>

             
            
        </div>
    )


}

export default Weather