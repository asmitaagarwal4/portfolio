import { Button } from "@/components/ui/button"
import { Github , SquareArrowOutUpRight } from 'lucide-react';


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A modern web application built with React and TypeScript",
      status: "active",
      color: "bg-slate-600",
      github: "https://github.com/example/project-alpha",
  link: "https://project-alpha.example.com"
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Mobile-first design system and component library",
      status: "completed",
      color: "bg-slate-700",
      github: "https://github.com/example/project-alpha",
  link: "https://project-alpha.example.com"
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "AI-powered analytics dashboard with real-time insights",
      status: "in-progress",
      color: "bg-slate-500",
      github: "https://github.com/example/project-alpha",
  link: "https://project-alpha.example.com"
    },
    {
      id: 4,
      title: "Project Delta",
      description: "E-commerce platform with advanced search capabilities",
      status: "planning",
      color: "bg-slate-800",
      github: "https://github.com/example/project-alpha",
  link: "https://project-alpha.example.com"
    },
  ]

  return (
    <div className="min-h-screen box-border relative overflow-hidden">

      {/* Main content */}
      <div className="relative z-10 box-border container mx-auto px-6 py-6 ">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-2">
            <h1 className="text-6xl font-bold text-blue-50 tracking-tight">Projects</h1>
            {/* <div className="flex-1 mt-4 mr-6 h-px bg-white"></div> */}
            <div className="flex-1 h-0.5 bg-white/70 mt-4 max-w-xs sm:max-w-sm lg:max-w-md"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 box-border lg:grid-cols-2 gap-8 max-w-6xl">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group ${index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-12"}`}
            >
              {/* Project Card */}
              <div className=" backdrop-blur-sm  border border-white rounded-2xl p-6 hover:scale-105  transition-all duration-300">
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        project.status === "active"
                          ? "bg-green-400"
                          : project.status === "completed"
                            ? "bg-blue-400"
                            : project.status === "in-progress"
                              ? "bg-yellow-400"
                              : "bg-gray-400"
                      }`}
                    ></div>
                    <span className="text-white/60 text-sm capitalize">{project.status.replace("-", " ")}</span>
                  </div>

                  <div className="flex items-center gap-3  justify-center">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {/* <img src={linkIcon} alt="Link" className="w-6 h-6 hover:scale-110 transition-transform" /> */}
                        <SquareArrowOutUpRight size={24} className="text-white hover:scale-110 transition-transform" />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto">
                      {/* <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform" /> */}
                        <Github size={24} className="text-white  hover:scale-110 transition-transform" />   
                    </a>
                  </div>
                </div>

                {/* Project content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </div>

                {/* Bottom indicators */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-white/60">View all projects</span>
            <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

