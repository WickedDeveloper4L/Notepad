import React from 'react'

const Messages = () => {
    const [messages, setMessages] = React.useState(["a", "b", {dd: "seyi"}])
  return (
    <div>
        {messages.length === 0 ? <h1>You are all caught up</h1> 
        : <h1>You have {messages.length === 1 ? "an" : messages.length} unread message{messages.length > 1 ? "s" : ""}</h1>}
    </div>
   
  )
}

export default Messages