"use client";

import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from "@/app/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-2">
                        <Code2 className="w-8 h-8 text-indigo-600" />
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              MeuPortfólio
            </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6">
                            Contrate-me
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-gray-600 hover:text-indigo-600 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-3 py-2">
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full">
                                Contrate-me
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;