import React from 'react';
import s from './area.module.css'
import { allIngridients } from '../../redux/reduct';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const Area = (props) => {

  const { idMeal, strMeal, strMealThumb } = props

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const toggleIngridient = () => {
    navigate(`/ingridients/${idMeal}`)
    dispatch(allIngridients(idMeal))
  }

  return (
    <>
      {
        idMeal &&
        <div className={s.cart}>
          <div className={s.image}>
            <img onClick={toggleIngridient} src={strMealThumb} alt="" />
          </div>
          <h1 onClick={toggleIngridient}>{strMeal}</h1>
        </div>
      }
    </>
  );
};

export default Area;