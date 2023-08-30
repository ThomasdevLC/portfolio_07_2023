import { useLocation } from "react-router-dom";

const usePathPages = () => {
  const location = useLocation();
  return location.pathname !== "/";
};

export default usePathPages;
