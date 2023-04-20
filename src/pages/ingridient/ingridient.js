import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ingridient.module.css'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCartAction,delateProductAction } from '../../redux/action';
import Header from '../../components/header/header';
import DeleteIcon from '@mui/icons-material/Delete';

const Ingridient = () => {

  const { product} = useSelector(state => state.productReducer);
  const dispatch = useDispatch()

  // if(error){
  //   return  <center><h1>Товар не найден!!!!</h1></center>
  // }
  return (
    <>
      {product &&
        <>
          <Header />
          <center>
            <h1 className={s.ssa}>{product.strMeal}</h1>
          </center>
          <div className={s.main}>
            <div className={s.cart}>
              <div className={s.image}>
                <img src={product.strMealThumb} alt="" />
              </div>
              <h1 className={s.h1}>{product.strMeal}</h1>
              <div className={s.btn}>
              <IconButton aria-label="delete">
                <DeleteIcon onClick={() => dispatch(delateProductAction(product.idMeal))} style={{color:'paleturquoise'}} />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon onClick={() => dispatch(addToCartAction(product.idMeal))} />
              </IconButton>
              </div>
            </div>
            <div className={s.inform}>
              <center>
                <h1 className={s.aa}>{product.strMeal}</h1>
              </center>
              <div>
                <h1 className={s.h2}>Категория:{product.strCategory}</h1>
              </div>
              <div>
                <h1 className={s.h2}>Место где часто готовится: {product.strArea}</h1>
              </div>
              <div>
                <a className={s.a} href={product.strYoutube}>Подробности</a>
              </div>
              <div className={s.p}>
                <h1 className={s.h2}>Инструкция: {product.strInstructions}</h1>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Ingridient;