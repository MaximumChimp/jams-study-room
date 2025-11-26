import { useState,createContext, useContext } from "react";

const AuthContext = createContext()

export function AuthProvider({children}){

    const [isOpen,setIsOpen] = useState(false);
    const [isLogin,setIsLogin] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
        <AuthContext.Provider value={{isOpen,openModal,closeModal,isLogin,setIsLogin}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useModal = () => useContext(AuthContext);