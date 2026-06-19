"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Terminal, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const fullText =
        "Desenvolvo soluções digitais que unem tecnologia, design e performance, transformando ideias em experiências modernas, rápidas e intuitivas.";

    const TYPING_SPEED = 55;
    const DELETING_SPEED = 30;
    const PAUSE_DURATION = 2000;

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

    const renderColoredText = () => {
        const parts = displayText.split(/(tecnologia|design|performance)/g);
        return parts.map((part, index) => {
            if (part === "tecnologia" || part === "design" || part === "performance") {
                return (
                    <span key={index} className="text-cyan-400 font-bold">
            {part}
          </span>
                );
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen mt-8 flex items-center pt-20 pb-16 px-4 overflow-hidden bg-[#0a0a0f]"
        >
            {/* Fundo com grid e "linhas de código" */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhMmEzYSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] bg-[length:40px_40px]" />
                {/* Simulação de código */}
                <div className="absolute top-10 left-10 text-[10px] font-mono text-[#2a2a3a] space-y-1 select-none">
                    <div>&lt;?php</div>
                    <div>
                        <span className="text-[#4a4a5a]">function</span>{" "}
                        <span className="text-green-400">createSolution</span>(){" "}
                    </div>
                    <div className="ml-4">
                        <span className="text-[#4a4a5a]">return</span>{" "}
                        <span className="text-yellow-300">&#39;performance&#39;</span>;
                    </div>
                    <div className="ml-4">
                        <span className="text-[#4a4a5a]">echo</span>{" "}
                        <span className="text-yellow-300">&#39;Hello, World!&#39;</span>;
                    </div>
                </div>
                <div className="absolute bottom-20 right-10 text-[10px] font-mono text-[#2a2a3a] space-y-1 select-none text-right">
                    <div>
                        <span className="text-[#4a4a5a]">const</span>{" "}
                        <span className="text-green-400">dev</span> ={" "}
                        <span className="text-yellow-300">&#39;Wanderley&#39;</span>;
                    </div>
                    <div>
                        <span className="text-[#4a4a5a]">export</span>{" "}
                        <span className="text-green-400">default</span>{" "}
                        <span className="text-cyan-400">Hero</span>;
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="max-w-3xl mx-auto">
                    {/* Badge estilo terminal */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-[#1a1a2a] border border-green-500/30 rounded-full text-green-400 text-sm font-mono">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>$_SESSION[&#39;status&#39;] = &#39;online&#39;</span>
                        <span className="text-[#4a4a5a]">|</span>
                        <span className="text-cyan-400">disponível</span>
                    </div>

                    {/* Título com prompt */}
                    <div className="flex items-start gap-2 mb-4">
            <span className="text-green-400 text-4xl md:text-5xl font-bold font-mono mt-1">
              $
            </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono leading-tight">
                            <span className="text-white">Olá, sou </span>
                            <span className="text-green-400">Wanderley</span>
                            <span className="text-[#4a4a5a]">,</span>
                            <br />
                            <span className="text-white">um </span>
                            <span className="text-cyan-400">Dev Full Stack</span>
                        </h1>
                    </div>

                    {/* Texto digitado com cores */}
                    <div className="mt-4 mb-8 text-lg md:text-xl text-[#b0b0c0] font-mono leading-relaxed min-h-[120px] border-l-2 border-green-500/30 pl-4">
                        <span className="text-green-400">{"//"}</span> {renderColoredText()}
                        <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 animate-blink" />
                    </div>

                    {/* Botões no estilo ./comandos */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button className="bg-green-500 hover:bg-green-400 text-black font-bold rounded-full px-8 py-6 text-lg shadow-lg shadow-green-500/20 transition-all duration-300 group font-mono border border-green-300">
                            <a href="#projects" className="flex items-center gap-2">
                                <Terminal className="w-5 h-5" />
                                <span>./ver-projetos</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-full px-8 py-6 text-lg gap-2 font-mono backdrop-blur-sm"
                            asChild
                        >
                            <a
                                href="https://drive.google.com/file/d/1s0Q2nOXBSELnFnNwti4PKx4h096Bmyiu/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                <span>cv.pdf</span>
                            </a>
                        </Button>
                    </div>

                    {/* Links sociais com marcadores de terminal */}
                    <div className="flex items-center justify-center gap-6 font-mono">
                        <span className="text-[#4a4a5a] text-sm">&lt;social&gt;</span>
                        <a
                            href="https://github.com/Perdigao-wander"
                            className="text-[#b0b0c0] hover:text-green-400 transition-colors flex items-center gap-1 group"
                        >
                            <span className="text-[#4a4a5a] group-hover:text-green-400">❯</span>
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/wanderley-perdig%C3%A3o-neto-007263337/"
                            className="text-[#b0b0c0] hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                        >
                            <span className="text-[#4a4a5a] group-hover:text-cyan-400">❯</span>
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.facebook.com/wanderley.perdigao.oliveira.neto/"
                            className="text-[#b0b0c0] hover:text-blue-400 transition-colors flex items-center gap-1 group"
                        >
                            <span className="text-[#4a4a5a] group-hover:text-blue-400">❯</span>
                            <FaFacebookSquare className="w-5 h-5" />
                        </a>
                        <span className="text-[#4a4a5a] text-sm">&lt;/social&gt;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; // ← sem nenhum caractere extra!