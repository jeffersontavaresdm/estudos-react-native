import React from "react";

export const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const valor1 = "[valor 1]";
  const valor2 = "[valor 2]";

  return (
    <AppContext.Provider value={{ valor1, valor2 }}>
      {children}
    </AppContext.Provider>
  )
}
