import React from 'react'
import './boxes.css'
import boxData from './boxData'
import Box from './Box'
const Boxes = (props) => {
    
    const [squares, setSquares] = React.useState(boxData)
    
    function toggle(id){
        setSquares(
            prevState => {
                return prevState.map((square) => { return square.id === id ? {...square, on: !square.on} : square})
            }
        )
    }
    const squareArray = squares.map(square => (
        <Box key={square.id}   on={square.on} toggle={() => toggle(square.id)}
            />
        ))
  return (
    <section>
        {squareArray}
    </section>
  )
}

export default Boxes  