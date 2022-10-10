import React from 'react'

const SignUp = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        wantNewsletter: false
    })

    function handleChange(event){
        const {name, type, checked, value} = event.target
    
        setFormData(
            prevState =>
            {
                return {
                    ...prevState, 
                    [name]: type === "checkbox" ? checked : value
                }
            }
        )
    }

    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.repeatPassword ? console.log("successfully signed Up!") : console.log("passwords do not match")
        formData.wantNewsletter === true && console.log("Thanks for signing up to our Newsletter!")

        
    }
  return (
    <form onSubmit={handleSubmit}>
        <br />
        <input 
        type="text"
        name='username'
        value={formData.username}
        placeholder="username"
        onChange={handleChange}
         />
         <br />
         <input 
         type="password"
         name='password'
         value={formData.password}
         placeholder="your password"
         onChange={handleChange}
          />
          <br />
          <input 
         type="password"
         name='repeatPassword'
         value={formData.repeatPassword}
         placeholder="Repeat password"
         onChange={handleChange}
          />
          <br />
          <br />
          <input 
          type="checkbox" 
          name="wantNewsletter" 
          id="checkbox" 
          onChange={handleChange}
          />
          <label htmlFor="checkbox">I want to join the Newsletter!</label>
         <br />
         <br />
         <button>Sign Up!</button>
    </form>
  )
}

export default SignUp