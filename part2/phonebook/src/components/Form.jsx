const Form = ({addContact, updateInputs, newContact}) => {

    return (

        <form onSubmit={addContact}>
        <div>
          <h2>Add new contact</h2>
          name: <input value={newContact.name} type ="text" name='name' onChange={updateInputs}/>
          <br />
          <br />
          number: <input value={newContact.number}  type= "number" name='number' onChange={updateInputs} />
          
        </div>

        <br />

        <div>
          <button type="submit">add</button>
        </div>
      </form>

    )


}

export default Form;