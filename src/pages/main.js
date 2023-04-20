import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './about/about';
import Cart from './cart/cart';
import Contact from './contact/contact';
import Faqs from './faqs/faqs';
import Home from './home/home';
import { useDispatch } from 'react-redux';
import { allAreaFlag, allCategoryes, allIngridients, allProductByName,allAreaFilter } from '../redux/reduct';
import DetailProducts from './detail-products/detail-products';
import Ingridient from './ingridient/ingridient';
import AreaIngridient from './area-ingridient/area-ingridient';

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allCategoryes())
    dispatch(allAreaFlag())
    dispatch(allIngridients())
    dispatch(allAreaFilter())
    dispatch(allProductByName())
  },[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:slug' element={<DetailProducts/>}/>
        <Route path='/ingridients/:slug' element={<Ingridient/>}/>
        <Route path='/areas/:slug' element={<AreaIngridient/>}/>
      </Routes>
    </div>
  );
};

export default Main;