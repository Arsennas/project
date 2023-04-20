import React from 'react';
import List from '../list/list';
import ProductsItem from '../products-item/products-item';
import s from './products.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Products = () => {

  const { categories } = useSelector(state => state.productReducer)

  const list = <List items={categories}
    renderItem={(item) =>
    <ProductsItem key={item.idCategory}
    {...item} />} />

  const { slug } = useParams()

  return (
    <div className={s.main}>
      <center>
        <h1 className={s.h1}>Meals</h1>
        <h1>{slug}</h1>
      </center>
      <div className={s.wrapper}>
        {list}
      </div>
      <hr style={{
        marginLeft: '180px',
        marginRight: '180px',
        color: 'white'
      }} />
    </div>
  );
};

export default Products;