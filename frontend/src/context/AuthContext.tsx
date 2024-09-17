import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    sessionStorage.getItem("isAuthenticated") === "true"
  );

  const login = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("isAuthenticated", "true"); // Guarda en sessionStorage
  };
  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.setItem("isAuthenticated", "false"); // Guarda en sessionStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
