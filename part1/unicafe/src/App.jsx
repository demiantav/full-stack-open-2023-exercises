import { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {

  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const goodButtonClick = () =>{

    const previousState = good + 1;
    setGood(previousState);
    setTotal(previousState+neutral+bad);
  }

  const neutralButtonClick = () =>{

    const previousState = neutral + 1;
    setNeutral(previousState);
    setTotal(previousState+good+bad);
  }

  const badButtonClick = () =>{

    const previousState = bad + 1;
    setBad(previousState);
    setTotal(previousState+good+neutral);
  }

  

  return (

    <div>
      <Title title={`give feedback`} />

      <Button handleClick={goodButtonClick} text={`good`} />
      <Button handleClick={neutralButtonClick} text={`neutral`} />
      <Button handleClick={badButtonClick} text={`bad`} />

      <Title title={`statistics`} />

      <Statistics total={total} good={good} neutral={neutral} bad={bad}/>
      


    </div>
  )
}

export default App


