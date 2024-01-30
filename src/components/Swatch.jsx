import {useEffect} from 'react'

const Swatch = ({color}) =>{
  
  console.log('Swatch Rendered');
return <div style={{width:'100px',height:'100px', backgroundColor:color}}></div>
}
export default Swatch;