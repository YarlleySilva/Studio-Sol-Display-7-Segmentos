import { createContext, useState } from "react";

interface IPropsContext {
  randomNumber: number | undefined;
  setRandomNumber: (value: number) => void;
  statusGeral: any;
  setStatusGeral: (value: any) => void;
}

export const AppContext = createContext<IPropsContext>({
  randomNumber: 0,
  setRandomNumber: () => {},
  statusGeral: "",
  setStatusGeral: () => {},
});

export const AppProvider = ({ children }: any) => {
  const [randomNumber, setRandomNumber] = useState<number>();
  const [statusGeral, setStatusGeral] = useState({
    StatusErrorNumber: "",
    StatusErrorNumberArray: "",
    StatusMsg: "",
    ValueInput: "",
    ValueInputArray: "",
  });

  return (
    <AppContext.Provider
      value={{ randomNumber, setRandomNumber, statusGeral, setStatusGeral }}
    >
      {children}
    </AppContext.Provider>
  );
};
