import React from 'react'
import Star from './Star'
const Card = () => {
    const [contact, setContact] = React.useState({
        firstname: "Chris",
        lastname: "kleine",
        isFavourite: false
    })

   function toggleFavorite(){
    setContact(prevContact => {
        return{
            ...prevContact,
            isFavourite: !prevContact.isFavourite
        }
    })
   }
  return (
    <div>
        <Star isFilled={contact.isFavourite} handleClick={toggleFavorite}/>
        <h3>{contact.firstname} {contact.lastname}</h3>

    </div>
  )
}

export default Card