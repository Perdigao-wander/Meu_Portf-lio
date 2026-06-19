"use client";

import React from "react";
import { Code, Palette, Container, Server, Terminal, Zap } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: <Code className="w-5 h-5 text-cyan-400" />,
            title: "Full Stack",
            description: "Next.js, React, Node.js, TypeScript, SQL/NoSQL",
        },
        {
            icon: <Palette className="w-5 h-5 text-cyan-400" />,
            title: "UI/UX Design",
            description: "Interfaces intuitivas, responsivas e acessíveis",
        },
        {
            icon: <Container className="w-5 h-5 text-cyan-400" />,
            title: "Docker & DevOps",
            description: "Containerização, Docker Compose, ambientes isolados",
        },
        {
            icon: <Server className="w-5 h-5 text-cyan-400" />,
            title: "Nginx & Proxy",
            description: "Servidor web, proxy reverso, SSL/TLS, cache",
        },
        {
            icon: <Terminal className="w-5 h-5 text-cyan-400" />,
            title: "Servidores Linux",
            description: "VPS, bash scripts, monitoramento e automação",
        },
        {
            icon: <Zap className="w-5 h-5 text-cyan-400" />,
            title: "Performance & SEO",
            description: "Core Web Vitals, otimização de velocidade, boas práticas",
        },
    ];

    return (
        <section
            id="about"
            className="py-24 px-4 bg-[#0a0a0f] border-t border-[#1a1a2a]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Lado esquerdo – foto com moldura de terminal */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border border-[#2a2a3a] bg-[#14141f] shadow-2xl shadow-cyan-500/5">
                            {/* Barra de título do terminal */}
                            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2 bg-[#1a1a2a] border-b border-[#2a2a3a] z-20">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-2 text-[10px] text-[#4a4a5a] font-mono">
                  ~/wanderley/photo
                </span>
                            </div>
                            <img
                                src="/assets/fotoeu.png"
                                alt="Wanderley Perdigão Neto"
                                className="w-full h-full object-cover pt-8"
                            />
                            {/* Pequeno prompt no canto inferior direito */}
                            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-green-400/50 bg-black/60 px-2 py-1 rounded">
                                <span className="text-cyan-400">$</span> whoami
                                <span className="text-green-400 ml-2">wanderley</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-2xl -z-0 blur-2xl" />
                    </div>

                    {/* Lado direito – texto e features com estilo código */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#1a1a2a] border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-mono">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                            <span>about.me</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-6 leading-tight">
                            <span className="text-[#4a4a5a]">$</span>{" "}
                            <span className="text-green-400">echo</span>{" "}
                            <span className="text-yellow-300">"Apaixonado por criar software que faz a diferença"</span>
                        </h2>

                        <p className="text-lg text-[#b0b0c0] font-mono mb-10 leading-relaxed border-l-2 border-green-500/30 pl-4">
                            <span className="text-green-400">//</span> Com mais de 4 anos de experiência,
                            unindo estética visual, funcionalidade técnica e segurança.
                        </p>

                        {/* Features no estilo lista de comandos */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-[#14141f] rounded-xl border border-[#1a1a2a] hover:border-cyan-400/30 transition-all group"
                                >
                                    <div className="flex-shrink-0 p-1.5 bg-[#1a1a2a] rounded-md text-cyan-400 group-hover:text-green-400 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-mono font-bold text-white text-sm">
                                            <span className="text-cyan-400">❯</span> {feature.title}
                                        </h3>
                                        <p className="text-[#7a7a8a] text-xs font-mono leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;