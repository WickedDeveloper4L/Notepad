import React from 'react'
// import Nav from './components/nav/Nav'
// import Input from './components/input/Input'
// import Question from './components/question/Question'
// import Item from './components/item/Item'
// import Card from './components/card/Card'
// import Nav from './components/nav1/Nav'
// import Body from './components/body/Body'
// import Boxes from './components/squares/Boxes'
// import Messages from './components/messages/Messages'

// import Form from './components/Form'

// import SignUp from './components/signup/SignUp'
// import Count from './components/counter/Count'

// import Tracker from './components/tracker/Tracker'
import './app.css'
import Die from './components/die/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


const App = () => {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rollCount, setRollCount] = React.useState(0)

    React.useEffect(
      ()=>{
        const allHeld = dice.every(die => die.isHeld )
        const firstValue= dice[0].value
        const allSame = dice.every(die => die.value === firstValue)

        if(allHeld && allSame){
          setTenzies(true)
        }
      }, [dice]
    )
    function generateDie(){
      return{
            value: Math.ceil(Math.random() * 10),
            isHeld: false,
            id: nanoid()
          }
        
    }
    function allNewDice() {
      const newArray = []
      for (let i = 0; i < 12; i++) {
        newArray.push(
          generateDie()
        )
      }
      return newArray
    }

    const dieElements = dice.map(die => 
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>{
      holdDice(die.id)
    }}/>)

    function rollDice() {

      if(!tenzies){
         setDice(oldDice => oldDice.map(
        die =>{
         return  die.isHeld ? die : 
         generateDie()
        }
        
      ))
      setRollCount(prevCount => prevCount + 1)
      } else {
        setTenzies(false)
        setDice(allNewDice())
        setRollCount(prevCount => prevCount * 0)
      }

      
     
    }
  
    function holdDice(id){
      setDice(oldDice => oldDice.map(die =>{ 
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      }))
    }
  
  return (
    <main>
      <h3 className='title'>Tenzies</h3>
      <h2 className='instructions'>Roll and click until all 12 dice are the same, click each die to freeze at it's current value between rolls.</h2>
      {tenzies && <Confetti/>}
      <div className='die__container'>
        {dieElements}

        
      </div>
      <h3 className="rollCount">Roll Count: {rollCount}</h3>
      <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      {tenzies ? <h3 className='tenzies'>YOU WIN!</h3> : ""}
    </main>
  )
}

export default App