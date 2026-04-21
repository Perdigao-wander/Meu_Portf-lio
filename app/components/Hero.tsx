"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Download } from "lucide-react";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const fullText = "Crio soluções digitais que unem tecnologia, design e performance, transformando ideias em experiências modernas, rápidas e intuitivas.";


    // CONFIGURAÇÕES DE VELOCIDADE
    const TYPING_SPEED = 55;      // ← Velocidade ao escrever (menor = mais rápido)
    const DELETING_SPEED = 30;     // ← Velocidade ao apagar (menor = mais rápido)
    const PAUSE_DURATION = 2000;    // ← Pausa antes de apagar (em ms)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentIndex <= fullText.length) {
                // Escrevendo
                setDisplayText(fullText.slice(0, currentIndex + 1));
                setCurrentIndex(prev => prev + 1);
            } else if (isDeleting && currentIndex > 0) {
                // Apagando
                setDisplayText(fullText.slice(0, currentIndex - 1));
                setCurrentIndex(prev => prev - 1);
            }

            // Quando terminar de escrever
            if (!isDeleting && currentIndex === fullText.length) {
                setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
            }

            // Quando terminar de apagar
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
                return <span key={index} className="font-semibold text-white">{part}</span>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Imagem de fundo */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070')" ,
                    // Se quiser testar com URLs online:
                    /*backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070')" // código
                    backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070')" // programação
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" // tecnologia*/
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-white backdrop-blur-sm rounded-full">
                    Disponível para novos projetos
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                    Olá, eu sou Wanderley, um{" "}
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                        Desenvolvedor Full Stack
                    </span>
                </h1>

                {/* Texto com efeito de escrever */}
                <div className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed min-h-[120px]">
                    <p>
                        {renderColoredText()}
                        <span className="animate-pulse inline-block w-0.5 h-6 bg-indigo-400 ml-1"></span>
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg group">
                        <a href="#projects" className="flex items-center">
                            Ver Projetos
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>

                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg gap-2" asChild>
                        <a
                            href="https://drive.google.com/file/d/1s0Q2nOXBSELnFnNwti4PKx4h096Bmyiu/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="w-5 h-5" />
                            Baixar CV
                        </a>
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <a href="https://github.com/Perdigao-wander" className="text-gray-300 hover:text-indigo-400 transition-colors">
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/wanderley-perdig%C3%A3o-neto-007263337/"
                        className="text-gray-300 hover:text-indigo-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.facebook.com/wanderley.perdigao.oliveira.neto/" className="text-gray-300 hover:text-indigo-400 transition-colors">
                        <FaFacebookSquare className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;