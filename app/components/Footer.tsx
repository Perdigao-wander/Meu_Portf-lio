"use client";

import React from "react";
import {Code2, Heart, Terminal, ChevronRight} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-4 bg-[#0a0a0f] border-t border-[#1a1a2a]">
            <div className="max-w-7xl mx-auto">
                {/* Conteúdo principal do footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo com prompt */}
                    <div className="flex items-center gap-3 group">
                        <div className="flex items-center gap-2">
                            <span className="text-green-400 font-mono text-sm">$</span>
                            <Terminal
                                className="w-5 h-5 text-cyan-400 group-hover:text-green-400 transition-colors duration-300"/>
                        </div>
                        <div className="flex flex-col">
                      <span className="text-sm font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                        <span className="text-green-400">~/</span>wanderley-perdigao
                      </span>
                      <span className="text-[10px] font-mono text-[#4a4a5a]">
                        <span className="text-cyan-400">❯</span> full-stack developer
                      </span>
                        </div>
                    </div>

                    {/* Copyright com estilo de código */}
                    <div className="flex items-center gap-2 text-sm font-mono">
                        <span className="text-[#4a4a5a]">©</span>
                        <span className="text-[#b0b0c0]">{currentYear}</span>
                        <span className="text-[#4a4a5a]">—</span>
                        <span className="text-cyan-400 hover:text-green-400 transition-colors">
              Wanderley Perdigão Neto
            </span>
                        <span className="text-[#4a4a5a]">
              <Heart className="w-3 h-3 inline text-red-400 animate-pulse"/>
            </span>
                    </div>

                    {/* Links com estilo de terminal */}
                    <div className="flex items-center gap-4 font-mono">
                        <span className="text-[#4a4a5a] text-xs">&lt;links&gt;</span>
                        <a
                            href="#"
                            className="text-xs text-[#b0b0c0] hover:text-cyan-400 transition-colors flex items-center gap-1 group/link"
                        >
                            <span className="text-[#4a4a5a] group-hover/link:text-cyan-400">❯</span>
                            privacidade
                        </a>
                        <span className="text-[#2a2a3a]">|</span>
                        <a
                            href="#"
                            className="text-xs text-[#b0b0c0] hover:text-cyan-400 transition-colors flex items-center gap-1 group/link"
                        >
                            <span className="text-[#4a4a5a] group-hover/link:text-cyan-400">❯</span>
                            termos
                        </a>
                        <span className="text-[#4a4a5a] text-xs">&lt;/links&gt;</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;