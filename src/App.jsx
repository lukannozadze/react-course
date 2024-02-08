/* eslint-disable react/no-unescaped-entities */

import {ProductCard} from "./components/ProductCard";
import ContextProvider  from "./providers/Provider";
const App = () => {
 
 return <ProductCard>
      <ProductCard.Title>Nike Air</ProductCard.Title>
      <ProductCard.Image/>
      <ProductCard.Category>Men's Shoes</ProductCard.Category>
      <ProductCard.Description>Bold, eye-catching and all about the AIR</ProductCard.Description>
      <ProductCard.Price>$699.99</ProductCard.Price>
     </ProductCard>
};



export default function WithProvider(){
  return <ContextProvider>
    <App/>
  </ContextProvider>
}