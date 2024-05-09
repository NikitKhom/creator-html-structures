import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='header__logo' />
            <Navbar />
        </header>
    )
}

export default Header;