"use client";

import React, { useState } from "react";
import { ExternalLink, Code2, BarChart3, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<"all" | "web" | "data">("all");

    const projects = [
        {
            title: "IGF São Tomé — Repositório & Gestão",
            category: "web",
            description:
                "Website Oficial da Inspeção Geral de Finanças de São Tomé e Príncipe.",
            image: "/assets/igf_site.png",
            tags: ["Next.js", "Node.js", "API Rest", "PostgreSQL", "TypeORM", "Docker", "Tailwind CSS"],
            github: "https://github.com/Perdigao-wander",
            demo: "https://igf.gov.st/",
            featured: true,
        },
        {
            title: "IGF São Tomé — Repositório & Gestão",
            category: "web",
            description:
                "Plataforma para gestão documental institucional.",
            image: "/assets/igf.jpg",
            tags: ["Next.js", "Node.js","API Rest", "PostgreSQL", "TypeORM", "Docker", "Tailwind CSS"],
            github: "https://github.com/Perdigao-wander",
            //demo: "https://igf.gov.st/",
            featured: true,
        },
        {
            title: "Xina Zá App",
            category: "web",
            description:
                "Plataforma interativa para valorização de dialetos crioulos com áudio e colaboração comunitária.",
            image: "/assets/Xina_za_header.png",
            tags: ["Next.js", "Supabase", "Socket.IO", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/Perdigao-wander",
            demo: "https://xina-za-site.vercel.app/",
            featured: false,
        },
        {
            title: "Encantos Kids",
            category: "web",
            description:
                "Site comercial para serviços de beleza infantil, com design acolhedor e navegação intuitiva.",
            image: "/assets/encantos_kid_site.png",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "https://github.com/Perdigao-wander",
            demo: "https://encantos-kids-website.vercel.app/",
            featured: false,
        },
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section
            id="projects"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200/80"
        >
            {/* Luzes de Fundo em Tons Claros */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-[140px]" />
                <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-12">

                {/* Cabeçalho da Secção */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-indigo-600 text-sm font-semibold shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                        <span>Projetos em Destaque</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Soluções que unem{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                            engenharia e dados.
                        </span>
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                        Uma seleção dos meus projetos mais relevantes desenvolvidos para o setor público, empresas e aplicações web modernas.
                    </p>

                    {/* Filtros de Categoria */}
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                                activeFilter === "all"
                                    ? "bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10"
                                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                            }`}
                        >
                            Todos os Projetos
                        </button>
                        <button
                            onClick={() => setActiveFilter("web")}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                                activeFilter === "web"
                                    ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20"
                                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                            }`}
                        >
                            <Code2 className="w-4 h-4" />
                            Full Stack & Web
                        </button>
                        <button
                            onClick={() => setActiveFilter("data")}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                                activeFilter === "data"
                                    ? "bg-purple-600 text-white font-bold shadow-md shadow-purple-600/20"
                                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                            }`}
                        >
                            <BarChart3 className="w-4 h-4" />
                            Data & Analytics
                        </button>
                    </div>
                </div>

                {/* Grid de Cards de Projetos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card
                            key={index}
                            className="flex flex-col justify-between overflow-hidden bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 rounded-2xl group"
                        >
                            <div>
                                {/* Capa / Imagem do Projeto */}
                                <div className="relative overflow-hidden aspect-video bg-slate-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Badge da Categoria sobreposta */}
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1 shadow-sm">
                                        {project.category === "data" ? (
                                            <>
                                                <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
                                                <span>Data</span>
                                            </>
                                        ) : (
                                            <>
                                                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                                                <span>Full Stack</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <CardHeader className="pt-6 pb-2">
                                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                                        <FolderGit2 className="w-5 h-5 text-indigo-600 shrink-0" />
                                        <span>{project.title}</span>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                                        {project.description}
                                    </p>

                                    {/* Badges de Tecnologias */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/60 text-[11px] font-medium px-2.5 py-0.5 rounded-md transition-colors"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>

                            {/* Footer do Card com Links de Ação */}
                            <CardFooter className="flex items-center justify-between border-t border-slate-100 pt-4 pb-4 bg-slate-50/50">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    <span>Código</span>
                                </a>

                                {project.demo && project.demo !== "#" && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100"
                                    >
                                        <span>Live</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;