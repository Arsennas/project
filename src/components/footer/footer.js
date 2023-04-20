import React from 'react';
import s from './footer.module.css'
import Image1 from '../images/logo-tcdb2.png'
import Image2 from '../images/logo-tadb1.png'
import Image3 from '../images/logo-tsdb3.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const navigate = useNavigate()
  
  return (
    <div className={s.main}>
      <div className={s.first}>
        <p>
          © 2023 TheMealDB
          <br />
          Proudly built in the UK
        </p>
      </div>
      <div className={s.second}>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </div>
      <div className={s.third}>
        <p onClick={() => navigate('/about')}>About</p>
        <p onClick={() => navigate('/faqs')}>FAQs</p>
        <p onClick={() => navigate('/contact')}>Contact</p>
      </div>
    </div>
  );
};

export default Footer;