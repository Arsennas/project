import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Image1 from '../../components/images/logo-tsdb3.png'
import Image2 from '../../components/images/logo-tadb1.png'
import Image3 from '../../components/images/logo-small.png'
import s from './contact.module.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className={s.main}>
        <center>
          <p>
            <strong>
              Contact
            </strong>
            <br />
            <br />
            Email: thedatadb@gmail.com
            <br />
            <br />
            © 2023 TheMealDB
            <br />
            Proudly built in the UK
            <br />
            <br />
            Related sites:
          </p>
          <div className={s.img1}>
            <img src={Image2} alt="" />
          </div>
          <br />
          <div className={s.img2}>
            <img src={Image1} alt="" />
          </div>
          <br />
          <div className={s.img3}>
            <img src={Image3} alt="" />
          </div>
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;