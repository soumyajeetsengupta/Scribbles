import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Post({_id,title,summary,category,tags,cover,content,createdAt}) {
    return(
        <article className="post-wrapper p-c-wrapper">
            <div className="title">
              <h3><Link to={`post/${_id}`} style={{textDecoration: 'none'}}>{title}</Link></h3>
            </div>
            <div className="post-meta-tags">
              <ul className='meta-tags-container'>
                <li className='author'>
                  <i class="fa-solid fa-user"></i>
                  <p>Soumyajeet</p>
                </li>
                <li className='category'>
                  <i class="fa-regular fa-folder-open"></i>
                  <p>{category}</p>
                </li>
                <li className='tags'>
                  <i class="fa-solid fa-tags"></i>
                  <p>{tags}</p>
                </li>
                <li className='comments'>
                  <i class="fa-solid fa-comments"></i>
                  <p>22</p>
                </li>
                <li className='date-of-post'>
                  <i class="fa-regular fa-calendar"></i>
                  <p>{createdAt.split('T')[0]}</p>
                </li>
                <li className='views'>
                  <i class="fa-regular fa-eye"></i>
                  <p>441</p>
                </li>
              </ul>
            </div>
            <div className="post-media">
              <img src={'http://localhost:4000/' + cover} alt='post-media' />
            </div>
            <div className="post-text">
              <p>{summary}</p>
            </div>
            <div className="post-footer">
              <div className="auth-foo-left">
                <i><Link to={`/post?id=${title}&blogCategory=${category}&blogTags=${tags}&blogCover=${cover}&blogContent=${content}&blogCreationTime=${createdAt}&blogId=${'659a55c544d52f065a127cd0'}`} className="post-foo-read-more">Read more [..]</Link></i>
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