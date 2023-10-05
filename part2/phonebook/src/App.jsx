import { useState } from 'react'
import "./style.css"
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'

const App = ({contacts}) => {



  const [persons, setPersons] = useState(contacts) 

  const [newContact, setNewContact] = useState({
    
    name:``,
    number:``

  })








  const updateInputs = (e) => {

    setNewContact({

      ...newContact,
      [e.target.name]: e.target.value,
          
    
    })

    
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
