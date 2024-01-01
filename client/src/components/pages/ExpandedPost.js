import '../../css/ExpandedPost.css';

export default function ExpandedPost () {
    return(
        <div id="main-expanded">
            <div className="post-Ex-wrapper p-p-c-wrapper">
                <div className="title">
                    <h3>The One-Man Maestro: How Chris Sawyer Crafted Gaming History</h3>
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
            </div>

            <article className="post-Ex-wrapper p-p-c-wrapper">
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
                        <div className="post-meta-tags">
                            <ul className='meta-tags-container'>
                                <li className='tags'>
                                    <i class="fa-solid fa-tags"></i>
                                    <p>genius, gaming</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            <div className='commnet-section post-Ex-wrapper p-p-c-wrapper'>
                <div className="title">
                    <h2><span>3</span> Comments on The One-Man Maestro: How Chris Sawyer Crafted Gaming History</h2>
                </div>
                <div className="comments-output">
                    <div className="cmt-1">
                        <div className='cmt-pfp'>
                            <img src='https://media.licdn.com/dms/image/D4D03AQF3Cu7CNTIkow/profile-displayphoto-shrink_800_800/0/1690113666633?e=1709769600&v=beta&t=8lgMQgvxPhBy9wadsRWaxmC4eWouEtDDbryTViG4fnw' alt='cmt-pfp-img' />
                        </div>
                        <div className='cmt-text'>
                            <div className='cmt-top-bar'>
                                <div className='cmt-name'>
                                    Surya
                                </div>
                                <div className='cmt-reply-btn'>
                                    <button>Reply</button>
                                </div>
                            </div>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </div>

                    <div className="cmt-1">
                        <div className='cmt-pfp'>
                            <img src='https://media.licdn.com/dms/image/D4D03AQGMHaAgysYYcA/profile-displayphoto-shrink_400_400/0/1700294784629?e=1709769600&v=beta&t=5bcLAtqYGPceLGyZAOhY4xYwRINbE1FBOo73-z99-yE' alt='cmt-pfp-img' />
                        </div>
                        <div className='cmt-text'>
                            <div className='cmt-top-bar'>
                                <div className='cmt-name'>
                                    Kasi
                                </div>
                                <div className='cmt-reply-btn'>
                                    <button>Reply</button>
                                </div>
                            </div>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

                            <div className='cmt-sub-section-reply'>
                            <ul>
                                <li>
                                    <div className="cmt-1">
                                        <div className='cmt-pfp'>
                                            <img src='https://media.licdn.com/dms/image/C5603AQE5WcuHVq_E0w/profile-displayphoto-shrink_400_400/0/1636992757460?e=1709769600&v=beta&t=_iQapFGfOcL25ckCzrM0zIDMxhiIHdDeOpWnxNxZyAA' alt='cmt-pfp-img' />
                                        </div>
                                        <div className='cmt-text'>
                                            <div className='cmt-top-bar'>
                                                <div className='cmt-name'>
                                                    Anurag
                                                </div>
                                                <div className='cmt-reply-btn'>
                                                    <button>Reply</button>
                                                </div>
                                            </div>
                                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cmt-form post-Ex-wrapper p-p-c-wrapper">
                <div className="title">
                    <h3>COMMENT FORM</h3>
                </div>
                <form class="cmt-form-container">
                    <div className='cmt-name-box'>
                        <input type='name' id='cmt-name' placeholder='Name' />
                    </div>
                    <div className='cmt-email-box'>
                        <input type='email' id='cmt-email' placeholder='Email Address' />
                    </div>
                    <div className='cmt-phone-box'>
                        <input type='phone' id='cmt-number' placeholder='Phone Number' />
                    </div>
                    <div className='cmt-message-box'>
                        <textarea id='cmt-message' placeholder='Message'></textarea>
                    </div>
                </form>

                <div className='post-cmt-btn'><button className='post-cmt'>Get A Quote</button></div>  
            </div>
        </div>
    );
}