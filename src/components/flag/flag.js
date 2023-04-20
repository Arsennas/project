import React from 'react';
import List from '../list/list';
import { useSelector } from 'react-redux';
import FlagItem from '../flag-item/flag-item';
import s from './flag.module.css'

const Flag = () => {

  const {flag} = useSelector(state => state.productReducer)

  const flags = flag && <List items={flag} 
  renderItem={(item) => <FlagItem key={item.idMeal} {...item}/>}/>
  
  return (
    <>
    <center><h1>Countries</h1></center>
    <div className={s.wrapper}>
      {flags}
    </div>
      </>
  );
};

export default Flag;