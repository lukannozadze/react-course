/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import ProductCardTitle from "./ProductCardTitle";
import ProductCategory from "./ProductCategory";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

export const CardContext = createContext();
export const ProductCard = ({children}) =>{
return <CardContext.Provider value={{image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D'}}>
 {children}
</CardContext.Provider>

}

ProductCard.Title = ProductCardTitle
ProductCard.Image = ProductImage
ProductCard.Category = ProductCategory
ProductCard.Description = ProductDescription
ProductCard.Price = ProductPrice