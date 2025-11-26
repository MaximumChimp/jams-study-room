import React from "react"

function WhoCanJoinPage() {
  return (
    <main className="mt-16 flex flex-col items-center p-4 space-y-12">
      
      {/* Hero / Tagline */}
      <section className="text-center max-w-3xl space-y-4">
        <h1 className="font-bold text-fern text-4xl">Who Can Join</h1>
        <p className="text-gray-500 font-medium">
          <span className="text-wild-willow font-bold">JAMS</span> connects learners from all backgrounds and levels. 
          No matter your experience or goals, there’s a Space for you here.
        </p>
      </section>

      {/* Learner Types */}
      <section className="flex flex-col sm:flex-row justify-center items-stretch sm:space-x-6 space-y-6 sm:space-y-0 max-w-5xl w-full">
        
        {/* Learners at Any Level */}
        <div className="flex-1 bg-wild-willow rounded p-6 flex flex-col justify-start">
          <h2 className="font-extrabold text-fern text-xl mb-2 text-center">Students</h2>
          <p className="text-merino text-center font-medium">
            Plan your study sessions, track your goals, and connect with others to enhance your learning experience.
          </p>
        </div>

        {/* Lifelong Learners */}
        <div className="flex-1 bg-fern rounded p-6 flex flex-col justify-start">
          <h2 className="font-extrabold text-old-gold text-xl mb-2 text-center">Lifelong Learners</h2>
          <p className="text-merino text-center font-medium">
            Whether learning for personal growth, skill development, or curiosity, JAMS is for anyone passionate about learning.
          </p>
        </div>

        {/* Professionals & Upskillers */}
        <div className="flex-1 bg-dell rounded p-6 flex flex-col justify-start">
          <h2 className="font-extrabold text-old-gold text-xl mb-2 text-center">Professionals & Upskillers</h2>
          <p className="text-merino text-center font-medium">
            Career-focused learners looking to improve skills or gain certifications can use JAMS to stay consistent and organized.
          </p>
        </div>

        {/* Inclusive & Global */}
        <div className="flex-1 bg-old-gold rounded p-6 flex flex-col justify-start">
          <h2 className="font-extrabold text-dell text-xl mb-2 text-center">Inclusive & Global</h2>
          <p className="text-merino text-center font-medium">
            Everyone is welcome regardless of age, background, or location. Join a global community of learners who share your passion for knowledge and growth.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl text-center">
        <p className="text-gray-500 font-medium text-lg">
          No matter who you are or where you are, <span className="text-wild-willow font-bold">JAMS</span> has a Space for you. Join today and start your learning journey.
        </p>
      </section>

    </main>
  )
}

export default WhoCanJoinPage
