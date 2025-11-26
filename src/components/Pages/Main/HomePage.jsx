import React from "react"
import videoCall from "../../../assets/images/video-call.svg"

function HomePage(){
    return(
       <main className="p-4 min-h-screen flex justify-center items-center bg-gradient-to-br from-[#71BC78] to-white overflow-hidden ">
            <div className="flex flex-col justify-evenly items-center sm:flex-row">
                <div className="flex justify-center items-center flex-col space-y-3 mt-16 p-4 sm:mt-0 sm:p-0">
                    <h1 className="font-bold text-3xl text-center bg-gradient-to-r from-[#71BC78] to-[#436821] bg-clip-text text-transparent">
                        Made By Student, Built For Students.
                    </h1>

                    <p className="max-w-3xl text-center text-md text-dell font-medium p-2">
                        <span className="font-bold text-dell">JAMS</span> connects learners around the world to share stories, knowledge, and experiences. 
                        Stay focused, organize your study sessions, and grow together no matter where you are
                    </p>
                    <button className="bg-dell text-merino font-medium px-6 py-2 rounded-4xl">
                        Get Started
                    </button>
                </div>

                <img src={videoCall} alt="" className="w-2xs sm:w-2xl" />
            </div>
        </main>

    )
}
export default HomePage