import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useMemo,
} from "react";

interface AppContextData {
  isMenuOpen: boolean;
  toggleMenu: VoidFunction;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const useApp = () => useContext(AppContext);

export const AppContextProvider = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((state) => !state);

  const value = useMemo(() => ({ isMenuOpen, toggleMenu }), [isMenuOpen]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
