import { useEffect } from 'react';
import '../../css/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar () {
    function menuOpen() {
        // console.log('clicked!');
        document.getElementsByClassName('fa-solid')[0].classList.toggle("fa-bars");
        document.getElementsByClassName('fa-solid')[0].classList.toggle("fa-x");
        document.getElementsByClassName('navbar-menu')[0].classList.toggle("hide-menu");
    }

    return(
        <>
            <div id="navbar">
                <div className="navbar-left">
                    <Link to="/" class="navbar-brand" style={{textDecoration: 'none'}}>
                        <img src="https://images.squarespace-cdn.com/content/v1/5d315182750b140001f84916/1606867326807-Q6K3SA2U999ATF15GG4V/ScribbleLogo.png?format=1500w" alt="logo" />
                    </Link>
                </div>
                <div className="navbar-right" onClick={menuOpen}>
                    <i class="fa-solid fa-bars fa-lg"></i>
                </div>
            </div>
            <div className='navbar-menu'>
                <ul className="flat-responsive-menu">
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">CATEGORIES</a>
                    </li>

                    <li>
                        <Link to="/about-me" style={{textDecoration: 'none'}}>About Me</Link>
                    </li>

                    <li>
                        <Link to="/contact-me" style={{textDecoration: 'none'}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </>
        
    );
}