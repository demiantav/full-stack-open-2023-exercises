import { useState } from 'react'
import Button from './Button';
import Title from './Title';

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let winner;

  

  

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(8).fill(0));
 

  const randomAnecdote = () => {

    

    const random = (Math.floor(Math.random() * anecdotes.length));
    setSelected(random);
   
  }

  const vote = (anecdote) => {

    const copy = [...points]
    copy[anecdote] ++
    setPoints(copy);
    
    
  }

  

  const findMax = () => {

    let max = points[0],
        maxIndex = 0;

    for(let i=0 ; i<points.length; i++){

      if(points[i] > max){

        max = points[i];
        maxIndex= i;
      }

    }

    return {
      max,
      maxIndex
    };
    
  }

  winner=findMax();



  return (

    <div>
      <Title title="Anecdotes of the day"></Title>
      <p>{anecdotes[selected]} has {points[selected]} votes</p>
      <Button handle={randomAnecdote} text="next anecdote"/> 
      <Button handle={() => vote(selected)} text="vote"/>

      <div>
      <Title title="Anecdote with most votes"></Title>
      <p>{anecdotes[winner.maxIndex]} with {winner.max} votes</p>
      </div>


    </div>

  )
}

export default App
 