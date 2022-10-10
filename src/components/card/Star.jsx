import React from 'react'
import EMPTY from '../../images/empty-star.png'
import FILLED from '../../images/filled-star.png'

const Star = (props) => {
    const starIcon = props.isFilled ? EMPTY : FILLED
    
  return (
    <img src={starIcon} alt="" onClick={props.handleClick}/>
  )
}

export default Star