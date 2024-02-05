import React from 'react'
import {useContextProvider} from "../providers/Provider"
export const Content = () => {
  const {init} = useContextProvider();
  return (
    <>
    <div>Content</div>
    <p>{init}</p>
    </>
  )
}
