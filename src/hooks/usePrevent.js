import { useContext, useEffect } from "react";
import PreventContext from "../context/PreventContext";

const usePrevent = (data) => {
  const { handlePrevent } = useContext(PreventContext);

  useEffect(() => {
    handlePrevent(data);
  }, [handlePrevent, data]);
};

export default usePrevent;
