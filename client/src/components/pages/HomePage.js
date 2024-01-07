// import Post from './Post';
import '../../css/Main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllPosts from './AllPosts';

function HomePage() {
    return (
        <div id="main">
          <article className="author-wrapper a-p-c-wrapper">
            <div className="title">
              <h3>HI THERE, WELCOME TO <span>SCRIBBLE</span></h3>
            </div>
            <div className="media">
              <img src="https://media.licdn.com/dms/image/D4D03AQG4GvTFemdxvg/profile-displayphoto-shrink_400_400/0/1701826717178?e=1709164800&v=beta&t=5TeEJY1M83h-KVDqZrfrIfOlyDGArnDoLkVawGYx5vE" alt="author-pfp" />
              <p>Hi all! I'm Soumyajeet from India. I'm 23 years old.<br/>Self-taught fullstack dev by day, cybersecurity enthusiast by night. Building secure web experiences & exploring the fascinating world of digital defense. <br/>Join me on my coding (and hacking) journey!</p>
            </div>
            <div className="author-footer">
              <div className="auth-foo-left">
                <i><a href="#" className="post-foo-read-more">Learn more about[..]</a></i>
              </div>
              <div className="auth-foo-right">
                <div className="socials">
                  <span>
                    <a href="#" className="fb">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="g">
                      <i class="fa-brands fa-google-plus-g"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="ig">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="ln">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="tw">
                      <i class="fa-brands fa-x-twitter"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" className="yt">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </article>
          <AllPosts />
          <div className='pagination-nav'>
            <ul>
              <li>
                <a href='#'><i class="fa-solid fa-angles-left"></i></a>
              </li>
              <li>
                <a href='#'>1</a>
              </li>
              <li>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
              <li>
                <a href='#'><i class="fa-solid fa-angles-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
    );
}

export default HomePage;

// Minimum width that you must set is 355px.