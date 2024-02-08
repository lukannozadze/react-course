import { useContext } from "react"
import { CardContext } from "./ProductCard"

/* eslint-disable react/prop-types */
function ProductImage() {
    const {image} = useContext(CardContext)
  return (
    <img src={image}/>
  )
}

export default ProductImage