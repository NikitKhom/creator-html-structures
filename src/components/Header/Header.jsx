import HomeButton from '../HomeButton/HomeButton';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <header className='header' id="header">
            <HomeButton 
            path='/'
            />
            <Navbar />
        </header>
    )
}

export default Header;