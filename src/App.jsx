import { useState,useDebugValue } from "react";
import { useLayoutEffect } from "react";


function useDisplayWord(){
const [word,setWord] = useState(null)

return [word,setWord];
}


function App() {
const [word,setWord] = useDisplayWord();
useDebugValue(word ? 'Word is set' : 'Word is not set');

}

export default App;