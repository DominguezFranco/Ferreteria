import CartWitget from './CartWidget'
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
    <>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src={logo} alt="logo" style={{ width: "5rem", height: "5rem", padding: "1rem", margin: "1rem", borderRadius: "50%"}} />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                <h1>Ferreteria</h1>
                
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
                <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>

            <CartWitget/>
        </nav>
     </>
    )    
}

export default NavBar