import React, { ReactNode, useEffect } from "react";

interface HeaderContextProps {
  header: string;
  setHeader: (header: string) => void;
  action?: ReactNode;
  setAction: (action: ReactNode) => void;
}

const HeaderContext = React.createContext<HeaderContextProps | undefined>(
  undefined
);

export const useHeader = () => {
  const context = React.useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [header, setHeader] = React.useState("");
  const [action, setAction] = React.useState<ReactNode>(null);

  useEffect(() => {
    const localStorageHeader = localStorage.getItem("header");
    if (localStorageHeader) {
      setHeader(localStorageHeader);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("header", header);
  }, [header]);

  return (
    <HeaderContext.Provider value={{ header, setHeader, action, setAction }}>
      <div>{children}</div>
    </HeaderContext.Provider>
  );
};
