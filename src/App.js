import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [id, setId] = useState(0);
  return (
   <>
   <Header handleClick={id => setId(id)}/>
   <Main id={id}/>
   </>
   );
}

export default App;
