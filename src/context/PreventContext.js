import React, { createContext, useState, useEffect } from "react";
import getWindowWidth from "../utils/widthWatcher";

export const PreventContext = createContext();

export const PreventProvider = ({ children }) => {
  const [preventAnim, setPreventAnim] = useState(null);

  useEffect(() => {
    getWindowWidth() < 1470 ? setPreventAnim(true) : setPreventAnim(null);
  }, []);

  return (
    <PreventContext.Provider value={{ preventAnim, setPreventAnim }}>
      {children}
    </PreventContext.Provider>
  );
};
