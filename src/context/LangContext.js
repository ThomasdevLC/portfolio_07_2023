import React, { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [switchLang, setSwitchLang] = useState("fr");

  return (
    <LangContext.Provider value={{ switchLang, setSwitchLang }}>
      {children}
    </LangContext.Provider>
  );
};
