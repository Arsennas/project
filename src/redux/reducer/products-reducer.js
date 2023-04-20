import { ALL_AREA_FLAG,ERROR,LODING, ALL_CATEGORYES,ALL_INGRIDIENT,AREA_FILTER,ADD_TO_CART_ACTION,ALL_PRODUCT_BY_NAME,DELATE_PRODUCT } from '../types'

const defaultState = {
  data: [],
  categories: [],
  cart:[],
  county:[],
  flag:[],
  product:{},
  search:{},
}

export const productReducer = (state = defaultState, action) => {
  const { payload, type } = action;
  const { data, categories,product ,county,cart,flag,categoryid,search} = state
  switch (type) {
    case ALL_CATEGORYES : {
      return{
        ...state,
        categories: payload
      }
    }
    case "FILTER_PRODUCT" : {
      return {
        ...state,
        data: payload
      }
    }
    case ALL_AREA_FLAG : {
      return{
        ...state,
        flag:payload
      }
    }
    case ALL_INGRIDIENT : {
      return{
        ...state,
        product:payload // object data 
      }
    }
    case AREA_FILTER : {
      return{
        ...state,
        county:payload
      }
    }
    case ADD_TO_CART_ACTION : {
      const check = cart.every(elem => elem.idMeal !== payload)
      if (!check) {
        alert('продук добавлен!')
      } else {
        const product = data.find(elem => elem.idMeal === payload)
        const newItem = { ...product}
        const newArr = [...cart, newItem]
        return {
          ...state,
          cart: newArr
        }
      }
      return{
        ...state,
        cart:cart
      }
    }
    case DELATE_PRODUCT : {
      const newArr = cart.filter(elem => elem.idMeal !== payload)
      return{
        ...state,
        cart:newArr
      }
    }
    case ALL_PRODUCT_BY_NAME : {
      const newArr = data.filter(elem => {
        return elem.value.toLowerCase().indexOf(payload.toLowerCase()) > -1
      })
      return{
        ...state,
        search:newArr
      }
    }
    default :
      return state
    }
  }