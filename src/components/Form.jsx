import React from 'react'

const Form = () => {
   const [inputs, setInputs] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        comments: "",
        isFriendly: false,
        employment: "",
        favColor: ""
    }
   )

    
   function handleChange(event){

    const {name, value, type, checked} = event.target
    setInputs(
        prevState => {
            return{
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        }
    )
   }
   
   function handleSubmit(event){
    event.preventDefault()

    console.log(inputs)
   }

  return (
    <form  onSubmit={handleSubmit}>
        <label>
            First Name:
            <input 
            type="text" 
            placeholder='firstname'
            onChange={handleChange}
            name="firstName"
            value={inputs.firstName}
            
            />
        </label>
        <br />
        <label>
            Last Name:
            <input 
            type="text" 
            placeholder='lastname'
            onChange={handleChange}
            name="lastName"
            value={inputs.lastName}
            />
        </label>
        <br />
        <label>
            Email:
            <input 
            type="email" 
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={inputs.email}
            />
        </label>
        <br />
        <textarea 
        value={inputs.comments}
        placeholder="comments here..."
        onChange={handleChange}
        name="comments"
        />
        <br />
        <input 
        type="checkbox" 
        name='isFriendly'
        id='isFriendly'
        onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you Friendly?</label>
        <br />

        <label>current Employment Status</label>
        <br />
        <input type="radio" 
                id='un-employed'
                value="Unemployed"
                name='employment'
                onChange={handleChange}
                checked={inputs.employment === "Unemployed"}
                /> 
        <label htmlFor="un-employed">Unemployed</label>
        <br />
        <input type="radio" 
                id='full-time'
                value="full-time"
                name='employment'
                onChange={handleChange}
                checked={inputs.employment === "full-time"}
                /> 
        <label htmlFor="full-time">Full-time</label>
        <br />
        <input type="radio" 
                id='part-time'
                value="part-time"
                name='employment'
                onChange={handleChange}
                checked={inputs.employment === "part-time"}
                /> 
        <label htmlFor="part-time">Part-time</label>
        <br />
        <label htmlFor="favColor">What is Your Favourite Color?</label>
        <br />
        <select 
        name="favColor" 
        id="favColor" 
        value={inputs.favColor} 
        onChange={handleChange}>

            <option value="">--choose--</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
            <option value="orange">Orange</option>
        </select>
        <br />
        <br />
        <br />
        <button>Submit</button>
    </form>
  )
}

export default Form