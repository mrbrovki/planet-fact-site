import React from 'react'
import Planets from './Planets'
import data from '../data.json'

const Header = (props) => {
 const planets = data.map(planet => <Planets 
  key={planet.id} 
  handleClick = {id => props.handleClick(id)}
  {...planet}/>)
 return (
  <header>
   <h1>THE PLANETS</h1>
   <div>{planets}</div>
  </header>
 )
}

export default Header
