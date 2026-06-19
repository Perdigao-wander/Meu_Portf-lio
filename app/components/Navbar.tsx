"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Menu,
    X,
    Code2,
    Home,
    User,
    FolderGit2,
    Brain,
    Mail,
    Phone,
    Terminal,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [displayName, setDisplayName] = useState("");
    const [typingDone, setTypingDone] = useState(false);
    const fullName = "Wanderley Perdigão Neto";
    const typingRef = useRef<NodeJS.Timeout | null>(null);

    const navLinks = [
        { name: "Início", href: "#home", icon: Home },
        { name: "Sobre Mim", href: "#about", icon: User },
        { name: "Projetos", href: "#projects", icon: FolderGit2 },
        { name: "Habilidades", href: "#skills", icon: Brain },
        { name: "Contato", href: "#contact", icon: Mail },
    ];

    // Efeito de digitação
    useEffect(() => {
        let index = 0;
        typingRef.current = setInterval(() => {
            if (index <= fullName.length) {
                setDisplayName(fullName.slice(0, index));
                index++;
            } else {
                clearInterval(typingRef.current!);
                setTypingDone(true);
            }
        }, 80);
        return () => clearInterval(typingRef.current!);
    }, []);

    // Scroll detection + active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((link) => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 font-mono ${
                scrolled
                    ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#2a2a3a] shadow-2xl"
                    : "bg-[#0a0a0f] border-b border-[#1a1a2a]"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo / Nome com prompt e digitação */}
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, "#home")}
                        className="flex items-center gap-3 group cursor-pointer flex-1 md:flex-none"
                    >
                        <div className="relative flex items-center gap-2">
                            <span className="text-green-400 text-xl font-bold">$</span>
                            <Terminal className="w-6 h-6 text-green-400 group-hover:text-cyan-400 transition-colors duration-300" />
                            <span className="absolute -right-1 -top-1 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
                        </div>
                        <div className="flex flex-col">
              <span className="text-sm md:text-base lg:text-lg font-bold tracking-tight">
                <span className="text-green-400">~/</span>
                <span className="text-white">
                  {displayName}
                    {!typingDone && (
                        <span className="inline-block w-[2px] h-4 bg-green-400 ml-0.5 animate-blink" />
                    )}
                </span>
              </span>
                            <span className="hidden xs:inline-block text-[10px] md:text-xs text-[#7a7a8a] leading-tight">
                <span className="text-cyan-400">❯</span> Full Stack Developer
              </span>
                        </div>
                    </a>

                    {/* Desktop Menu (>= lg) */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className={`relative px-3 xl:px-4 py-2 rounded-full transition-all duration-300 group whitespace-nowrap ${
                                        isActive
                                            ? "text-cyan-400 bg-[#1a1a2e]"
                                            : "text-[#b0b0c0] hover:text-cyan-400 hover:bg-[#14141f]"
                                    }`}
                                >
                  <span className="relative z-10 flex items-center gap-2">
                    <link.icon className="w-4 h-4" />
                    <span className="font-medium text-sm xl:text-base">{link.name}</span>
                  </span>
                                    {isActive && (
                                        <span className="absolute inset-0 border border-cyan-400/30 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.15)]" />
                                    )}
                                </a>
                            );
                        })}

                        <Button className="ml-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full px-5 xl:px-6 gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-400/40 transition-all duration-300 whitespace-nowrap border border-green-300">
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="text-base">Contacte-me</span>
                            </a>
                        </Button>
                    </div>

                    {/* Tablet (md a lg) - ícones sem texto */}
                    <div className="hidden md:flex lg:hidden items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    activeSection === link.href.substring(1)
                                        ? "text-cyan-400 bg-[#1a1a2e]"
                                        : "text-[#b0b0c0] hover:text-cyan-400 hover:bg-[#14141f]"
                                }`}
                                title={link.name}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                        <Button className="ml-2 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full p-2 shadow-lg shadow-green-500/20">
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                            >
                                <Phone className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button (até md) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-all duration-300 ${
                                isOpen
                                    ? "bg-[#1a1a2e] text-cyan-400 border border-cyan-400/30"
                                    : "text-[#b0b0c0] hover:text-cyan-400 hover:bg-[#14141f]"
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (até md) */}
            <div
                className={`md:hidden fixed inset-x-0 top-16 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1a1a2a] shadow-2xl transition-all duration-300 transform ${
                    isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0 pointer-events-none"
                }`}
            >
                <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="flex items-center gap-3 px-4 py-3 text-[#b0b0c0] hover:text-cyan-400 hover:bg-[#14141f] rounded-xl transition-all duration-200 border border-transparent hover:border-cyan-400/20"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="font-medium text-base">{link.name}</span>
                        </a>
                    ))}
                    <div className="pt-4 px-4">
                        <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold rounded-full gap-2 py-6 shadow-lg shadow-green-500/20">
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="text-base">Contacte-me</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* (Opcional) Barra de status estilo terminal no canto inferior direito */}
            <div className="hidden md:block fixed bottom-4 right-4 text-[10px] text-[#4a4a5a] font-mono select-none pointer-events-none z-50 bg-[#0a0a0f]/80 px-3 py-1 rounded-full border border-[#1a1a2a]">
                <span className="text-green-400">●</span> ONLINE&nbsp;|&nbsp;v3.2.1
            </div>
        </nav>
    );
};

export default Navbar;