import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Card() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`card ${theme} `}>
      <h2>Card used {theme} Theme</h2>
    </div>
  )
}

export default Card
