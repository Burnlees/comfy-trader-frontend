import { createContext, ReactNode, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

type IDTokenClaims = {
  sub: string;
  name: string;
  email: string;
  preferred_username?: string;
  iss: string;
  exp: number;
};

type User = {
  userId: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedToken = localStorage.getItem("idToken");
    if (storedToken) {
      const decodedToken: IDTokenClaims = jwtDecode(storedToken);
      return {
        userId: decodedToken.sub,
        email: decodedToken.email,
      };
    }
    return null;
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
