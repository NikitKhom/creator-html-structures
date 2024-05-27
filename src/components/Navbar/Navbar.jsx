import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navigation'>
            <NavLink to='/create-button' className={({ isActive }) => `navigation__link ${isActive ?'navigation__link_active': ''}`}>Button</NavLink>  
            <NavLink to='/create-input' className={({ isActive }) => `navigation__link ${isActive ?'navigation__link_active': ''}`}>Input</NavLink>  
            <NavLink to='/create-form' className={({ isActive }) => `navigation__link ${isActive ?'navigation__link_active': ''}`}>Form</NavLink>  
        </nav>
        
    )
}

export default Navbar;