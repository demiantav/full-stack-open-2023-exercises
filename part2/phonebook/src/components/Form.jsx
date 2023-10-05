const Form = ({addContact, updateInputs}) => {

    return (

        <form onSubmit={addContact}>
        <div>
          <h2>Add new contact</h2>
          name: <input type ="text" name='name' onChange={updateInputs}/>
          <br />
          number: <input type= "number" name='number' onChange={updateInputs} />
          
        </div>

        <br />

        <div>
          <button type="submit">add</button>
        </div>
      </form>

    )


}

export default Form;