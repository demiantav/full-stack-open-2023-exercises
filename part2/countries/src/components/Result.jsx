import { useEffect, useState } from "react"
import Weather from "./Weather";

const Result = ({filtered, setFilter}) => {

 

    console.log(filtered)

    if(filtered.length === 0) {

        return

    } else {

        if(filtered.length > 10){
           
            return (
                <><p>Too many matches, specify another filter”</p></>
            )
            
        } else {

            if(filtered.length >1 && filtered.length <10) {
              
                return (
                    <>
                    <div>
                     <ul>
                        {filtered.map((element => <li key={element.name.common}>{element.name.common} <button onClick={()=> setFilter(element.name.common)}>Show</button></li>))}
                      </ul>
                    </div>
                    </>
                )
            } else {

                
                

                const lang = Object.values(filtered[0].languages)

               

                

                return (
                    <>
                    <div>
                        <h2>{filtered[0].name.common}</h2>

                        <div>
                            <p>Capital: {filtered[0].capital}</p>
                            <p>Area: {filtered[0].area}</p>
                        </div>

                        <div>
                            <h3>Languages:</h3>

                            <ul>
                                {lang.map((element => <li key={element}>{element}</li>))}
                            </ul>

                            <div>
                                <img style={{ maxHeight: 100 }} src={filtered[0].flags.svg} alt="flag" />
                            </div>

                            <Weather countryName={filtered[0].name.common}/>

                        </div>


                    </div>
                    </>
                )
            }
        }
    }


}

export default Result