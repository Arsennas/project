import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { allAreaFilter } from './../../redux/reduct';

const FlagItem = (props) => {

  const {strArea} = props

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const clickFlop = () => {
    navigate(`/areas/${strArea}`)
    dispatch(allAreaFilter(strArea))
  }
  
  return (
    <div className='cart'>
    <h1 onClick={clickFlop}>{strArea}</h1>
  </div>
  );
};

export default FlagItem;