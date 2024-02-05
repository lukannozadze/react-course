import { useEffect,useRef } from "react";
function useMount(callback){
  const firstRender = useRef(true);
  useEffect(()=>{
       if(firstRender.current){
        callback();
        firstRender.current = false;
       }
  },[])

}
export default useMount;