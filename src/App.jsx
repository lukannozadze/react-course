import useMount from "./hooks/useMount";

const App = () => {
  useMount(()=>{console.log('fire')});
 return <div></div>
};

export default App;