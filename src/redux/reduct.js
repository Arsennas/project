import { services } from "../https/services";
import {
  allCategoryesAction,
  areaFlagAction,
  filterProductAction,
  allIngridientsAction,
  allAreaFilterAction,
} from "./action";

export const allCategoryes = () => {
  return async (dispatch) => {
    try {
      const responce = await services.getCategoryes()
      dispatch(allCategoryesAction(responce.data.categories))
    } catch (e) {
      console.log(e)
    }
  }
}
export const allProdyctFilter = (product) => {
  return async (dispatch) => {
    try {
      const response = await services.getProductFilter(product)
      dispatch(filterProductAction(response.data.meals))
    } catch (e) {
      console.log(e)
    }
  }
}
export const allAreaFlag = () => {
  return async (dispatch) => {
    try {
      const responce = await services.areaFlag()
      dispatch(areaFlagAction(responce.data.meals))
    } catch (e) {
      console.log(e)
    }
  }
}
export const allIngridients = (id) => {
  return async (dispatch) => {
    try {
      const responce = await services.ingridientsID(id)
      dispatch(allIngridientsAction(responce.data.meals[0]))
    } catch (e) {
      console.log(e)
    }
  }
}
// error 
export const allAreaFilter = (areas) => {
  return async (dispatch) => {
    try{
      const responce = await services.filterArea(areas)
      dispatch(allAreaFilterAction(responce.data.meals))
    }catch(e){
      console.log(e)
    }
  }
}
export const allProductByName = (value) => {
  return async (dispatch)  => {
    try{
      const responce = await services.serachByName(value)
      dispatch(filterProductAction(responce.data.meals))
    }catch(e){
      console.log(e)
    }
  }
}