"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    // Texto dinamico a ser escrito
    const fullText = "Transformo dados e código em soluções de alto impacto.";
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const TYPING_SPEED = 60;
    const DELETING_SPEED = 30;
    const PAUSE_DURATION = 2500; // Tempo de espera quando o texto termina de escrever

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex((prev) => prev + 1);
            } else if (isDeleting && currentIndex > 0) {
                setDisplayText(fullText.slice(0, currentIndex - 1));
                setCurrentIndex((prev) => prev - 1);
            }

            if (!isDeleting && currentIndex === fullText.length) {
                setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
            }

            if (isDeleting && currentIndex === 0) {
                setIsDeleting(false);
            }
        }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, fullText]);

    return (
        <section
            id="home"
            className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 bg-[#080b14] text-white overflow-hidden"
        >
            {/* Fundo Tecnológico Otimizado */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Imagem de Fundo com ajuste de proporção */}
                <img
                    src="/assets/fundo.jpg"
                    alt="Wanderley Perdigão Neto"
                    className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
                />

                {/* Overlay Gradiente para Contraste e Leitura Otimizada */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#080b14]/50 via-[#080b14]/10 to-[#080b14]" />

                {/* Grid Digital Sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                {/* Luzes de Néon de Fundo */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-purple-600/20 via-indigo-500/20 to-cyan-400/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px]" />
                <div className="absolute top-10 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 mt-4">

                {/* Badge com Margem Superior e Destaque no Topo */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-cyan-400 text-sm font-medium shadow-xl shadow-cyan-950/30 transition-all hover:border-cyan-500/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
                    <span>Engenheiro de Software & Analista de Dados</span>
                </div>

                {/* Título Principal com Efeito de Escrita (Typing) */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                    Wanderley Perdigão Neto
                    <span className="block mt-4 text-2xl sm:text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent min-h-[3rem] sm:min-h-[4rem]">
                        {displayText}
                        <span className="inline-block w-1 h-7 sm:h-9 bg-cyan-400 ml-1.5 animate-pulse rounded-full align-middle" />
                    </span>
                </h1>

                {/* Subtítulo Tecnológico */}
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
                    +4 anos de experiência na criação de APIs escaláveis, pipelines de dados e plataformas web eficientes.
                </p>

                {/* Botões de Ação */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-full px-8 py-6 text-base shadow-lg shadow-cyan-500/25 transition-all w-full sm:w-auto"
                    >
                        <a href="#projects" className="flex items-center justify-center gap-2">
                            <span>Ver Projetos</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>

                    <Button
                        variant="outline"
                        className="bg-slate-900/60 border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:text-white rounded-full px-8 py-6 text-base font-medium backdrop-blur-sm shadow-sm w-full sm:w-auto"
                        asChild
                    >
                        <a
                            href="https://drive.google.com/file/d/1s0Q2nOXBSELnFnNwti4PKx4h096Bmyiu/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                        >
                            <Download className="w-4 h-4 text-cyan-400" />
                            <span>Descarregar CV</span>
                        </a>
                    </Button>
                </div>

                {/* Links Sociais */}
                <div className="pt-6 flex items-center justify-center gap-4 text-slate-400">
                    <a
                        href="https://github.com/Perdigao-wander"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-3 rounded-full bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-sm"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/wanderley-perdigao-neto/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-3 rounded-full bg-slate-900/80 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-sm"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;