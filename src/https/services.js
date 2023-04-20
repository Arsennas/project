import instance from './settings'

const getCategoryes = () => {
  return instance.get('categories.php')
}
const getProductFilter = (name) => {
  return instance.get(`filter.php?c=${name}`)
}
const areaFlag = () => {
  return instance.get('list.php?a=list')
}
const ingridientsID = (id) => {
  return instance.get(`lookup.php?i=${id}`)
}
const filterArea = (country) => {
  return instance.get(`filter.php?a=${country}`)
}
const serachByName = (value) => {
  return instance.get(`search.php?f=${value}`)
}
export const services = {
  getCategoryes,
  areaFlag,
  getProductFilter,
  ingridientsID,
  filterArea,
  serachByName
}