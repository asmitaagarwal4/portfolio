"use client"

import { useState } from "react"
import { Cloud, Code, Database, Server, Palette, Globe, Shield, Cpu } from "lucide-react"

const badges = [
  { name: "AWS Certified", url: "#", category: "Cloud", icon: Cloud },
  { name: "Azure Expert", url: "#", category: "Cloud", icon: Cloud },
  { name: "Google Cloud", url: "#", category: "Cloud", icon: Cloud },
  { name: "React Developer", url: "#", category: "Frontend", icon: Code },
  { name: "Vue.js Expert", url: "#", category: "Frontend", icon: Code },
  { name: "Angular Pro", url: "#", category: "Frontend", icon: Code },
  { name: "Node.js Expert", url: "#", category: "Backend", icon: Server },
  { name: "Python Django", url: "#", category: "Backend", icon: Server },
  { name: "Ruby on Rails", url: "#", category: "Backend", icon: Server },
  { name: "MongoDB Pro", url: "#", category: "Database", icon: Database },
  { name: "PostgreSQL", url: "#", category: "Database", icon: Database },
  { name: "MySQL Expert", url: "#", category: "Database", icon: Database },
  { name: "Docker Certified", url: "#", category: "DevOps", icon: Cpu },
  { name: "Kubernetes", url: "#", category: "DevOps", icon: Cpu },
  { name: "Jenkins Pro", url: "#", category: "DevOps", icon: Cpu },
  { name: "Tailwind CSS", url: "#", category: "Design", icon: Palette },
  { name: "Figma Expert", url: "#", category: "Design", icon: Palette },
  { name: "Adobe Creative", url: "#", category: "Design", icon: Palette },
  { name: "GraphQL", url: "#", category: "API", icon: Globe },
  { name: "REST API", url: "#", category: "API", icon: Globe },
  { name: "WebSocket", url: "#", category: "API", icon: Globe },
  { name: "Cybersecurity", url: "#", category: "Security", icon: Shield },
  { name: "Ethical Hacking", url: "#", category: "Security", icon: Shield },
  { name: "CISSP", url: "#", category: "Security", icon: Shield },
]

const categories = ["All", "Cloud", "Frontend", "Backend", "Database", "DevOps", "Design", "API", "Security"]

export default function Badges() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredBadges =
    selectedCategory === "All" ? badges : badges.filter((badge) => badge.category === selectedCategory)

  // Use single row if 6 or fewer badges, otherwise split into two rows
  const shouldUseSingleRow = filteredBadges.length <= 6
  const firstRow = shouldUseSingleRow ? filteredBadges : filteredBadges.slice(0, Math.ceil(filteredBadges.length / 2))
  const secondRow = shouldUseSingleRow ? [] : filteredBadges.slice(Math.ceil(filteredBadges.length / 2))

  // Helper for external links
  const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Badges</h2> */}
        <div className="flex items-center gap-4 mb-12 sm:gap-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-blue-50">Badges</h1>
            <div className="flex-1 h-0.5 bg-white/70 mt-4 max-w-xs sm:max-w-sm lg:max-w-md"></div>
          </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-gray-600 hover:border-white hover:bg-white hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Badge Count */}
      </div>

      {filteredBadges.length > 0 ? (
        <div className="space-y-8">
          {/* First Row - Scrolling Left to Right */}
          {firstRow.length > 0 && (
            <div className="relative">
              <div className="flex  animate-scroll-right hover:pause-animation">
                {/* Duplicate badges for seamless loop */}
                {[...firstRow, ...firstRow, ...firstRow].map((badge, index) => {
                  const IconComponent = badge.icon
                  return (
                    <ExternalLink key={`first-${index}`} href={badge.url}>
                      <div className="flex-shrink-0 mx-4 group">
                        <div className="bg-transparent border-2 border-gray-200 rounded-xl px-6 py-5 min-w-[220px] hover:bg-black hover:text-white hover:border-white transition-all duration-300 group-hover:scale-105 shadow-lg">
                          <div className="text-center">
                            <div className="mb-4 flex justify-center">
                              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                                <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-black" />
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{badge.name}</h3>
                            <p className="text-sm text-gray-600 group-hover:text-gray-300">{badge.category}</p>
                          </div>
                        </div>
                      </div>
                    </ExternalLink>
                  )
                })}
              </div>
            </div>
          )}

          {/* Second Row - Scrolling Right to Left */}
          {secondRow.length > 0 && (
            <div className="relative ">
              <div className="flex  animate-scroll-left hover:pause-animation">
                {/* Duplicate badges for seamless loop */}
                {[...secondRow, ...secondRow, ...secondRow].map((badge, index) => {
                  const IconComponent = badge.icon
                  return (
                    <ExternalLink key={`second-${index}`} href={badge.url}>
                      <div className="flex-shrink-0 mx-4 group ">
                        <div className="bg-transparent  border-2 border-gray-200 rounded-xl px-6 py-5 min-w-[220px] hover:bg-black hover:text-white hover:border-white transition-all duration-300 group-hover:scale-105 shadow-lg">
                          <div className="text-center">
                            <div className="mb-4 flex justify-center">
                              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                                <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-black" />
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{badge.name}</h3>
                            <p className="text-sm text-gray-600 group-hover:text-gray-300">{badge.category}</p>
                          </div>
                        </div>
                      </div>
                    </ExternalLink>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No badges found in this category.</p>
        </div>
      )}
    </section>
  )
}
