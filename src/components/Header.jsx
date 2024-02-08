import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { MdLocationPin } from "react-icons/md";
import css from './Header.module.css'
import { Link } from 'react-router-dom';


const Location = () => {
  const [selectedCity, setSelectedCity] = useState('BANGALORE');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  }

  return (
    <div className={css.dropdown}>
      <div className={css.dropdownHeader}>
        <span>{selectedCity}</span>
        <MdArrowDropDown className={css.arrowIcon} />
      </div>
      <ul className={css.dropdownList} onChange={handleCityChange} value={selectedCity}>
        <li value="BANGALORE" >BANGALORE</li>
        <li value="MYSORE">MYSORE</li>
      </ul>
    </div>
  );
};

const handleContactButtonClick = () => {
  if (isMobileDevice()) {
    window.location.href = 'tel:+918951842426'; // Replace with your phone number
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



function Dropdown() {
  return (
    <div className={css.submenu1}>
      <ul>
        <li className={css.submenucontent}><Link to='/whoweare'>Whoweare</Link></li>
        <li className={css.submenucontent}><Link to="/selecthomes">SELECT HOMES</Link></li>
        <li className={css.submenucontent}><Link to="/services">SERVICES</Link></li>
        <li className={css.submenucontent}><Link to="/faq">FQA</Link></li>
        <li className={css.submenucontent}><Link to="/contactus">CONTACT US</Link></li>
        <li className={css.submenucontent}><Link to="/joinus">JOIN US</Link></li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        log
        <span>LogoName</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li className={css.menucontent}><a className={css.location} href=""><MdLocationPin size={20} /><Location /></a></li>
            <li className={css.menucontent}><Link to='/whyus'>WHY US</Link></li>
            <li className={css.menucontent}><Link to="/packages">PACKAGES</Link></li>
            <li className={css.menucontent}><Link to="/ourwork">OUR WORK</Link></li>
            <li className={css.menucontent}><a className={css.submenu} href="">MORE</a>
              <Dropdown />
            </li>
            <li><input type="button" href="tel:+918951842426" onClick={handleContactButtonClick} className={css.inputcall} value={'CALL US'} /></li>
            <li><input type="button" className={css.inputtuch} value={'GET IN TOUCH'} /></li>
          </ul>

        </div>
      </div>
    </div>

  )
}
export default Header;