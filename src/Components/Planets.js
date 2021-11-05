import React from 'react'

const Planets = (props) => {
 const {id, name} = props;
 return (
  <div onClick={() => props.handleClick(id)} className='planets'>{name}</div>
 )
}
export default Planets
 