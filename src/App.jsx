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
// import {useEffect,useState} from 'react'
// function App () {
//   const [data,setData] = useState([]);

// //executes only on initial state
// useEffect(()=>{
//  alert('hello world')
// },[])

// //this useEffect only executes on first render and every time when data state is changed
// useEffect(()=>{
//   alert('hello world')
//  },[data])

// //without dependency array as a parameter this code executes every time this component is rendered
// useEffect(()=>{
//   alert('hello world')
//  })

//  //without dependency parameter this code will cause infinite loop
//  //1. useEffect executes on any re render of this component
//  //2. setData inside useEffect triggers another re-render, so infinite loop
//  useEffect(()=>{
//   fetch('foo').then((f)=>setData(f))
//  })
// //to avoid infinite loop in useEffect, just pass empty dependency array as a parameter,so react knows it will render only one time
// //on componentDidMount cycle of component lifetime(initial render of component)

// useEffect(()=>{
//   fetch('foo').then((f)=>setData(f))
//  },[])

// //only executes when component destroys(componentWillUnMount)
// useEffect(()=>{

//   return () =>{alert('goodbye')}
//  })

// return (
//   <>

//   </>
// )
// }
// export default App;

// import { useContext } from "react";
// import { createContext } from "react";
// const moods = {
//   happy: 1,
//   sad: 0,
// };

// const MoodsContext = createContext(moods);
// function App() {
//   return <>  
//    <MoodsContext.Provider value={moods}>
//     {/* child components who will use moods object */}
//     <AppChild/>
//    </MoodsContext.Provider>
//   </>;
// }
// export default App;

// const AppChild = () =>{
//   const mood = useContext(MoodsContext);
//   console.log(mood);
// return <h1>I'am app's child</h1>  
// }

// import {useRef} from 'react'
// // //like useState in useRef you can save state but unlike useState useRef does not make component re-render on it's change
// // function App(){
// //   const count = useRef(0);
// // return <h1 onClick={()=>{count.current++}}>Hello World</h1>
// // }
// // export default App;


// //main use case of useRef is to reference it html elements and then grab it into js code
// function App(){
//   const headerRef = useRef(null);
// return <h1 onClick={()=>console.log(headerRef.current.textContent)} ref={headerRef}>Hello World</h1>
// }
// export default App;
const reducer = (state,action) =>{
 switch(action.type){
  case 'increment': return state + 1;
  case 'decrement': return state - 1;
  default: console.log('wrong')
 }
}
import { useReducer } from "react";
function App(){
const [res,dispatch] = useReducer(reducer,0);
console.log(res);
return (
  <>
  <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
  <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
  <p>{res.count}</p>
  </>
)
}
export default App;