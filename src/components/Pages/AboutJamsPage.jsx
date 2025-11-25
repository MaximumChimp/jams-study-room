import learningImg from "../../assets/images/learning.svg"
import Ideas from "../../assets/images/ideas.svg"
import Clock from "../../assets/images/clock.svg"
function AboutJamsPage(){
    return(
        <main className="mt-16 flex justify-center items-center flex-col p-4 space-y-12 ">
            <div className="">
                <p className="text-left text-gray-500  font-medium sm:w-3xl"><span className="text-wild-willow font-bold">JAMS</span> connects learners around the world to share stories, knowledge, 
                and experiences. Stay focused, organize your study sessions, and grow together no matter where you are.</p>
            </div>
            <div className="flex justify-evenly items-center flex-col-reverse sm:flex-row">
                <section className="space-y-4 ">
                    <h1 className="font-bold text-fern text-4xl">Our Mission</h1>
                    <p className="text-gray-500 font-medium sm:w-3xl"><span className="font-bold text-wild-willow">JAMS</span> exists to make learning accessible, simple, and empowering for everyone. 
                    Whether you're studying in school, pursuing postgraduate studies, or learning for personal growth, JAMS helps you stay motivated, organized, and connected.</p>
                </section>
                <img src={learningImg} alt="" className="w-sm"/>
            </div>
            <div className="flex justify-evenly items-center flex-col-reverse sm:flex-row-reverse">
                <section className="space-y-4">
                    <h1 className="font-bold text-fern text-4xl">Our Story</h1>
                    <p className="text-gray-500 font-medium sm:w-3xl"><span className="font-bold text-wild-willow">JAMS</span> started with a simple realization that
m                   many learners struggle to stay consistent and inspired, especially when studying alone. Traditional tools aren’t built for focus, motivation, or community.</p>
                    <p className="text-gray-500 font-medium sm:w-3xl">
                        To solve this <span className="font-bold text-wild-willow">JAMS</span> was created as a space for learners to plan, track, and grow, while connecting with others who share the same passion for knowledge.
                    </p>
                </section>
                <img src={Ideas} alt="" className="w-sm"/>
            </div>
             <div className="flex justify-evenly items-center">
                <section className="space-y-4 ">
                    <h1 className="font-bold text-fern text-4xl text-center">What We Offer</h1>
                    <ul className="flex justify-center items-center flex-col sm:flex-row space-x-4 space-y-4">
                        <li className="flex justify-center items-center flex-col">
                            <img src={Clock} alt="" width={100} />
                            <div className="bg-wild-willow rounded p-4">
                                <h2 className="text-center font-bold text-merino">Study Tools</h2>
                            <p>Install Study Tools to help you study</p>
                            </div>
                        </li>
                         <li className="flex justify-center items-center flex-col">
                            <img src={Clock} alt="" width={100} />
                            <div className="bg-wild-willow rounded p-4">
                                <h2 className="text-center font-bold text-merino">Study Tools</h2>
                            <p>Install Study Tools to help you study</p>
                            </div>
                        </li>
                         <li className="flex justify-center items-center flex-col">
                            <img src={Clock} alt="" width={100} />
                            <div className="bg-wild-willow rounded p-4">
                                <h2 className="text-center font-bold text-merino">Study Tools</h2>
                            <p>Install Study Tools to help you study</p>
                            </div>
                        </li>
                         <li className="flex justify-center items-center flex-col">
                            <img src={Clock} alt="" width={100} />
                            <div className="bg-wild-willow rounded p-4">
                                <h2 className="text-center font-bold text-merino">Study Tools</h2>
                            <p>Install Study Tools to help you study</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default AboutJamsPage