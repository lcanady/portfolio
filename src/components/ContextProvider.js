import react, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [color, setColor] = useState("#46B39D");
  const initialState = {
    color: "#46B39D",
    setColor,
    color,
  };

  return (
    <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
  );
}
