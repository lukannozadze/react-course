import {useState} from "react"
import { ContextProvider,useContextProvider } from "./providers/Provider";
import Button from "./components/Button";

function App() {
  const [sumIsShown,setSumIsShown] = useState(false);
  const [isReset,setIsReset] = useState(false);
  const mainBtnValueObj = useContextProvider();


  const buttons = Array.from({ length: 8 }).map((_, idx) => (
    <Button isReset={isReset} setIsReset={setIsReset} setSumIsShown={setSumIsShown} setSum={mainBtnValueObj.setSum} key={idx} />
  ));

  const mainBtnClickHandler  = () =>{
    setSumIsShown(true);
  }

  const resetClickHandler = () =>{
    mainBtnValueObj.setSum(0);
    setIsReset(true);
  }
  return (
    <>
      <div className="app-container">
        <button className="btn-main" onClick={mainBtnClickHandler}>Main Button</button>
        <button className="btn-reset"  onClick={resetClickHandler}>Reset</button>
        {sumIsShown && <p className="score">{'SUM: ' + mainBtnValueObj.sum}</p>}
        <div className="btn-container">{buttons}</div>
      </div>
    </>
  );
}

export default function WithProvider() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}
