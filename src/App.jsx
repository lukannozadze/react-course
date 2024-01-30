import {useState,useMemo, useCallback} from 'react'
const App = () => {
  const [number,setNumber] = useState(0);
  const [clicked,setClicked] = useState(false);
  const doubledNumber = useCallback((coefficient)=>{
    return multiplied(number,coefficient)
  },[number]);

  const style=useMemo(()=>{

    return {backgroundColor:clicked?'black':'white',
    color:clicked?'white':'black'}
  },[clicked])

  const inputChangeHandler = (event) =>{
     setNumber(event.target.value);
  }
  
  const buttonClickHandler = () =>{
      setClicked(!clicked);
  }

  function multiplied(num,coefficient){
    for(let i=0; i<1000000000;i++){}
    return num*coefficient;
  }
 return (<>
 <input onChange={inputChangeHandler} type="number"></input>
 <button onClick={buttonClickHandler}>Change Theme</button>
 <p style={style}>{doubledNumber(5)}</p>
 </>)
}
export default App;
