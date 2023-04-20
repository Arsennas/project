import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import s from './faqs.module.css'
import Image1 from '../../components/images/faq.png'

const Faqs = () => {
  return (
    <div>
      <Header />
      <div className={s.main}>
        <center>
          <img src={Image1} alt="" />
          <p>
            How do I add a Recipe/Meal?
            <br />
            All <a href="https://www.patreon.com/thedatadb">Patreon supporters</a> get a link to add New meals, Just make sure you have a nice large JPG image to upload after you add them.
            <br />
            <br />
            How do I apply for an API key?
            <br />
            If you are a developer, then you can use the test api key of '1' to get started.
            <br />
            Once you have written your app you can sing up on Patreon and you will be sent a private key via email. API keys usually take a couple of hours.
            <br />
            <br />
            How do I upload an image?
            <br />
            Just click the red upload image button and upload a picture that is square dimensions. We recomend 700x700 size.
            <br />
            <br />
            Are there any limits on the API?
            <br />
            No limits, the API has unlimited usage.
            <br />
            <br />
            I'm have a commercial app, can I use the database?
            <br />
            Yes! But we expect you to sign up on a commecial tier for Patreon support. This keeps our servers going and our service reliable.
          </p>
        </center>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;