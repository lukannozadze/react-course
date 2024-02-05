import Button from "./components/Button";
const App = () => {
  return  <div>
   <Button onClick={()=>{console.log('App Button')}} text='App Button'/>
  </div>
 
}
export default App;
