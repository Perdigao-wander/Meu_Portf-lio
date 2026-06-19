"use client";

import React from "react";
import { Terminal, ChevronRight } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            name: "Frontend",
            icon: "🎨",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        },
        {
            name: "Backend",
            icon: "⚙️",
            skills: ["Node.js", "Java", "Spring Boot", "Python"],
        },
        {
            name: "Database",
            icon: "🗄️",
            skills: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL"],
        },
        {
            name: "DevOps & Ferramentas",
            icon: "🔧",
            skills: ["Git", "Docker", "Vercel", "Portainer", "Nginx"],
        },
        {
            name: "ETL",
            icon: "📊",
            skills: ["Talend Open Studio"],
        },
    ];

    return (
        <section id="skills" className="py-24 px-4 bg-[#0a0a0f] border-t border-[#1a1a2a]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-green-400 font-mono text-sm">$</span>
                        <span className="text-[#4a4a5a] font-mono text-sm">cat skills.json</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">
                        <span className="text-green-400">//</span> Minhas Habilidades
                    </h2>
                    <p className="text-[#b0b0c0] font-mono max-w-2xl mx-auto">
                        <span className="text-cyan-400">❯</span> Tecnologias que utilizo para dar vida aos projetos.
                    </p>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mt-4" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1a2a] p-6 rounded-2xl border border-[#2a2a3a] hover:border-cyan-400/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="text-lg font-bold font-mono text-white group-hover:text-cyan-400 transition-colors">
                                    <span className="text-green-400">❯</span> {category.name}
                                </h3>
                            </div>

                            <div className="space-y-2">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-2 px-3 py-2 bg-[#0a0a0f] rounded-lg border border-[#2a2a3a] group-hover:border-cyan-400/20 transition-all duration-300"
                                    >
                                        <span className="text-cyan-400 text-xs">◆</span>
                                        <span className="text-[#b0b0c0] font-mono text-sm group-hover:text-white transition-colors">
                      {skill}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Barra de status no final */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 px-4 py-3 bg-[#1a1a2a] rounded-xl border border-[#2a2a3a] font-mono text-xs">
          <span className="flex items-center gap-2 text-green-400">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span>status: online</span>
          </span>
                    <span className="text-[#4a4a5a]">|</span>
                    <span className="text-[#b0b0c0]">
            <span className="text-cyan-400">skills</span> ={" "}
                        <span className="text-yellow-300">{skillCategories.length}</span>
          </span>
                    <span className="text-[#4a4a5a]">|</span>
                    <span className="text-[#b0b0c0]">
            <span className="text-cyan-400">total</span> ={" "}
                        <span className="text-yellow-300">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </span>
          </span>
                    <span className="text-[#4a4a5a]">|</span>
                    <span className="text-[#b0b0c0]">
            <span className="text-green-400">~</span> ready
          </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;