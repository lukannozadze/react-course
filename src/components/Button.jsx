import { useEffect, useState } from 'react';

export default function Button({setSum,setSumIsShown,isReset,setIsReset}) {
  
  const [count, setCount] = useState(0);

  const handleClick = ()=> {
    setCount((prev) => prev + 1);
    setSum((prev)=>prev+1)
    setSumIsShown(false);
    setIsReset(false);
  };

  useEffect(()=>{
   if(isReset){
    setCount(0);
   }
  },[isReset])

  return ( 
   <button className='btn-primary' onClick={handleClick}>
    {count}
   </button>
    
  );
}
