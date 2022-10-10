import React from 'react'
import './die.css'

const Die = (props) => {

  
   const styles = {
    backgroundColor: props.isHeld === true ? "#59E391": "white"
  }

  return (
    <div className="diebox" style={styles} onClick={props.holdDice}>
        <h2 className='value'>{props.value}</h2>
    </div>
  )
}

export default Die