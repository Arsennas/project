import React from 'react';
import s from './header.module.css'
import Image1 from '../images/logo-small.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className={s.main}>
      <div className={s.left}>
        <img onClick={() => navigate('/')} src={Image1} alt="" />
      </div>
      <div className={s.right}>
        <span>
          <p onClick={() => navigate('/')}>Home</p>
        </span>
        <p onClick={() => navigate('/cart')}>Cart</p>
      </div>
    </div>
  );
};

export default Header;