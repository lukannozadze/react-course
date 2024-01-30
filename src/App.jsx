import {memo,useState} from 'react'
import Swatch from './components/Swatch';
const MemoizedSwatch = memo(Swatch);
const App = () => {
  const [appRenderIndex,setAppRenderIndex] = useState(0);
  const [color,setColor] = useState('red');
  console.log('App Rendered ' + appRenderIndex + ' times');
 return <div>
  <button onClick={()=>{setAppRenderIndex(prev=>prev+1)}}>Re-Render App</button>
  <button onClick={()=>{setColor((prev)=>prev==='red'?'blue':'red')}}>Change Color</button>
  <MemoizedSwatch color={color}/>
 </div>
 
}
export default App;
