import { Content } from "./components/Content";
import { Header } from "./components/Header";
import useMount from "./hooks/useMount";
import ContextProvider  from "./providers/Provider";
const App = () => {
 
 return <div>
  <Header/>
  <Content/>
 </div>
};


export default function WithProvider(){
  return <ContextProvider>
    <App/>
  </ContextProvider>
}