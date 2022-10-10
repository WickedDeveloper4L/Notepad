import React from 'react'
import MEME from '../../images/meme.png'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav__con'>
        <img src={MEME} alt="meme Head" className='nav__logo'/>
        <h3 className="nav__header">
            Meme Generator
        </h3>
    </nav>
  )
}

export default Nav