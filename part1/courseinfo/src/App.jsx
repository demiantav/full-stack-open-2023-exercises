import Content from "./Content.jsx"
import Header from "./Header.jsx"
import Total from "./Total.jsx"

const App = () => {

 
  const course = {

    name: 'Half Stack application development',

    parts: [

      {
        name: 'Fundamentals of React',
        exercises: 10
      },

      {
        name: 'Using props to pass data',
        exercises: 7
      },

      {
        name: 'State of a component',
        exercises: 14
      }
      
    ]
  }

  

  return (

    <div>
      
      <Header course={course.name} />
      <Content part={course.parts[0]} />
      <Content part={course.parts[1]}/>
      <Content part={course.parts[2]}/>
      <Total part1= {course.parts[0]} part2= {course.parts[1]} part3={course.parts[2]}/>

    </div>
    
  )
}

 

 

export default App