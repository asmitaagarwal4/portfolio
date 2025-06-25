"use client"

import type React from "react"

import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Figma,
  Terminal,
  Cloud,
  Layers,
  Zap,
  Settings,
  Users,
  TestTube,
  Workflow,
  BarChart3,
  Cpu,
} from "lucide-react"

interface Skill {
  name: string
  category: "Languages" | "Tools" | "Concepts"
  icon: React.ComponentType<{ size?: number; className?: string }>
}

interface SkillsProps {
  skills?: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  const defaultSkills: Skill[] = [
    // Languages
    { name: "JavaScript", category: "Languages", icon: Code2 },
    { name: "TypeScript", category: "Languages", icon: Code2 },
    { name: "Python", category: "Languages", icon: Code2 },
    { name: "Java", category: "Languages", icon: Code2 },

    // Tools
    { name: "React", category: "Tools", icon: Globe },
    { name: "Next.js", category: "Tools", icon: Globe },
    { name: "Node.js", category: "Tools", icon: Server },
    { name: "Docker", category: "Tools", icon: Layers },
    { name: "AWS", category: "Tools", icon: Cloud },
    { name: "Git", category: "Tools", icon: GitBranch },
    { name: "Figma", category: "Tools", icon: Figma },
    { name: "VS Code", category: "Tools", icon: Terminal },
    { name: "MongoDB", category: "Tools", icon: Database },
    { name: "PostgreSQL", category: "Tools", icon: Database },

    // Concepts
    { name: "UI/UX Design", category: "Concepts", icon: Smartphone },
    { name: "REST APIs", category: "Concepts", icon: Zap },
    { name: "GraphQL", category: "Concepts", icon: Zap },
    { name: "Microservices", category: "Concepts", icon: Settings },
    { name: "DevOps", category: "Concepts", icon: Settings },
    { name: "Agile", category: "Concepts", icon: Users },
    { name: "Testing", category: "Concepts", icon: TestTube },
    { name: "CI/CD", category: "Concepts", icon: Workflow },
    { name: "Cloud Architecture", category: "Concepts", icon: Cloud },
    { name: "Database Design", category: "Concepts", icon: Database },
    { name: "System Design", category: "Concepts", icon: Cpu },
    { name: "Performance", category: "Concepts", icon: BarChart3 },
  ]

  const skillsToDisplay = skills || defaultSkills
  const categories = ["Languages", "Tools", "Concepts"] as const

  const groupedSkills = categories.reduce(
    (acc, category) => {
      acc[category] = skillsToDisplay.filter((skill) => skill.category === category)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <div className="min-h-screen relative overflow-hidden">


      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-14">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center gap-4 sm:gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-50">Skills</h1>
            <div className="flex-1 h-0.5 bg-white/70 mt-4 max-w-xs sm:max-w-sm lg:max-w-md"></div>
            </div>
          </div>

          {/* Skills sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {categories.map((category) => (
              <div key={category} className="flex flex-col">
                {/* Category label */}
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-medium text-white text-center lg:text-left">{category}</h2>
                </div>

                {/* Skills pills */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                    {groupedSkills[category]?.map((skill, index) => {
                      const IconComponent = skill.icon
                      return (
                        <div
                          key={`${skill.name}-${index}`}
                          className="group bg-white/70 border border-gray-200 transition-all duration-300 px-4 lg:px-4 py-2 lg:py-2 rounded-xl cursor-default hover:scale-105 hover:shadow-lg transform-gpu sm:py-1.5 sm:px-3"
                          style={{
                            transformOrigin: "center center",
                          }}
                        >
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            <IconComponent
                              size={16}
                              className="text-black  transition-all duration-300 group-hover:rotate-12 transform-gpu"
                            />
                            <span className="text-black  font-medium text-xs sm:text-sm whitespace-nowrap transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
