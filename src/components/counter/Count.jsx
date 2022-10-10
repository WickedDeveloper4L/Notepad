import React from 'react'

const Count = () => {
    const [count, setCount] = React.useState(1)
    const [starWarsData, setStarWarsData] = React.useState({})

    React.useEffect(
        function (){
            fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        },
        [count]
    )

  return (
    <div>
        <h3>The Current Count is {count}</h3>
        <button onClick={()=> setCount(
            prevState => prevState + 1
        )}>Add</button>
        <h1>{JSON.stringify(starWarsData, null, 2)}</h1>
    </div>
  )
}

export default Count