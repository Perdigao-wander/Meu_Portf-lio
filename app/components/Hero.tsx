"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { FaGithub,FaLinkedin,FaFacebookSquare   } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
                    Disponível para novos projetos
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Olá, eu sou um <span className="text-indigo-600">Desenvolvedor Full Stack</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Transformo ideias em experiências digitais incríveis através de código limpo e design centrado no usuário.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 py-6 text-lg group">
                        Ver Projetos
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2">
                        Baixar CV
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-6 text-gray-400">
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="hover:text-indigo-600 transition-colors">
                        <FaFacebookSquare className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;