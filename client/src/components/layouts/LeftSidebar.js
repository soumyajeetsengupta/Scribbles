import { Link } from 'react-router-dom';

function LeftSidebar() {
    return (
        <div id="left-sidebar">
          <div className="logo-wrapper l-wrapper">
            <center>
              <Link to="/" class="navbar-brand" style={{textDecoration: 'none'}}>
                <img src="https://images.squarespace-cdn.com/content/v1/5d315182750b140001f84916/1606867326807-Q6K3SA2U999ATF15GG4V/ScribbleLogo.png?format=1500w" alt="logo" />
              </Link>
            </center>
          </div>
          {/* END OF LOGO-WRAPPER */}
          <div className="menu-wrapper l-wrapper">
            <nav class="flat-menu">
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
            </nav>
          </div>
          {/* END OF MAIN-WRAPPER */}
          <div className="mini-widget l-wrapper">
            <form id="search-form">
              <input type="search" name="search-blog" id="search-blog" placeholder="Search on this blog..."/>
            </form>
          </div>
        </div>
    );
}

export default LeftSidebar;