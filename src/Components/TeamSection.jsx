"use client"
import { Crown, Linkedin } from "lucide-react"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Rahul Kumar",
      role: "President",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Leadership",
      linkedin: "https://linkedin.com/in/rahul-kumar",
      bio: "Leading GameCom with vision and passion for innovation",
    },
    {
      name: "Priya Singh",
      role: "Vice President",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Leadership",
      linkedin: "https://linkedin.com/in/priya-singh",
      bio: "Driving strategic initiatives and member engagement",
    },
    {
      name: "Arjun Mehta",
      role: "Technical Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Technical",
      linkedin: "https://linkedin.com/in/arjun-mehta",
      bio: "Full-stack developer with expertise in modern web technologies",
    },
    {
      name: "Sneha Patel",
      role: "Design Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Design",
      linkedin: "https://linkedin.com/in/sneha-patel",
      bio: "Creating beautiful user experiences and visual identities",
    },
    {
      name: "Vikram Shah",
      role: "Game Dev Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Game Dev",
      linkedin: "https://linkedin.com/in/vikram-shah",
      bio: "Building immersive games with Unity and Unreal Engine",
    },
    {
      name: "Ananya Gupta",
      role: "Media Head",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Media",
      linkedin: "https://linkedin.com/in/ananya-gupta",
      bio: "Capturing moments and creating compelling visual stories",
    },
    {
      name: "Karthik Raj",
      role: "PR Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "PR",
      linkedin: "https://linkedin.com/in/karthik-raj",
      bio: "Building industry connections and partnerships",
    },
    {
      name: "Divya Sharma",
      role: "Creative Director",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Creative",
      linkedin: "https://linkedin.com/in/divya-sharma",
      bio: "Orchestrating creative campaigns and brand experiences",
    },
  ]

  const handleLinkedInClick = (linkedinUrl) => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="team" className="relative z-10 py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            The passionate leaders and innovators driving GameCom's mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="relative mb-4">
                <div className="relative cursor-pointer" onClick={() => handleLinkedInClick(member.linkedin)}>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-blue-400/50 group-hover:border-blue-400 transition-all duration-300 object-cover"
                  />
                  {/* LinkedIn overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium mb-2 text-sm sm:text-base">{member.role}</p>
              <span className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm mb-3">
                {member.domain}
              </span>

              {/* Bio text */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.bio}
              </p>

              {/* LinkedIn button */}
              <button
                onClick={() => handleLinkedInClick(member.linkedin)}
                className="mt-3 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm opacity-0 group-hover:opacity-100 duration-300"
              >
                <Linkedin className="w-4 h-4" />
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
