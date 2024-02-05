import React from 'react'
import { useContextProvider } from "../providers/Provider"
export const Header = () => {
  const {init} = useContextProvider();
  return (
    <>
    <div>Header</div>
    <p>{init}</p>
    </>
  )
}
