import { createContext, useContext } from "react";
const Context = createContext({});
const ContextProvider = ({ children }) => {
  const value = {
    init: 100,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useContextProvider = () => {
  const context = useContext(Context);
  if (Object.keys(context).length === 0) {
    throw new Error("useContext provider must be used within contextProvider" );
  }
  return context;
};
