import { useContext } from "react";
import { AppContext } from "../../context";

const useAppContext = () => {
  const context = useContext(AppContext);

  const { randomNumber, setRandomNumber, statusGeral, setStatusGeral } =
    context;

  return {
    randomNumber,
    setRandomNumber,
    statusGeral,
    setStatusGeral,
  };
};

export default useAppContext;
