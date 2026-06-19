"use client";

import React from "react";
import { ExternalLink, FolderGit2, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const Projects = () => {
    const projects = [
        {
            title: "IGF São Tomé",
            description:
                "Site institucional para gestão financeira pública, com painel administrativo e integração de dados.",
            image: "/assets/igf_site.png",
            tags: ["Next.js", "Node.js", "Tailwind", "TypeORM", "Docker", "PostgreSQL"],
            github: "#",
            demo: "https://igf.gov.st/",
        },
        {
            title: "Encantos Kids",
            description:
                "Site comercial para serviços de beleza infantil, com design acolhedor e navegação intuitiva.",
            image: "/assets/encantos_kid_site.png",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "#",
            demo: "https://encantos-kids-website.vercel.app/",
        },
        {
            title: "Xina Zá App",
            description:
                "Plataforma interativa para valorização de dialetos crioulos com áudio e colaboração comunitária.",
            image: "/assets/Xina_za_header.png",
            tags: ["Next.js", "Supabase", "Socket.IO", "TypeScript", "Tailwind CSS"],
            github: "#",
            demo: "https://xina-za-site.vercel.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="py-24 px-4 bg-[#0a0a0f] border-t border-[#1a1a2a]"
        >
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho com estilo de terminal */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-[#1a1a2a] border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-mono">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                        <span>ls -la ~/projects</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
                        <span className="text-[#4a4a5a]">$</span>{" "}
                        <span className="text-green-400">cat</span>{" "}
                        <span className="text-yellow-300">projetos.md</span>
                    </h2>
                    <p className="text-[#b0b0c0] font-mono mt-4 max-w-2xl mx-auto border-b border-[#1a1a2a] pb-4 inline-block">
                        <span className="text-cyan-400">//</span> Seleção dos meus trabalhos mais recentes
                    </p>
                </div>

                {/* Grid de projetos */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden bg-[#14141f] border border-[#1a1a2a] hover:border-cyan-400/30 transition-all duration-300 shadow-2xl shadow-cyan-500/5 rounded-2xl group"
                        >
                            <div className="relative overflow-hidden aspect-video bg-[#0a0a0f]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay com ícone de terminal */}
                                <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded text-[10px] font-mono text-[#4a4a5a]">
                                    <Code2 className="w-3 h-3 text-green-400" />
                                    <span>~/</span>
                                </div>
                            </div>

                            <CardHeader className="pb-2">
                                <div className="flex flex-wrap gap-1.5 mb-2">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="bg-[#1a1a2a] text-cyan-400 hover:bg-[#2a2a3a] border-none font-mono text-[10px]"
                                        >
                                            #{tag.toLowerCase()}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <Badge
                                            variant="secondary"
                                            className="bg-[#1a1a2a] text-[#4a4a5a] border-none font-mono text-[10px]"
                                        >
                                            +{project.tags.length - 4}
                                        </Badge>
                                    )}
                                </div>
                                <CardTitle className="font-mono text-lg text-white flex items-center gap-2">
                                    <FolderGit2 className="w-4 h-4 text-yellow-400" />
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-[#b0b0c0] text-sm font-mono leading-relaxed">
                                    {project.description}
                                </p>
                            </CardContent>

                            <CardFooter className="flex justify-between border-t border-[#1a1a2a] pt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm font-mono text-[#7a7a8a] hover:text-cyan-400 transition-colors"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    <span>repo</span>
                                    <span className="text-[#4a4a5a]">$</span>
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-sm font-mono text-cyan-400 hover:text-green-400 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>live</span>
                                    <span className="text-[#4a4a5a]">→</span>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;