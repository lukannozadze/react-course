const Button = ({children,onSmash}) =>{
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  )
}


function App() {
  const smashHandler = ()=>{
  console.log('Smashed');
  }
 return <>
  <Button onSmash={smashHandler}></Button>
 </>
}

export default App;
