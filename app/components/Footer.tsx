"use client";

import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-100 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-indigo-600" />
                    <span className="text-lg font-bold text-gray-900">MeuPortfólio</span>
                </div>

                <p className="text-gray-500 text-sm flex items-center gap-1">
                    © {new Date().getFullYear()} — Wanderley Perdigão Neto
                </p>

                <div className="flex gap-8">
                    <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Privacidade</a>
                    <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">Termos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;