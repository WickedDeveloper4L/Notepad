import React from 'react'

const Item = () => {

    const [list, setList] = React.useState(["Thing 1"])
    const thingsElement = list.map(thing => <h3 key={thing}>{thing}</h3>)

    function addItem(){
      setList(
        prevList => {
          return [...prevList, `Thing ${prevList.length + 1}`]
        }
      )
    }
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElement}
    </div>
  )
}

export default Item