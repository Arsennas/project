import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import s from './about.module.css'
import Image1 from '../../components/images/icon.png'

const About = () => {
  return (
    <div>
      <Header />
      <div className={s.main}>
        <center>
          <p className={s.p1}>About</p>
          <p className={s.info}>
            TheMealDB was built in 2016 to provide a free data source api for recipes online
            <br />
            in the hope that developers would build applications and cool projects ontop of it.
            <br />
            TheMealDB originated on the Kodi forums as a way to browse recpies on your TV.
            <br />
          </p>
          <p className={s.p2}>Kodi Add-on</p>
          <div>
            <img src={Image1} alt="" />
          </div>
          <a className={s.a} href="https://kodi.tv/addon/screensaver/themealdb">Available on the official Kodi repository</a>
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default About;