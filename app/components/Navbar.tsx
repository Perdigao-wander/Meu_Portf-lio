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
        { name: "Habilidades", href: "#skills", icon: Brain },
        { name: "Projetos", href: "#projects", icon: FolderGit2 },
        { name: "Contato", href: "#contact", icon: Mail },
    ];

    // Efeito de digitação suave no nome
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
        }, 70);
        return () => clearInterval(typingRef.current!);
    }, []);

    // Scroll detection + ativação automática da secção
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((link) => link.href.substring(1));
            const scrollPosition = window.scrollY + 120;
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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white border-b border-slate-200/90 shadow-md shadow-slate-200/60 py-2.5"
                    : "bg-slate-50 py-4 border-b border-slate-200/80"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 md:h-16">

                    {/* Logo / Brand Profissional */}
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, "#home")}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-indigo-300 transition-all">
                            <Code2 className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm md:text-base font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                                <span>{displayName}</span>
                                {!typingDone && (
                                    <span className="inline-block w-[2px] h-4 bg-indigo-600 animate-pulse" />
                                )}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">
                                Engenheiro de Software & Analista de Dados
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
                                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 group whitespace-nowrap flex items-center gap-2 ${
                                        isActive
                                            ? "text-indigo-600 bg-indigo-50 border border-indigo-100 shadow-sm"
                                            : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80"
                                    }`}
                                >
                                    <link.icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-600"}`} />
                                    <span>{link.name}</span>
                                </a>
                            );
                        })}

                        {/* Botão de WhatsApp */}
                        <Button className="ml-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full px-5 py-5 shadow-md transition-all duration-300 whitespace-nowrap border-0">
                            <a
                                href="https://wa.me/2399990165"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Phone className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm">Contactar</span>
                            </a>
                        </Button>
                    </div>

                    {/* Tablet (md a lg) */}
                    <div className="hidden md:flex lg:hidden items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`p-2.5 rounded-xl transition-all duration-200 ${
                                    activeSection === link.href.substring(1)
                                        ? "text-indigo-600 bg-indigo-50 border border-indigo-100"
                                        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
                                }`}
                                title={link.name}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                        <Button className="ml-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full p-2.5 shadow-md">
                            <a
                                href="https://wa.me/2399990165"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                                aria-label="Contactar no WhatsApp"
                            >
                                <Phone className="w-5 h-5 text-emerald-400" />
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button (até md) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Abrir menu"
                            className={`p-2 rounded-xl border transition-all duration-200 ${
                                isOpen
                                    ? "bg-indigo-50 text-indigo-600 border-indigo-200"
                                    : "bg-white text-slate-700 border-slate-200 hover:text-indigo-600"
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu (Fundo Branco Sólido) */}
            <div
                className={`md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 transform ${
                    isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-4 opacity-0 pointer-events-none"
                }`}
            >
                <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-xl transition-all duration-200 border border-transparent hover:border-slate-200"
                        >
                            <link.icon className="w-5 h-5 text-indigo-600" />
                            <span className="font-semibold text-base">{link.name}</span>
                        </a>
                    ))}
                    <div className="pt-3">
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl gap-2 py-6 shadow-md">
                            <a
                                href="https://wa.me/2399990165"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full"
                            >
                                <Phone className="w-5 h-5 text-emerald-400" />
                                <span className="text-base">Contactar no WhatsApp</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;