import CartWitget from './CartWidget'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <h1>Ferreteria</h1>
            
            <ul className='menu-list'>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/categoria/electricidad">Electrico</Link></li>
                <li><Link to="/categoria/manuales">Manuales</Link></li>
                <li><Link to="/categoria/medicion">Medicion</Link></li>
            </ul>
            

            <CartWitget/>
        </nav>
    )    
}

export default NavBar