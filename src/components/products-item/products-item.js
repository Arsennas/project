import React from 'react';
import s from './products-item.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { allProdyctFilter } from '../../redux/reduct';

const ProductsItem = (props) => {

  const { strCategoryThumb,strCategory, idCategory } = props;

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const toggleDetailPage = () => {
    navigate(`/product/${strCategory}`)
    dispatch(allProdyctFilter(strCategory))
  }
  
  return (
    <div className={s.cart}>
      <div className={s.images}>
        <img onClick={toggleDetailPage} src={strCategoryThumb} alt="" />
      </div>
      <h1 onClick={toggleDetailPage}>{strCategory}</h1>
    </div>
  );
};

export default ProductsItem;