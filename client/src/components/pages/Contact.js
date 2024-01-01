import '../../css/Contact.css';

export default function Contact () {
    return (
        <div id="main-contact">
            <div className="post-Ex-wrapper contact-me-wrapper">
                <div className="title">
                    <h3>GET IN TOUCH</h3>
                </div>
            </div>

            <div className='contact-form-main-container '>
                <div className="cmt-form contact-me-form post-Ex-wrapper p-p-c-wrapper">
                    <div className="title">
                        <h3>CONTACT FORM</h3>
                    </div>
                    <form class="contact-me-form-container">
                        <div className='cmt-name-box'>
                            <input type='name' id='cmt-name' placeholder='Name' />
                        </div>
                        <div className='cmt-email-box'>
                            <input type='email' id='cmt-email' placeholder='Email Address' />
                        </div>
                        <div className='cmt-phone-box'>
                            <input type='phone' id='cmt-number' placeholder='Phone Number' />
                        </div>
                        <div className='cmt-subject-box'>
                            <input type='text' id='cmt-subject' placeholder='Subject' />
                        </div>
                        <div className='cmt-message-box'>
                            <textarea id='cmt-message' placeholder='Message'></textarea>
                        </div>
                    </form> 
                    <div className='post-cmt-btn'><button className='post-cmt'>Get A Quote</button></div>
                </div>
                <div className='contact-details post-Ex-wrapper p-p-c-wrapper'>
                    <div className="title">
                        <h3>CONTACT DETAILS</h3>
                    </div>
                    <ul>
                        <li><i class="fa-solid fa-sm fa-location-dot"></i> 121 King Street, Melbourne Victoria<br />3000</li>
                        <li><i class="fa-solid fa-sm fa-phone"></i> (1005) 5999 4446<br /></li>
                        <li><i class="fa-solid fa-md fa-envelope"></i> support@designingmedia.com<br /></li>
                        <li><i class="fa-brands fa-lg fa-instagram"></i> soumyajeet_sen_<br /></li>
                        <li>&nbsp;</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}