import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextData = {
  user: User | null;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ user: User | null }>({
    user: null,
  });

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/sessions",
      { email, password },
      { withCredentials: true }
    );
      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user });
    } catch (error: unknown) {
      if (error instanceof Error && "response" in error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        alert(axiosError.response?.data?.message || "Não foi possível entrar.");
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    
    setData({ user: null });
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");

    if (user) {
      setData({ user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
