import React, { useState } from 'react';
import s from './search.module.css'
import { useDispatch } from 'react-redux';
import { allProductByName } from '../../redux/reduct';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
  const {strMeal} = props
  const [value,setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(allProductByName(value))
    navigate(`/product/${value}`)
    setValue('')
  }
  return (
    <div className={s.main}>
      <hr style={{
        marginLeft: '180px',
        marginRight: '180px',
        color: 'white'
      }} />
      <div className={s.search}>
        <center>
          <div className={s.input}>
            <form onSubmit={handleSubmit} action="">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='search for a meal...'
              type="text" />
            <button type='submit'>🔍</button>
            </form>
          </div>
          <div className={s.pop}>
            <p>🥣 Total Meals: 285</p>
            <p>🍗 Total Ingredients: 574</p>
            <p>📸 Images: 285</p>
          </div>
        </center>
      </div>
      <hr style={{
        marginLeft: '180px',
        marginRight: '180px',
        color: 'white'
      }} />
    </div>
  );
};

export default Search;