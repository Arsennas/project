import { 
  ALL_CATEGORYES,
  ALL_AREA_FLAG ,
  ALL_INGRIDIENT,
  AREA_FILTER,
  ADD_TO_CART_ACTION,
  DELATE_PRODUCT,
  ALL_PRODUCT_BY_NAME,
  ERROR,
  LODING
} from "./types"

export const allCategoryesAction = (categories) => {
  return{
    type: ALL_CATEGORYES,
    payload:categories
  }
}
export const areaFlagAction = (meals) => {
  return{
    type:ALL_AREA_FLAG,
    payload:meals
  }
}

export const filterProductAction = (data) => {
  return {
    type: 'FILTER_PRODUCT',
    payload: data
  }
}
export const allIngridientsAction = (meals) => {
  return{
    type:ALL_INGRIDIENT,
    payload:meals
  }
}
export const allAreaFilterAction = (meals) => {
  return{
    type:AREA_FILTER,
    payload:meals
  }
} 
export const addToCartAction = (idMeal) => {
  return{
    type:ADD_TO_CART_ACTION,
    payload:idMeal
  }
}
export const delateProductAction = (idMeal) => {
  return{
    type:DELATE_PRODUCT,
    payload:idMeal
  }
}
export const allProductByNameAction = (strMeal) => {
  return{
    type: ALL_PRODUCT_BY_NAME,
    payload:strMeal
  }
}