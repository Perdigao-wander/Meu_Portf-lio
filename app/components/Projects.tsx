"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub   } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Uma plataforma completa de vendas com pagamentos integrados e painel administrativo.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            tags: ["React", "Node.js", "Stripe"],
            github: "#",
            demo: "#"
        },
        {
            title: "SaaS Dashboard",
            description: "Dashboard analítico para monitoramento de métricas em tempo real com gráficos interativos.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["TypeScript", "Tailwind", "Recharts"],
            github: "#",
            demo: "#"
        },
        {
            title: "Social App",
            description: "Rede social focada em comunidades de desenvolvedores com chat em tempo real.",
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
            tags: ["Next.js", "Supabase", "Socket.io"],
            github: "#",
            demo: "#"
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
                                <div className="flex gap-2 mb-3">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-none">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="flex justify-between border-t border-gray-50 pt-4">
                                <a href={project.github} className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                                    <FaGithub className="w-4 h-4 mr-2" />
                                    Código
                                </a>
                                <a href={project.demo} className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Demo Live
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