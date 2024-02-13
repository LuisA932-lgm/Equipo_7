import "./Formulario.css"
import { useState } from "react"
import { Registtro } from "./Registtro"


export function Formulario({setUser}) {
        const [nombre , SetNombre] = useState("")
        const [contrasena , SetContrasena] = useState("")
        const[error, setError] = useState(false)
        const[mal, setMal] = useState(false)
       
         
        const handleSubmit = (e) => {
            e.preventDefault()

            if (nombre === "Julio" || contrasena === ""){
                setMal(true)
                return 
            } 
            setMal(false)


            if (nombre === "" || contrasena === ""){
                setError(true)
                return 
            } 
            setError(false)
            
            setUser([nombre])  
        }


    return (
        <section>
                <h1>
                SORCAM 
                    </h1>
                <form className="formulario"
                        onSubmit={handleSubmit}
                        >
                    <input type="text" placeholder="Usuario"
                    value = {nombre}
                    onChange={e => SetNombre(e.target.value)} // El onChange sirve para capturar el nombre
                    // E es un evento
                    />

                    <input type="password" placeholder="Constraseña" 
                    value={contrasena}
                    onChange={e => SetContrasena(e.target.value)} 
                    />              
                    <button> 
                        Iniciar sesion
                    </button>
                    
                </form>
                <form action="Registtro">
                <button onClick={()=>Registtro}>
                Registrar
                </button>
                </form>
                {
                   error &&   
                   <p>
                    Todos los campos deben ser llenados
                   </p>
                }
                {
                    mal &&
                    <p>
                        Error de Usuario
                    </p>
                }
              </section>
    )
}