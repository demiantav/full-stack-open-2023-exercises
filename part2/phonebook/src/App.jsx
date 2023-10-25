import { useState, useEffect } from 'react'
import "./style.css"
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import axios from 'axios'
import phoneService from './services/requests'


const App = () => {

  console.log("se reenderizo")

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


  const addContact = async (e) => {
    
    e.preventDefault();

    console.log(newContact);

    const result = persons.find(item => item.name.toLowerCase() === newContact.name.toLowerCase());

    if(result===undefined){
      
      const per = await phoneService.post(newContact);

      setPersons(persons.concat(per));
    
    } else {
        
        const confirm = window.confirm(`${newContact.name} is already added to phonebook, do you want to replace?`)

        if(confirm){

          const updated = await phoneService.update(result.id, newContact);

          setPersons(persons.map(person => person.id != updated.id ? person : updated)); 

        }
      }

      const blank = {
        name:"",
        number:""
      }

    setNewContact(blank)
  }

  const deleteContact = async (id,name) => {

    const confirm = window.confirm(`Do you want to delete ${name}`);

    if(confirm){

      await phoneService.supr(id);

      setPersons(persons.filter(person => person.id !== id))


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

      <Form newContact={newContact} addContact={addContact} updateInputs={updateInputs}/>

      <Numbers persons={persons} del={deleteContact}/>

    </div>
  )
}

export default App
