export function Inicio({user, setUser}) {

    const handleLogout = ()=>{
        setUser([])
    }

    return(
    <div>
        <h1>Bienvenido</h1>
        <h2>{user}</h2>
        <h3>Blog-SORCAM</h3>
        <button onClick={handleLogout}>Salir</button> 

       
    </div>
    )
}