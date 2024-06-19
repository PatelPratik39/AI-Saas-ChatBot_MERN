import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type User = {
    name: string;
    email: string;
};
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // once login functionality ready
    useEffect(() => {
        // fetch if the user's coockie are valid then skip login
    }, []);

    const login = async (email: string, password: string) => { }
    const signup = async (name: string, email: string, password: string) => { }
    const logout = async () => { }

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// export const useAuth = () => useContext(AuthContext);
export const useAuth = (): UserAuth => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
