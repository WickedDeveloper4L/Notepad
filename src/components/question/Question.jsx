import React from 'react'

const Question = () => {
    
    const [isLearning, setIsLearning] = React.useState(true)

    function Switch(){
        setIsLearning(prevState => !prevState)
    }
    
    


  return (
    <div >
        <p>Is Learning State important?</p>

        <h3 onClick={Switch}>{isLearning ? "Yes" : "No"}</h3>
    


    </div>
  )
}

export default Question