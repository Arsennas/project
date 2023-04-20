import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from '../../components/list/list';
import Detail from '../detail/detail';
import s from './deteil-product.module.css'
import Header from '../../components/header/header';

const DetailProducts = () => {

  const { slug } = useParams()

  const { data } = useSelector(state => state.productReducer);

  const detail = data &&
    <List
      items={data}
      renderItem={(item) => <Detail
      key={item.idMeal} {...item} />} />

  return (
    <div className={s.main}>
      <Header />
      <center>
        <h1> {slug}</h1>
      </center>
      <div className={s.wrapper}>
        {detail}
      </div>
    </div>
  );
};

export default DetailProducts;