import Button from "./Button";

const Numbers = ({persons}) => {

    return (
        <>
        <h2>Numbers</h2>
        <div>
          <ul className='list'>
            {persons.map((person => <li data-item key={person.id}>{person.name} {person.number} <Button id={person.id}></Button> </li>
            ))}
          </ul>
        </div>
        
        </>
    )
}

export default Numbers;