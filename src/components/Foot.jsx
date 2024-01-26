import React from 'react';
import css from './Foot.module.css'
import { PiInstagramLogo } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Foot() {

    const handleContactButtonClick = () => {
        if (isMobileDevice()) {
            window.location.href = 'tel:+918951842426'; 
        } else {
            showNotification('To contact us, please open your phone dialer.');
        }
    };

    const isMobileDevice = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const showNotification = (message) => {
        if ('Notification' in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification('Contact Us', { body: message });
                }
            });
        }
    };


    return (

        <div className={css.container}>
            <div className={css.footer}>
                <div className={css.footercontent}>
                    <div className={css.block1}>
                        <ul>
                            <li>logo</li>
                            <br className={css.gap1} />
                            <li>Contact</li>
                            <br />
                            <li><a href="tel:+918951842426" onClick={handleContactButtonClick}>
                                +91 895 184 2426
                            </a></li>
                            <li><a href="mailto:sharanyags24@gmail.com">sharanyags24@gmail.com</a></li>
                            <li>Mon-Sat,10 am to 6pm</li>
                            <br className={css.gap2} />
                            <li>
                                <div className={css.socialMedia}>
                                    <ul>
                                        <li><a href="https://m.facebook.com/Buildryt/"  target='_blank'><FaFacebookF /></a></li>
                                        <li><a href="https://www.instagram.com/buildryt_studio/"  target='_blank'><PiInstagramLogo /></a></li>
                                        <li><a href="https://twitter.com/BuildrytHQ"  target='_blank'><SlSocialTwitter /></a></li>
                                        <li><a href="https://in.linkedin.com/company/buildryt"  target='_blank'><RiLinkedinBoxFill /></a></li>
                                    </ul>

                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className={css.right}>

                    <div className={css.block2}>
                        <ul>
                            <li className={css.company}>COMPANY</li>
                            <br />
                            <li className={css.contentright}><a href="">Packages</a></li>
                            <li className={css.contentright}><a href="">Our work</a></li>
                            <li className={css.contentright}><a href="">Select Homes</a></li>
                            <li className={css.contentright}><a href="">Services</a></li>
                            <li className={css.contentright}><a href="">FAQ's</a></li>
                        </ul>

                    </div>
                    <div className={css.block3}>
                        <ul>
                            <br />
                            <br />
                            <li className={css.contentright}><a href="">Why us</a></li>
                            <li className={css.contentright}><a href="">Who we are</a></li>
                            <li className={css.contentright}><a href="">Join us</a></li>
                            <li className={css.contentright}><a href="">Contact us</a></li>
                            <li className={css.contentright}><a href="">Refer Friends</a></li>
                        </ul>

                    </div>
                    <div className={css.block4}>
                        <ul>
                            <li className={css.support}>SUPPORT</li>
                            <br />
                            <li className={css.block4content}><div><li className={css.mailname}>CUSTOMR SUPPORT</li><li className={css.mail}><a href="mailto:care@buildryt">care@buildryt</a></li></div></li>
                            <br />
                            <li className={css.block4content}><div><li className={css.mailname}>JOIN US AS A CONTRACTOR OR AN ARCHITECT</li><li className={css.mail}><a href="mailto:partners@buildryt.com">partners@buildryt.com</a></li></div></li>
                            <br />
                            <li className={css.block4content}><div><li className={css.mailname}>GENERAL QUERIES & INFORMATION</li><li className={css.mail}><a href="mailto:info@buildryt.com">info@buildryt.com</a></li></div></li>

                        </ul>

                    </div>

                </div>
            </div>
            <hr className={css.horizontalLine} />
            <div className={css.afterhr}>
                <div className={css.endfooterleft}>
                    © 2023 Buildryt. All rights reserved.
                </div>
                <div className={css.endfooterright}>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>

                </div>
            </div>

        </div>
        
    );

}

export default Foot;