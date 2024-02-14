import { Formulario } from './Components/Formulario'
import { Inicio} from './Components/Inicio'
import { useEffect, useState } from 'react'
import { Registtro } from './Components/Registtro';
import './App.css'
import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';

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
  <Router> 
      
  <div className ="App"> 

    <Switch>
      <Route path="/">
        <Registtro />
      </Route>
        </Switch>
   
     { 
      !user.length > 0 ? <Formulario  setUser = {setUser}/> 
      : <Inicio user={user} setUser={setUser}/>    
    }  
   
      
 
    </div>
    </Router>
)

  }

export default App
