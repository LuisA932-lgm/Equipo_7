export function Registtro ({user,setUser}){
    const handleLogout = ()=>{
        setUser([])
    }
    return(
    <div>
      
        <h1>Registro</h1>
        <h2>{user}</h2>
        <button onClick={handleLogout}>Salir</button> 
      
       
    </div>
    )
}