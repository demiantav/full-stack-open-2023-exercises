import { useState, useEffect } from 'react'
import "./style.css"
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import axios from 'axios'
import phoneService from './services/requests'


const App = () => {

  const [persons, setPersons] = useState([])

  const [newContact, setNewContact] = useState({
    
    name:``,
    number:``

  })

useEffect(() => {

    const getAll = async () => {

      try {
  
        const data = await phoneService.get();
  
        setPersons(data);
        
      } catch (error) {
  
        alert(error);
        
      }
    }

    getAll();


  },[]);

  
  
  
  
  const updateInputs = (e) => {

    const person = {

      ...newContact,
      [e.target.name]: e.target.value,

    }

    setNewContact(person)

    console.log(e)
    console.log(person)

    
  }


  const addContact = (e) => {
    
    e.preventDefault();

    console.log(newContact);

    const result = persons.find(item => item.name.toLowerCase() === newContact.name.toLowerCase());

    if(result===undefined){

      const newPerson= { name: newContact.name, number: newContact.number }

      setPersons(persons.concat(newPerson));
      setNewContact({
        name:``,
        number:``
      });

      
    } else {

        alert(`${newContact.name} is already added to phonebook`)
        return

    }
  }

  const filterContacts = (e) => {

    const lista= document.querySelectorAll("[data-item]");

    console.log(lista)

    lista.forEach(el => {

      (el.textContent.toLowerCase().includes(e.target.value.toLowerCase())) ?
          el.classList.remove("contact") :
          el.classList.add("contact");

    })



  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterContacts={filterContacts} />

      <Form addContact={addContact} updateInputs={updateInputs}/>

      <Numbers persons={persons} />

    </div>
  )
}

export default App
