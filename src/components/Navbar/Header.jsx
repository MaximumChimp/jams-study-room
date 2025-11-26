import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { useModal } from "../../context/AuthContext"
export default function Header(){
    const {openModal,isLogin,setIsLogin} = useModal()
    const [isOpen,setIsOpen] = useState('false')
  
    return(
        <nav className="fixed top-0 w-full bg-fern">
            <div className="h-16 flex justify-between items-center">
                {/* Logo */}
                <div className="px-3 text-merino font-bold">Logo</div>
                <FaBars className="sm:hidden text-merino mx-2" onClick={()=>{ setIsOpen(!isOpen)}}/>
                {/* Menus desktop */}
                <div className="hidden space-x-4 sm:block sm:flex ">
                    <a href="/" className="text-merino block font-medium">Home</a>
                    <a href="/about-jams" className="text-merino font-medium">About JAMS</a>
                    <a href="/who-can-join"className="text-merino font-medium" >Who Can Join</a>
                    
                </div>
                <div className="hidden sm:block space-x-4 px-3">
                    <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-dell rounded-4xl hover:bg-dell group py-1.5 px-6" 
                    onClick={()=>{
                        openModal()
                        setIsLogin(true)
                    }}>
                        <span class="w-56 h-48 rounded bg-wild-willow absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-merino transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                    </button>
                    <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-wild-willow rounded-4xl hover:bg-wild-willow group py-1.5 px-6" onClick={()=>{
                        openModal()
                        setIsLogin(false)
                    }}>
                        <span class="w-56 h-48 rounded bg-dell absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-merino transition-colors duration-300 ease-in-out group-hover:text-white">Register</span>
                    </button>
                </div>
            </div>
            {/* Menus Mobile */}
                <div className={`${isOpen? `hidden` : `block` } sm:hidden bg-merino space-x-2y-3 sm:block sm:flex`}>
                    <a href="/" className="text-gray-400 block font-medium p-2 hover:text-dell hover:bg-chalky">Home</a>
                    <a href="/about-jams" className="text-gray-400 block font-medium p-2 hover:text-dell hover:bg-chalky">About JAMS</a>
                    <a href="/who-can-join"className="text-gray-400 block font-medium p-2 hover:text-dell hover:bg-chalky">Who Can Join</a>
                    <button className="text-gray-400 block font-medium p-2 hover:text-dell hover:bg-chalky w-full text-start" onClick={()=>{openModal()
                        setIsLogin(true)
                    }}>Login</button>
                    <button className="text-gray-400 block font-medium p-2 hover:text-dell hover:bg-chalky w-full text-start" onClick={()=>{
                        openModal()
                        setIsLogin(false)
                    }}>Register</button>
                </div>
        </nav>   
    )
}
1