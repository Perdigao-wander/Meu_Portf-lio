"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub   } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const Projects = () => {
    const projects = [
        {
            title: "Website da Inspeção Geral de Finanças de São Tomé e Príncipe",
            description: "Site institucional moderna para gestão financeira pública, com painel administrativo seguro e integração de dados estratégicos.",
            image: "/assets/igf_site.png",
            tags: ["Next.js", "Node.js","Tailwind CSS", "TypeORM", "Docker", "PostgreSQL"],
            github: "#",
            demo: "https://igf.gov.st/"
        },
        {
            title: "Encantos Kids",
            description: "Site comercial para divulgação de serviços de beleza infantil, com design acolhedor e navegação intuitiva.",
            image: "/assets/encantos_kid_site.png",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            github: "#",
            demo: "https://encantos-kids-website.vercel.app/"
        },
        {
            title: "Xina Zá App",
            description: "Plataforma interativa para preservação digital e valorização dos dialetos crioulos de São Tomé e Príncipe, com recursos de áudio e colaboração comunitária.",
            image: "/assets/Xina_za_header.png",
            tags: ["Next.js", "Supabase", "Socket.IO", "TypeScript", "Tailwind CSS", "Real-time Audio"],
            github: "#",
            demo: "https://xina-za-site-kt2d.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projetos em Destaque</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Uma seleção dos meus trabalhos mais recentes e desafiadores.
                    </p>
                    <div className="w-20 h-2 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow rounded-3xl group">
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex gap-2 mb-3 flex-wrap">
                                    {project.tags.slice(0, 5).map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-none text-xs px-2 py-0.5">
                                            {tag}
                                        </Badge>
                                    ))}
                                    {project.tags.length > 5 && (
                                        <Badge variant="secondary" className="bg-gray-50 text-gray-600 border-none text-xs">
                                            +{project.tags.length - 5}
                                        </Badge>
                                    )}
                                </div>
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between border-t border-gray-50 pt-4">
                                <a href={project.github}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                                        <FaGithub className="w-4 h-4 mr-2" />
                                        Código
                                </a>
                                <a href={project.demo}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Live
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