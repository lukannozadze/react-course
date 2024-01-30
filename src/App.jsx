import {useState,useMemo} from 'react'
const App = () => {
  const [number,setNumber] = useState(0);
  const [clicked,setClicked] = useState(false);
  const doubledNumber = useMemo(()=>{
    return multiplied(number)
  },[number]);
  const style={
    backgroundColor:clicked?'black':'white',
    color:clicked?'white':'black'
  }
  const inputChangeHandler = (event) =>{
     setNumber(event.target.value);
  }
  
  const buttonClickHandler = () =>{
      setClicked(!clicked);
  }

  function multiplied(num){
    for(let i=0; i<1000000000;i++){}
    return num*2;
  }
 return (<>
 <input onChange={inputChangeHandler} type="number"></input>
 <button onClick={buttonClickHandler}>Change Theme</button>
 <p style={style}>{doubledNumber}</p>
 </>)
}
export default App;
