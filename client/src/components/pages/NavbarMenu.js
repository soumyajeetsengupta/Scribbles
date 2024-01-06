import { Link } from "react-router-dom";

export default function NavbarMenu() {
    return(
        <ul className="flat-responsive-menu">
            <li>
                <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
            </li>

            <li>
                <Link to="/create-post" style={{textDecoration: 'none'}}>CATEGORIES</Link>
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