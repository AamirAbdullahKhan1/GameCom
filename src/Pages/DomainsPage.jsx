"use client"

import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Code,
  Camera,
  Palette,
  Gamepad2,
  Megaphone,
  Users,
  Calendar,
  Award,
  Target,
  Zap,
  BookOpen,
  Briefcase,
  Star,
  ChevronRight,
  Trophy,
} from "lucide-react"

import Navigation from "../Components/Navigation"
import AnimatedBackground from "../components/AnimatedBackground"
import TiltCard from "../components/ReactBits/TiltCard"
import AnimatedButton from "../components/ReactBits/AnimatedButton"
import GlowingCard from "../components/ReactBits/GlowingCard"
import CountUpAnimation from "../components/ReactBits/CountUpAnimation"

const DomainsPage = () => {
  const domains = [
    {
      icon: Code,
      name: "Technical Domain",
      description:
        "Master cutting-edge technologies and build the future of software development with hands-on experience in modern frameworks and tools.",
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: [
        "React & Next.js",
        "Node.js & Express",
        "Python & Django",
        "AI/ML",
        "Cloud Computing",
        "Mobile Development",
      ],
      projects: ["Web Applications", "Mobile Apps", "AI Solutions", "Cloud Systems"],
      opportunities: [
        "Internships at Tech Giants",
        "Open Source Contributions",
        "Hackathon Participation",
        "Industry Mentorship",
      ],
      members: 15,
      events: 8,
      achievements: ["5+ Hackathon Wins", "10+ Published Apps", "Industry Partnerships"],
    },
    {
      icon: Camera,
      name: "Media Domain",
      description:
        "Create stunning visual narratives and professional content that captures moments and tells compelling stories through the lens.",
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      image:
        "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: [
        "Professional Photography",
        "Video Production",
        "Motion Graphics",
        "Color Grading",
        "Audio Engineering",
        "Live Streaming",
      ],
      projects: ["Event Coverage", "Promotional Videos", "Motion Graphics", "Photography"],
      opportunities: ["Media Agency Internships", "Freelance Projects", "Event Documentation", "Brand Collaborations"],
      members: 8,
      events: 12,
      achievements: ["Award-winning Videos", "Brand Partnerships", "Event Coverage"],
    },
    {
      icon: Palette,
      name: "Design Domain",
      description:
        "Craft beautiful and intuitive digital experiences that delight users and solve real-world problems through thoughtful design.",
      color: "from-green-500 to-teal-500",
      glowColor: "green",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: [
        "UI/UX Design",
        "Figma & Adobe Suite",
        "Prototyping",
        "User Research",
        "Brand Identity",
        "Design Systems",
      ],
      projects: ["UI/UX Design", "Brand Identity", "Digital Art", "Prototypes"],
      opportunities: ["Design Internships", "Client Projects", "Design Competitions", "Portfolio Reviews"],
      members: 10,
      events: 6,
      achievements: ["Design Awards", "Client Success Stories", "Portfolio Showcases"],
    },
    {
      icon: Gamepad2,
      name: "Game Development",
      description:
        "Build immersive gaming experiences and interactive entertainment that pushes the boundaries of creativity and technology.",
      color: "from-orange-500 to-red-500",
      glowColor: "red",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: [
        "Unity & Unreal Engine",
        "C# & C++",
        "3D Modeling",
        "Game Physics",
        "VR/AR Development",
        "Game Publishing",
      ],
      projects: ["Mobile Games", "PC Games", "VR Experiences", "Game Engines"],
      opportunities: ["Game Studio Internships", "Indie Game Publishing", "Game Jams", "Industry Networking"],
      members: 7,
      events: 4,
      achievements: ["Published Games", "Game Jam Victories", "Industry Recognition"],
    },
    {
      icon: Megaphone,
      name: "Public Relations",
      description:
        "Build meaningful connections and amplify our club's impact through strategic communication and community engagement.",
      color: "from-indigo-500 to-purple-500",
      glowColor: "purple",
      image:
        "https://images.unsplash.com/photo-1709715357549-f2d587846ee1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: [
        "Strategic Communication",
        "Event Management",
        "Social Media Marketing",
        "Partnership Development",
        "Content Strategy",
        "Community Building",
      ],
      projects: ["Industry Events", "Partnerships", "Social Media", "Networking"],
      opportunities: ["Corporate Partnerships", "Event Planning", "Media Relations", "Brand Management"],
      members: 5,
      events: 10,
      achievements: ["Industry Partnerships", "Successful Events", "Community Growth"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatedBackground />
      <Navigation />

      {/* Header Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <AnimatedButton variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </AnimatedButton>
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Domains
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover your passion and build expertise in cutting-edge technologies. Each domain offers specialized
              training, mentorship, and real-world project experience.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Grid */}
      <section className="relative z-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {domains.map((domain, index) => (
              <TiltCard key={index} className="w-full">
                <GlowingCard
                  glowColor={domain.glowColor}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={domain.image || "/placeholder.svg"}
                        alt={domain.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-2xl flex items-center justify-center mb-4`}
                        >
                          <domain.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{domain.name}</h2>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <CountUpAnimation end={domain.members} /> Members
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <CountUpAnimation end={domain.events} /> Events
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 lg:p-8">
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{domain.description}</p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-400" />
                          Key Skills You'll Learn
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {domain.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-center gap-2 text-sm text-gray-400 bg-gray-700/30 rounded-lg p-2"
                            >
                              <ChevronRight className="w-3 h-3 text-blue-400" />
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-green-400" />
                          Career Opportunities
                        </h3>
                        <div className="space-y-2">
                          {domain.opportunities.map((opportunity, oppIndex) => (
                            <div key={oppIndex} className="flex items-center gap-2 text-sm text-gray-400">
                              <Star className="w-3 h-3 text-yellow-400" />
                              {opportunity}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-purple-400" />
                          Recent Achievements
                        </h3>
                        <div className="space-y-2">
                          {domain.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2 text-sm text-gray-400">
                              <Trophy className="w-3 h-3 text-orange-400" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link to="/register" className="flex-1">
                          <AnimatedButton className="w-full">
                            Join This Domain
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                          </AnimatedButton>
                        </Link>
                        
                      </div>
                    </div>
                  </div>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Choose your domain and begin building the skills that will define your future in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <AnimatedButton size="lg">
                Join GameCom Today
                <Zap className="w-5 h-5" />
              </AnimatedButton>
            </Link>
            <Link to="/">
              <AnimatedButton variant="secondary" size="lg">
                Explore More
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DomainsPage
