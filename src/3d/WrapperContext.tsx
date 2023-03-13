import React, { createContext, useContext, useState } from 'react';

interface WrapperContextProps {
  toggleRotate: () => void;
  rotate: boolean;
}

export const WrapperContext = createContext<WrapperContextProps>({} as never);

export const WrapperProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [rotate, setRotate] = useState<boolean>(true);
  const toggleRotate = () => {
    setRotate((value) => !value);
  };

  return (
    <WrapperContext.Provider value={{ rotate, toggleRotate }}>{children}</WrapperContext.Provider>
  );
};

export const useWrapper = () => useContext(WrapperContext);
