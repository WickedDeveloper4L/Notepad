import React from 'react'
import './input.css'

const Input = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])
    
    React.useEffect(
            () => {
                fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMeme(data.data.memes))
            }, []
        )
        

    function generateMeme(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    console.log(meme)
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(
            prevText => ({
                ...prevText,
                [name] : value
            })
        )
    }

  return (
    <form className='input__con' >
        <div className="inputs">
            <input 
            type="text" 
            className='input__top' 
            placeholder='Top text'
            onChange={handleChange}
            name="topText"
            value={meme.topText}
            />
            <input 
            type="text" 
            className='input__bottom' 
            placeholder='Bottom text'
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
            
            />
        </div>
        <div className="btn__con">
            <button className='generate' onClick={generateMeme}>Generate Meme</button>
        </div>
        <div className='meme__container'>
            <img src={meme.randomImage} alt="meme" className="meme__display" />
            <h2 className='top__text'>{meme.topText}</h2>
            <h2 className='bottom__text'>{meme.bottomText}</h2>
        </div>
        
    </form>
  )
}

export default Input
