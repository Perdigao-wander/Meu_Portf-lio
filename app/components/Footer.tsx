"use client";

import React from "react";
import { Code2, ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="relative bg-[#080b14] text-white border-t border-slate-800/80 overflow-hidden">
            {/* Fundo Tecnológico Discreto (Linhas de Grid + Brilho) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-cyan-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Linha Superior: Logo, Links Rápidos e Redes Sociais */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/80">

                    {/* Brand / Nome Profissional */}
                    <div className="flex items-center gap-3 text-center md:text-left">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shadow-sm">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-base font-extrabold text-white tracking-tight block">
                                Wanderley Perdigão Neto
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                                Engenheiro de Software & Analista de Dados
                            </span>
                        </div>
                    </div>

                    {/* Links de Navegação Rápida */}
{/*
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "#home")}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            Início
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, "#about")}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            Sobre Mim
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, "#projects")}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            Projetos
                        </a>
                        <a
                            href="#skills"
                            onClick={(e) => handleNavClick(e, "#skills")}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            Habilidades
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            Contacto
                        </a>
                    </nav>
*/}

                    {/* Redes Sociais */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/Perdigao-wander"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/wanderley-perdigao-neto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                        >
                            <FaLinkedin className="w-4 h-4" />
                        </a>
                    </div>

                </div>

                {/* Linha Inferior: Copyright e Botão Voltar ao Topo */}
                {/*<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
                    <div className="flex items-center gap-1.5 text-center sm:text-left">
                        <span>© {currentYear} Wanderley Perdigão D&#39;Oliveira Neto.</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-1">
                            Desenvolvido com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> em Next.js
                        </span>
                    </div>

                     Botão de Voltar ao Topo
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
                    >
                        <span>Voltar ao topo</span>
                        <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                </div>*/}

            </div>
        </footer>
    );
};

export default Footer;