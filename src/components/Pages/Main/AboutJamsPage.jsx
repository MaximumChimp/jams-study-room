import learningImg from "../../../assets/images/learning.svg"
import Ideas from "../../../assets/images/ideas.svg"
import InstallApps from "../../../assets/images/apps.svg"
import Global from "../../../assets/images/global.svg"
import GoalTracking from "../../../assets/images/goal-tracking.svg"
import JoinSpace from "../../../assets/images/join-space.svg"
import JoinUs from "../../../assets/images/join-us.svg"
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
            <div className="flex justify-center items-center">
            <section className="space-y-12 w-full max-w-5xl"> {/* max-w-5xl limits full width */}
                <h1 className="font-bold text-fern text-4xl text-center">What We Offer</h1>
                <ul className="flex flex-col sm:flex-row justify-center items-stretch sm:space-x-4 space-y-6 sm:space-y-0">

                {/* Study Tools & Apps */}
                <li className="flex-1 flex flex-col items-center">
                    <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img src={InstallApps} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-wild-willow rounded p-6 flex-1 flex flex-col justify-start">
                    <h2 className="text-center font-extrabold text-dell mb-2">Study Tools & Installable Apps</h2>
                    <p className="font-medium text-merino text-center">Powerful, easy-to-use study tools available as installable apps designed to help you plan, focus, and learn anytime, anywhere.</p>
                    </div>
                </li>

                {/* Global Connections */}
                <li className="flex-1 flex flex-col items-center">
                    <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img src={Global} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-fern rounded p-6 flex-1 flex flex-col justify-start">
                    <h2 className="text-center font-extrabold text-old-gold mb-2">Global Connections</h2>
                    <p className="text-merino font-medium text-center">Connect with learners around the world to share insights, exchange knowledge, and stay inspired.</p>
                    </div>
                </li>

                {/* Goal Tracking */}
                <li className="flex-1 flex flex-col items-center">
                    <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img src={GoalTracking} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-dell rounded p-6 flex-1 flex flex-col justify-start">
                    <h2 className="text-center font-extrabold text-old-gold mb-2">Goal Tracking</h2>
                    <p className="font-medium text-merino text-center">Track your progress, build habits, and stay motivated as you move toward your learning goals.</p>
                    </div>
                </li>

                {/* Join or Create a Space */}
                <li className="flex-1 flex flex-col items-center">
                    <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <img src={JoinSpace} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-old-gold rounded p-6 flex-1 flex flex-col justify-start">
                    <h2 className="text-center font-extrabold text-dell mb-2">Join or Create a Space</h2>
                    <p className="text-merino font-medium text-center">Join open Spaces or create your own to collaborate, and build meaningful learning communities.</p>
                    </div>
                </li>

                </ul>
            </section>
            </div>
           <div className="flex justify-evenly items-center flex-col-reverse sm:flex-row-reverse">
                <section className="space-y-4">
                    <h1 className="font-bold text-fern text-4xl">Join Us</h1>
                    <p className="text-gray-500 font-medium sm:w-3xl">Become part of a growing global community of learners.
                        Plan your study sessions, follow your goals, and stay inspired anytime, anywhere.</p>
                </section>
                <img src={JoinUs} alt="" className="w-sm"/>
            </div>
        </main>
    )
}

export default AboutJamsPage