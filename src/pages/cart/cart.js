import React from 'react';
import Header from '../../components/header/header';
import { useSelector } from 'react-redux';
import List from './../../components/list/list';
import s from './cart.module.css'
import Footer from '../../components/footer/footer';
import Detail from './../detail/detail';

const Cart = () => {

  const { cart } = useSelector(state => state.productReducer)
  console.log(cart)
  const carts = cart && <List
    items={cart}
    renderItem={(item) => <Detail
      key={item.idMeal}
      {...item} />} />
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
        {
          carts
        }
      </div>
    </div>
  );
};

export default Cart;