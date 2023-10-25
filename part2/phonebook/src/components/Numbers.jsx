import Button from "./Button";

const Numbers = ({persons,del}) => {

    return (
        <>
        <h2>Numbers</h2>
        <div>
          <ul className='list'>
            {persons.map((person => <li data-item key={person.name}>{person.name} {person.number} <Button del={del} id={person.id} name={person.name}></Button> </li>
            ))}
          </ul>
        </div>
        
        </>
    )
}

export default Numbers;