import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/ExpandedPost.css';

export default function ExpandedPost () {
    const [postInfo, setPostInfo] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const {id} = useParams();

    /*async function createNewComment(ev) {
        console.log(ev);
        const data = new FormData();
        data.set('name', name);
        data.set('message', message);
        ev.preventDefault();

        const response = await fetch('https://scribble-api.onrender.com/post', {
            method: 'PUT',
            body: data
        });
    }*/

    useEffect(() => { 
        window.scrollTo(0, 0);
        fetch(`https://scribble-api.onrender.com/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
                setLoaded(true);
            });
        }); 
    }, []);

    if(!postInfo) return '';

    return(
        <div id="main-expanded" className={`fade-in ${loaded ? 'loaded' : ''}`}>
                <div className="post-Ex-wrapper p-p-c-wrapper">
                    <div className="title">
                        <h3>{postInfo.title}</h3>
                    </div>
                    <div className="post-meta-tags">
                        <ul className='meta-tags-container'>
                            <li className='author'>
                                <i class="fa-solid fa-user"></i>
                                <p>Soumyajeet</p>
                            </li>
                            <li className='category'>
                                <i class="fa-regular fa-folder-open"></i>
                                <p>{postInfo.category}</p>
                            </li>
                            <li className='comments'>
                                <i class="fa-solid fa-comments"></i>
                                <p>3</p>
                            </li>
                            <li className='date-of-post'>
                                <i class="fa-regular fa-calendar"></i>
                                <p>{postInfo.createdAt.split('T')[0]}</p>
                            </li>
                            <li className='views'>
                                <i class="fa-regular fa-eye"></i>
                                <p>{postInfo.views}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <article className="post-Ex-wrapper p-p-c-wrapper">
                    <div className="post-media">
                    <img src={'https://scribble-api.onrender.com/' + postInfo.cover} alt='post-media' />
                    </div>
                    <div className="post-text" dangerouslySetInnerHTML={{__html: postInfo.content}} />
                    <div className="post-footer">
                        <div className="auth-foo-left">
                            <div className="post-meta-tags">
                                <ul className='meta-tags-container'>
                                    <li className='tags'>
                                        <i class="fa-solid fa-tags"></i>
                                        <p>{postInfo.tags}</p>
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

                    <div className="comments-output-screen-lg">
                        <div className="cmt-1">
                            <div className='cmt-pfp'>
                                <img src='https://media.licdn.com/dms/image/D4D03AQF3Cu7CNTIkow/profile-displayphoto-shrink_800_800/0/1690113666633?e=1709769600&v=beta&t=8lgMQgvxPhBy9wadsRWaxmC4eWouEtDDbryTViG4fnw' alt='cmt-pfp-img' />
                            </div>
                            <div className='cmt-text'>
                                <div className='cmt-top-bar'>
                                    <div className='cmt-name'>
                                        Surya
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
                                </div>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            </div>
                        </div>
                        <div className="cmt-1">
                            <div className='cmt-pfp'>
                                <img src='https://media.licdn.com/dms/image/C5603AQE5WcuHVq_E0w/profile-displayphoto-shrink_400_400/0/1636992757460?e=1709769600&v=beta&t=_iQapFGfOcL25ckCzrM0zIDMxhiIHdDeOpWnxNxZyAA' alt='cmt-pfp-img' />
                            </div>
                            <div className='cmt-text'>
                                <div className='cmt-top-bar'>
                                    <div className='cmt-name'>
                                        Anurag
                                    </div>
                                </div>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='comment-section-mobile post-Ex-wrapper p-p-c-wrapper'>
                    <div className="title">
                        <h2><span>3</span> Comments on The One-Man Maestro: How Chris Sawyer Crafted Gaming History</h2>
                    </div>

                    <div class='comment-output-screen-sm'>
                        <div class="cmt">
                        <div class="img-container">
                            <img src='https://media.licdn.com/dms/image/D4D03AQF3Cu7CNTIkow/profile-displayphoto-shrink_800_800/0/1690113666633?e=1709769600&v=beta&t=8lgMQgvxPhBy9wadsRWaxmC4eWouEtDDbryTViG4fnw' alt='cmt-pfp-img' />
                        </div>                   
                            <div class='cmt-sm-text'>
                                <span class='cmt-name-sm'>Surya </span>
                                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </div>
                        </div>
                    </div>

                    <div class='comment-output-screen-sm'>
                        <div class="cmt">
                            <div class="img-container">
                            <img src='https://media.licdn.com/dms/image/D4D03AQGMHaAgysYYcA/profile-displayphoto-shrink_400_400/0/1700294784629?e=1709769600&v=beta&t=5bcLAtqYGPceLGyZAOhY4xYwRINbE1FBOo73-z99-yE' alt='cmt-pfp-img' />
                            </div>                   
                            <div class='cmt-sm-text'>
                                <span class='cmt-name-sm'>Kasi</span>
                                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </div>
                        </div>
                    </div>

                    <div class='comment-output-screen-sm'>
                        <div class="cmt">
                            <div class="img-container">
                            <img src='https://media.licdn.com/dms/image/C5603AQE5WcuHVq_E0w/profile-displayphoto-shrink_400_400/0/1636992757460?e=1709769600&v=beta&t=_iQapFGfOcL25ckCzrM0zIDMxhiIHdDeOpWnxNxZyAA' alt='cmt-pfp-img' />
                            </div>                   
                            <div class='cmt-sm-text'>
                                <span class='cmt-name-sm'>Anurag</span>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
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
                            <input 
                                type='name' 
                                id='cmt-name' 
                                placeholder='Name' 
                                required
                            />
                        </div>
                        <div className='cmt-message-box'>
                            <textarea 
                                type="message"
                                name="message"
                                id='cmt-message' 
                                placeholder='Message'
                            >
                            </textarea>
                        </div>
                    </form> 
                    <div className='post-cmt-btn'><button className='post-cmt'>Get A Quote</button></div> 
                </div>
        </div>
    );
}