import HomeButton from "../HomeButton/HomeButton";

function Footer() {
    return (
        <footer className="footer">
            <HomeButton
            path='/' 
            />

        <p className="footer__author">Хоменко Никита &#x2715; <span>ФТИ</span></p>
        <ul className="footer__links">
            <li>
                <a className="footer__link footer__link_type_mail" href="mailto:nikita.khomenko.n25@gmail.com" target="_blank"/>
            </li>
            <li>
                <a className="footer__link footer__link_type_vk" href="https://vk.com/nikitkhom"  target="_blank"/>
            </li>
            <li>
                <a className="footer__link footer__link_type_git" href="https://github.com/NikitKhom" target="_blank"/>
            </li>
        </ul>
        </footer>
    )
}

export default Footer;