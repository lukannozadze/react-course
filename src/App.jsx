//1. useState

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >Increment</button>
//       <h1>{count}</h1>
//     </>
//   );
// }

// export default App;

//2. useEffect
import {useEffect,useState} from 'react'
function App () {
  const [data,setData] = useState([]);

//executes only on initial state
useEffect(()=>{
 alert('hello world')
},[])

//this useEffect only executes on first render and every time when data state is changed
useEffect(()=>{
  alert('hello world')
 },[data])

//without dependency array as a parameter this code executes every time this component is rendered
useEffect(()=>{
  alert('hello world')
 })

 //without dependency parameter this code will cause infinite loop
 //1. useEffect executes on any re render of this component
 //2. setData inside useEffect triggers another re-render, so infinite loop 
 useEffect(()=>{
  fetch('foo').then((f)=>setData(f))
 })
//to avoid infinite loop in useEffect, just pass empty dependency array as a parameter,so react knows it will render only one time 
//on componentDidMount cycle of component lifetime(initial render of component)

useEffect(()=>{
  fetch('foo').then((f)=>setData(f))
 },[])

//only executes when component destroys(componentWillUnMount)
useEffect(()=>{
  
  return () =>{alert('goodbye')}
 })


return (
  <>
  
  </>
)
}
export default App;