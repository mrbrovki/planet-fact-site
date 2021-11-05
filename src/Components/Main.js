import React from 'react'
import data from '../data.json'
import PlanetProps from '../Components/PlanetProps'

const Main = (props) => {
 const {id} = props;
 const {name,overview,structure,geology,rotation,revolution,radius,temperature,images} = data[id];
 return (
  <main>
   <img src={images.planet}></img>
   <aside>
    <h1 className='planet-name'>{name}</h1>
    <p>{overview.content}</p>
    </aside>
   <section className='grid-container'>
   <PlanetProps heading='rotaion time' data={rotation} />
   <PlanetProps heading='revolution time' data={revolution} />
   <PlanetProps heading='radius' data={radius} />
   <PlanetProps heading='average temp.' data={temperature} />
   </section>
  </main>
 )
}

export default Main
