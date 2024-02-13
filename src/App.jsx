import { Formulario } from './Components/Formulario'
import { Inicio} from './Components/Inicio'
import { useEffect, useState } from 'react'
import { Registtro } from './Components/Registtro';
import './App.css'


function App() {

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/login')
    .then (res => res.json())
    .then (data => console.log(data))
    .catch(err => console.log(err));
  }, [])
  const [user, setUser] = useState([])
  
  return (
   
      
  <div className ="App"> 
   
     { 
      !user.length > 0 ? <Formulario  setUser = {setUser}/> 
      : <Inicio user={user} setUser={setUser}/>    
    }  
    
      
 
    </div>
)

  }

export default App
