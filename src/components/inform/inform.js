import React from 'react';
import s from './inform.module.css'
import Image1 from '../images/meal-icon.png'

const Inform = () => {
  return (
    <div className={s.main}>
      <div className={s.first}>
        <img src={Image1} alt="" />
      </div>
      <div className={s.second}>
        <strong>Welcome to TheMealDB</strong>
        <p>
          Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.
          <br />
          We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.
        </p>
        <button><a href="https://www.paypal.com/checkoutnow?sessionID=uid_c9e9305dd8_mdy6ndq6mzy&buttonSessionID=uid_ec0ca53e15_mdy6ndq6mzy&stickinessID=uid_5869620f6a_mdc6mdy6mjm&inlinexo=false&smokeHash=&fundingSource=paypal&buyerCountry=KG&locale.x=en_US&commit=true&clientID=AfHEVYLvvBE2km3eTSHJwF2A6W2YN3CZE--80QyFC7m92Nob4rcZlpzLj-hfcVQGEyBwQombwraLOaEb&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QWZIRVZZTHZ2QkUya20zZVRTSEp3RjJBNlcyWU4zQ1pFLS04MFF5RkM3bTkyTm9iNHJjWmxwekxqLWhmY1ZRR0V5QndRb21id3JhTE9hRWImdmF1bHQ9dHJ1ZSZpbnRlbnQ9c3Vic2NyaXB0aW9uIiwiYXR0cnMiOnsiZGF0YS1zZGstaW50ZWdyYXRpb24tc291cmNlIjoiYnV0dG9uLWZhY3RvcnkiLCJkYXRhLXVpZCI6InVpZF9tamhuYmR2dGpxc2VnaHppZXVvZWFidGh6anJsYmcifX0&xcomponent=1&version=5.0.352&token=1YE43135898256349">PayPal Subscribe</a></button>
        <p>
          Click to Support $2 per month (cancel anytime)
          <br />
          Currently 50 supporters
        </p>
      </div>
      <div className={s.third}>
        <img src={Image1} alt="" />
      </div>
    </div>
  );
};

export default Inform;