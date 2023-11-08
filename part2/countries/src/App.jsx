import { useEffect, useState } from 'react'
import axios from 'axios'
import { getCountries } from './services/services.js'
import Filter from './components/Filter.jsx'
import Result from './components/Result.jsx'



 function App() {

  console.log("reenderizado")

  const [nameCountries, setNameCountries] = useState([]),
        [filter,setFilter] = useState(""),
        [filtered, setFiltered] = useState([]);

const result = async () => {

  try {

    const res = await getCountries();
    setNameCountries(res)
    
    

   
    
  } catch (error) {

    console.log(error)
    
  }

  
}

const handleChange = (e) => {
  
  const value = e.target.value;
  setFilter(value);

  if (value === "") {
    setFiltered([]);
  } else {
    const res = nameCountries.filter(element => element.name.common.toLowerCase().includes(value.toLowerCase()))
    setFiltered(res);
  }

}




useEffect(() => {
  result(); 
}, []);


return (
    <>
      <Filter onChange={handleChange}/>
      <Result filtered={filtered} />
      
    </>
  )


}

export default App
