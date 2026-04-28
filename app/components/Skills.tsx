"use client";

import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            name: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            name: "Backend",
            skills: ["Node.js", "Java", "Spring Boot", "Python"]
        },
        {
            name:"DataBase",
            skills: ["PostgreSQL", "MongoDB", "SQL Server", "MySQL"]
        },
        {
            name: "DevOps & Ferramentas",
            skills: ["Git", "Docker", "Vercel", "Portainer", "Nginx"]
        },
        {
            name: "ETL",
            skills: ["Talend Open Studio"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-indigo-600 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Minhas Habilidades</h2>
                    <p className="text-indigo-100 max-w-2xl mx-auto">
                        Tecnologias que utilizo para dar vida aos projetos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                            <h3 className="text-xl font-bold text-white mb-6">{category.name}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors cursor-default"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;