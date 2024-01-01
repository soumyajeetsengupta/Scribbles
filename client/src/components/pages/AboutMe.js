import '../../css/AboutMe.css';

export default function AboutMe () {
    return(
        <div id="main-about-me">
            <div className="post-Ex-wrapper contact-me-wrapper">
                <div className="title">
                    <h3>ABOUT IBLOGGO</h3>
                </div>
            </div>

            <div className="about-me-text post-Ex-wrapper contact-me-wrapper">
                <img src="https://media.licdn.com/dms/image/D4D03AQG4GvTFemdxvg/profile-displayphoto-shrink_400_400/0/1701826717178?e=1709164800&v=beta&t=5TeEJY1M83h-KVDqZrfrIfOlyDGArnDoLkVawGYx5vE" alt="author-pfp" />
                <p>Hi all. This is Ang and Annie from Istanbul. We're providing content for iBloggo site and we’ve been in internet, social media and affiliate for too long time and its my profession. We are web designer & developer living Amsterdam! What can I say, we are the best..</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                <blockquote>
                    <i>I didn't have any special training or anything. I just had a computer and a lot of enthusiasm.</i>
                </blockquote>
                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <div className="author-footer">
                    <div className="auth-foo-left">
                        
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
            </div>

            <div className='my-skill-section'>
                <div className='my-skill post-Ex-wrapper p-p-c-wrapper'>
                    <div className="title">
                        <h3>OUR SKILLS</h3>
                    </div>
                </div>
                <div className='what-can-do post-Ex-wrapper p-p-c-wrapper'>
                    <div className="title">
                        <h3>WHAT CAN I DO FOR YOU?</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}