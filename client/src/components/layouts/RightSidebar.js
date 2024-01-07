function RightSidebar() {
    return (
        <div id="right-sidebar">
          <div className="widget">
            <div className="title widget-wrapper">
              <h3>EMAIL <br/>NEWSLETTER</h3>
            </div>
            <p>
              Sign up to receive updates on freebie releases and find out what's new with Scribble!
            </p>
            <form id="subscribe">
              <input type="email" className="form-control widget-wrapper" placeholder="Enter your email address..." />
              <button className="btn btn-subscribe widget-wrapper">Subscribe Now</button>
            </form>
          </div>
          
          <div className="widget">
            <div className="title widget-wrapper">
              <h3>GALLERY</h3>
            </div>
            <div className="gallery widget-wrapper">
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_01.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_02.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_03.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_04.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_05.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_06.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_07.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_08.png' alt='grid-img' />
              <img src='https://html.designingmedia.com/ibloggo/demos/flickr_09.png' alt='grid-img' />
            </div>
          </div>

          <div className="widget">
            <div className="title widget-wrapper">
                <h3>RECENT TWEETS</h3>
            </div>
            <div className="tweets widget-wrapper">
                <div className="tweets-posts widget-wrapper">
                  <p>
                    <span><i class="fa-brands fa-x-twitter"></i> &nbsp;</span>
                    Thanks for follow us! I am here to help...&nbsp;
                    <span className="tw-time-of-post"><i>15 min ago</i></span>
                  </p>
                </div>
                <div className="tweets-posts widget-wrapper">
                  <p>
                    <span><i class="fa-brands fa-x-twitter"></i> &nbsp;</span>
                    Did you check our lastest work?&nbsp;
                    <span className="tw-time-of-post"><i>21 hours ago</i></span>
                  </p>
                </div>
                <div className="tweets-posts widget-wrapper">
                  <p>
                    <span><i class="fa-brands fa-x-twitter"></i> &nbsp;</span>
                    Please check my ticket, we are waiting your answer&nbsp;
                    <span className="tw-time-of-post"><i>1 days ago</i></span>
                  </p>
                </div>
            </div>
          </div>

          <div className="widget">
            <div className="title widget-wrapper">
                <h3>POPULAR POSTS</h3>
            </div>
            <div className="popular widget-wrapper">
              <div className="popular-posts widget-wrapper">
                  <p>
                    We are happy cos new work has been completed!
                  </p>
              </div>
              <div className="popular-posts widget-wrapper">
                  <p>
                    Its an example slide gallery post format
                  </p>
              </div>
              <div className="popular-posts widget-wrapper">
                  <p>
                    SpartanRace 2014 - Black and white edition video from Vimeo
                  </p>
              </div>
              <div className="popular-posts widget-wrapper">
                  <p>
                    One more cup of coffee
                  </p>
              </div>
              <div className="popular-posts widget-wrapper">
                  <p>
                    Good Riddance - A SoundCloud audio post example
                  </p>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="title widget-wrapper">
                <h3>HOT TOPICS</h3>
            </div>
            <div className="hot-topics">
              <div className="hot-topics-tiles">reponsive</div>
              <div className="hot-topics-tiles">mobile</div>
              <div className="hot-topics-tiles">interface</div>
              <div className="hot-topics-tiles">web</div>
              <div className="hot-topics-tiles">stock</div>
              <div className="hot-topics-tiles">mock up</div>
              <div className="hot-topics-tiles">web</div>
              <div className="hot-topics-tiles">image</div>
              <div className="hot-topics-tiles">mock up</div>
              <div className="hot-topics-tiles">logo</div>
            </div>
          </div>
          
        </div>
    );
}

export default RightSidebar;