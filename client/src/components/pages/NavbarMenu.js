import { Link } from "react-router-dom";

export default function NavbarMenu() {
    function menuClose() {
        if(document.getElementsByClassName('navbar-menu')[0].classList.contains('hide-menu'))
        {
            document.getElementsByClassName('fa-solid')[0].classList.toggle("fa-bars");
            document.getElementsByClassName('fa-solid')[0].classList.toggle("fa-x");
            document.getElementsByClassName('navbar-menu')[0].classList.toggle("hide-menu");
        }
    }

    return(
        <ul className="flat-responsive-menu" onClick={menuClose}>
            <li>
                <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
            </li>

            <li>
                <Link to="/create-post" style={{textDecoration: 'none'}}>Create Post</Link>
            </li>

            <li>
                <Link to="/about-me" style={{textDecoration: 'none'}}>About Me</Link>
            </li>

            <li>
                <Link to="/contact-me" style={{textDecoration: 'none'}}>Contact</Link>
            </li>
        </ul>
    );
}