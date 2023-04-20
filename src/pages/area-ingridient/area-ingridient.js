import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/list/list';
import Area from '../area/area';
import { useParams } from 'react-router-dom';
import s from './areas.module.css'
import Header from '../../components/header/header';

const AreaIngridient = () => {

  const { county } = useSelector(state => state.productReducer)

  const { slug } = useParams()

  const contries = county && <List items={county}
    renderItem={(item) => <Area key={item.idMeal}
      {...item} />} />
  return (
    <>
      {
        county &&
        <div className={s.main}>
          <Header />
          <center>
            <h1>{slug}</h1>
          </center>
          <div className={s.wrapper}>
            {contries}
          </div>
        </div>
      }
    </>
  );
};

export default AreaIngridient;