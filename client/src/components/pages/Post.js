import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Post() {
    return(
        <article className="post-wrapper p-c-wrapper">
            <div className="title">
              <h3><span class="edit-btn"><i class="fa-regular fa-pen-to-square"></i></span> <Link to='/post' style={{textDecoration: 'none'}}>The One-Man Maestro: How Chris Sawyer Crafted Gaming History</Link></h3>
            </div>
            <div className="post-meta-tags">
              <ul className='meta-tags-container'>
                <li className='author'>
                  <i class="fa-solid fa-user"></i>
                  <p>Soumyajeet</p>
                </li>
                <li className='category'>
                  <i class="fa-regular fa-folder-open"></i>
                  <p>Tribute</p>
                </li>
                <li className='tags'>
                  <i class="fa-solid fa-tags"></i>
                  <p>genius, gaming</p>
                </li>
                <li className='comments'>
                  <i class="fa-solid fa-comments"></i>
                  <p>22</p>
                </li>
                <li className='date-of-post'>
                  <i class="fa-regular fa-calendar"></i>
                  <p>December 29, 2023</p>
                </li>
                <li className='views'>
                  <i class="fa-regular fa-eye"></i>
                  <p>441</p>
                </li>
              </ul>
            </div>
            <div className="post-media">
              <img src='https://alchetron.com/cdn/chris-sawyer-a2c0b964-3f42-4298-adbc-10818512869-resize-750.gif' alt='post-media' />
            </div>
            <div className="post-text">
              <p>
                In the bustling world of video games, few names hold the weight of Chris Sawyer. He's not a flamboyant figure with a million-dollar smile, nor does he churn out annual sequels to flashy franchises. Yet, Sawyer's impact on the industry is undeniable. From the pixelated thrill rides of RollerCoaster Tycoon to the intricate transportation networks of Transport Tycoon, his creations have captivated millions, transcending generations and sparking countless hours of creative obsession. So, who is this enigmatic developer who single-handedly built a gaming empire from the ground up, code by code, coaster by coaster? This is the story of Chris Sawyer, the quiet genius who redefined the art of simulation and left an indelible mark on the hearts of gamers worldwide.
              </p>
              <blockquote>
                <i>I didn't have any special training or anything. I just had a computer and a lot of enthusiasm.</i>
              </blockquote>
              <p>
                Fueled by a childhood passion for computers and a fascination with intricate systems, Sawyer embarked on a solo journey, crafting sprawling worlds of virtual possibility. His games weren't just about building; they were about balancing intricate mechanics, managing resources, and ultimately, creating something beautiful and functional. In Sawyer's hands, rollercoasters became symphonies of steel, trains became lifelines of commerce, and every pixel pulsated with the potential for endless imagination. This is the legacy of Chris Sawyer: a testament to the power of one mind, a single keyboard, and a boundless love for the magic that unfolds when pixels come alive.
              </p>
            </div>
            <div className="post-footer">
              <div className="auth-foo-left">
                <i><a href="#" className="post-foo-read-more">Read more [..]</a></i>
              </div>
              <div className="auth-foo-right">
                <div className="socials">
                  <span>
                    <a href="#" className="fb">
                      <i class="fa-brands fa-facebook-f"></i>
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
                </div>
              </div>
            </div>
        </article>      
    );
}

export default Post;