import '../../css/AboutMe.css';
import {accordian} from '../functionalities/featuresAboutMe.js'

export default function AboutMe () {
    const clickAccordian = (targetElem) => {
        let id = targetElem;
        let element = document.getElementById(targetElem);
        let value = ((id == 'h-1') || (id == 'h-2')) ? "95px" : "120px";
        if(window.pageXOffset <= 375)
        {
            value = ((id == 'h-1') || (id == 'h-2')) ? "145px" : "190px";
        }
        if(element.getAttribute("isclicked") == 'true')
        {
            element.getElementsByClassName('heading-symbol')[0].children[0].classList.remove("fa-minus");
            element.getElementsByClassName('heading-symbol')[0].children[0].classList.add("fa-plus");

            element.nextElementSibling.classList.remove("desc-off");
            element.nextElementSibling.style.height = 0;
            element.setAttribute("isclicked", 'false');
        }
        else 
        {
            element.getElementsByClassName('heading-symbol')[0].children[0].classList.remove("fa-plus");
            element.getElementsByClassName('heading-symbol')[0].children[0].classList.add("fa-minus");
            
            element.nextElementSibling.classList.add("desc-off");
            element.nextElementSibling.style.height = value;
            element.setAttribute("isclicked", 'true');
        }
    }
    
    function animateProgressBar() {
        let contentsPresent = document.getElementsByClassName('skills-wrapper').length || 0;
        if(contentsPresent <= 0)
        {
            window.removeEventListener('scroll', animateProgressBar);
            return;
        }

        let targetElem = document.getElementsByClassName('my-skill')[0];
        let targetScreenPosition = targetElem.getBoundingClientRect().y;
        let elemTop = targetElem.getBoundingClientRect().top;
        let elemBottom = targetElem.getBoundingClientRect().bottom;

        let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        for(let i = 1; i <= contentsPresent; i++)
        {
            let classN = 'skill-' + i;
            let element = document.getElementsByClassName(classN)[0];
            let fillVal = element.getElementsByClassName('skill-bar-right')[0].textContent;
            
            if(isVisible)
            {
                element.getElementsByClassName('skill-measure')[0].style.width = fillVal;
                window.removeEventListener('scroll', animateProgressBar);
            }
        }
    }

    window.addEventListener('scroll', animateProgressBar);

    return(
        <div id="main-about-me">
            <div className="post-Ex-wrapper contact-me-wrapper">
                <div className="title">
                    <h3>ABOUT SCRIBBLE</h3>
                </div>
            </div>

            <div className="about-me-text post-Ex-wrapper contact-me-wrapper">
                <img src="https://media.licdn.com/dms/image/D4D03AQG4GvTFemdxvg/profile-displayphoto-shrink_400_400/0/1701826717178?e=1709164800&v=beta&t=5TeEJY1M83h-KVDqZrfrIfOlyDGArnDoLkVawGYx5vE" alt="author-pfp" />
                <p>Scribble is not a polished manuscript, but a vibrant tapestry woven with messy threads of learning, life's surprises, and a deep-seated belief in sharing. It's my self-taught SDE journey unveiled, where code snippets dance with personal reflections, celebrating the beautiful imperfection of growth and connection.</p>
                <p>Under the hood of Scribble hums the MERN stack, a potent cocktail of technologies blending the power of MongoDB for data, the magic of Express for server-side orchestration, the artistry of React for crafting captivating interfaces, and the unifying elegance of Node.js. It's a full-fledged playground for my developer journey, where lines of code dance with vibrant experiences, weaving a tapestry of learning and connection that's yours to explore. Welcome to Scribble, where MERN meets messy but magnificent exploration.</p>
                <blockquote>
                    <i>I didn't have any special training or anything. I just had a computer and a lot of enthusiasm.</i>
                </blockquote>
                <p>Hi all! I'm Soumyajeet from India. I'm 23 years old.
Self-taught fullstack dev by day, cybersecurity enthusiast by night. Building secure web experiences & exploring the fascinating world of digital defense.
Join me on my coding (and hacking) journey!</p>
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
                        <h3>MY SKILLS</h3>
                    </div>
                    <div className='my-skill-rating-contents'>
                        <div className='skill-1 skills-wrapper'>
                            <p className='skill-name'>Javascript</p>
                            <div className='skill-bar'>
                                <div className='skill-bar-left'>
                                    <div className='skill-measure'></div>
                                </div>
                                <div className='skill-bar-right'>80%</div>
                            </div>
                        </div>
                        <div className='skill-2 skills-wrapper'>
                            <p className='skill-name'>HTML5, CSS3, SCSS</p>
                            <div className='skill-bar'>
                                <div className='skill-bar-left'>
                                    <div className='skill-measure'></div>
                                </div>
                                <div className='skill-bar-right'>80%</div>
                            </div>
                        </div>
                        <div className='skill-3 skills-wrapper'>
                            <p className='skill-name'>MongoDB</p>
                            <div className='skill-bar'>
                                <div className='skill-bar-left'>
                                    <div className='skill-measure'></div>
                                </div>
                                <div className='skill-bar-right'>60%</div>
                            </div>
                        </div>
                        <div className='skill-4 skills-wrapper'>
                            <p className='skill-name'>Redux</p>
                            <div className='skill-bar'>
                                <div className='skill-bar-left'>
                                    <div className='skill-measure'></div>
                                </div>
                                <div className='skill-bar-right'>60%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='what-can-do post-Ex-wrapper p-p-c-wrapper'>
                    <div className="title">
                        <h3>WHAT CAN I DO FOR YOU?</h3>
                    </div>
                    <div className='accordian-container'>
                        <div className='accordian-group click-on'>
                            <div className='accordian-heading' id="h-1" isClicked="false" onClick={() => clickAccordian("h-1")}>
                                <div className='heading-symbol'><i class="fa-solid fm-sm fa-plus"></i></div>
                                <div className='heading-text'>Let's craft beautiful & responsive interfaces.</div>
                            </div>
                            <div className='according-description'>
                                <p>Need a sleek website that engages users? I'll spin up stunning front-end experiences with modern frameworks like React</p>
                            </div>
                        </div>
                        <div className='accordian-group click-on'>
                            <div className='accordian-heading' id="h-2" isClicked="false" onClick={() => clickAccordian("h-2")}>
                                <div className='heading-symbol'><i class="fa-solid fm-sm fa-plus"></i></div>
                                <div className='heading-text'>Powerhouse your app with robust backend logic.</div>
                            </div>
                            <div className='according-description desc-on'>
                                <p>Server-side sorcery needed? I'll wield Node.js to build secure and scalable backends that handle your data like a charm.</p>
                            </div>
                        </div>
                        <div className='accordian-group click-on'>
                            <div className='accordian-heading' id="h-3" isClicked="false" onClick={() => clickAccordian("h-3")}>
                                <div className='heading-symbol'><i class="fa-solid fm-sm fa-plus"></i></div>
                                <div className='heading-text'>Data wrangling? I got this.</div>
                            </div>
                            <div className='according-description desc-on'>
                                <p>Struggling to wrangle your data? I'll design and implement efficient databases like MySQL or MongoDB, keeping your information organized and accessible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}