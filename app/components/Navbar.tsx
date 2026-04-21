"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, User, FolderGit2, Brain, Mail, Sparkles, Phone } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Início', href: '#home', icon: Home },
        { name: 'Sobre Mim', href: '#about', icon: User },
        { name: 'Projetos', href: '#projects', icon: FolderGit2 },
        { name: 'Habilidades', href: '#skills', icon: Brain },
        { name: 'Contato', href: '#contact', icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.href.substring(1));
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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navLinks]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-white shadow-lg border-b border-gray-200'
                : 'bg-white shadow-md'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo - Responsivo */}
                    <a
                        href="#home"
                        onClick={(e) => handleClick(e, '#home')}
                        className="flex items-center gap-2 group cursor-pointer flex-1 md:flex-none"
                    >
                        <div className="relative">
                            <Code2 className="w-7 h-7 md:w-8 md:h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                                Wanderley  Perdigão  Neto | FullStack
                            </span>
                            <span className="hidden xs:inline-block text-xs text-gray-400 leading-tight">
                                Full Stack Developer
                            </span>
                        </div>
                    </a>

                    {/* Desktop Menu - Esconder em telas menores */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`relative px-3 xl:px-4 py-2 rounded-full transition-all duration-300 group whitespace-nowrap ${
                                    activeSection === link.href.substring(1)
                                        ? 'text-indigo-600'
                                        : 'text-gray-600 hover:text-indigo-600'
                                }`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <link.icon className="w-4 h-4" />
                                    <span className="font-medium text-sm xl:text-base">{link.name}</span>
                                </span>
                                {activeSection === link.href.substring(1) && (
                                    <span className="absolute inset-0 bg-indigo-50 rounded-full"></span>
                                )}
                            </a>
                        ))}

                        <Button className="ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full px-5 xl:px-6 gap-2 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group cursor-pointer  p-2 rounded-xl transition-all duration-200"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="text-base">Contrate-me</span>
                            </a>
                        </Button>
                    </div>

                    {/* Menu Tablet (md a lg) - Links sem texto */}
                    <div className="hidden md:flex lg:hidden items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                    activeSection === link.href.substring(1)
                                        ? 'text-indigo-600 bg-indigo-50'
                                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                                }`}
                                title={link.name}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                        <Button className="ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full p-2">
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group cursor-pointer  p-2 rounded-xl transition-all duration-200"
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
                                isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (até md) */}
            <div className={`md:hidden fixed inset-x-0 top-16 bg-white shadow-xl transition-all duration-300 transform ${
                isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
            }`}>
                <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="font-medium text-base">{link.name}</span>
                        </a>
                    ))}
                    <div className="pt-4 px-4">
                        <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full gap-2 py-6">
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group cursor-pointer  p-2 rounded-xl transition-all duration-200"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="text-base">Contrate-me</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;