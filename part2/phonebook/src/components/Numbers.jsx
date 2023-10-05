const Numbers = ({persons}) => {

    return (
        <>
        <h2>Numbers</h2>
        <div>
          <ul className='list'>
            {persons.map((person => <li data-item key={person.name}>{person.name} {person.number}</li>))}
          </ul>
        </div>
        
        </>
    )
}

export default Numbers;