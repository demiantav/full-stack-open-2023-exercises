import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({name,parts}) => {

    console.log(name)
    console.log(parts)

    const sum = parts.reduce((acc, object) => {
                  return acc + object.exercises;
               }, 0);

    return (

        <>
          <Header name={name} />
          <Content parts={parts}/>
          <Total total={sum} />
        
        </>
    )


}

export default Course