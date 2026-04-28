"use client";

import React from 'react';
import {
    Code,
    Palette,
    Container,
    Server,
} from "lucide-react";
const About = () => {


    const features = [
        {
            icon: <Code className="w-6 h-6 text-indigo-600" />,
            title: "Desenvolvimento Full Stack",
            description: "Next.js, React, Node.js, TypeScript e bancos de dados SQL/NoSQL."
        },
        {
            icon: <Palette className="w-6 h-6 text-indigo-600" />,
            title: "Design UI/UX",
            description: "Interfaces intuitivas, responsivas e com foco em acessibilidade."
        },
        {
            icon: <Container className="w-6 h-6 text-indigo-600" />,
            title: "Docker & DevOps",
            description: "Containerização de aplicações, Docker Compose e ambientes isolados."
        },
        /* {
             icon: <Server className="w-6 h-6 text-indigo-600" />,
             title: "Nginx & Proxy",
             description: "Servidor web, proxy, SSL/TLS e otimização de recursos estáticos."
         },
         {
             icon: <Terminal className="w-6 h-6 text-indigo-600" />,
             title: "Servidores Linux",
             description: "Configuração de VPS, automação com scripts bash e monitoramento."
         },
         {
             icon: <Zap className="w-6 h-6 text-indigo-600" />,
             title: "Performance & SEO",
             description: "Otimização de velocidade, Core Web Vitals e boas práticas de SEO."
         }*/
    ];

    return (
        <section id="about" className="py-24 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-indigo-100 overflow-hidden relative z-10">
                            <img
                                src="/assets/fotoeu.png"
                                alt="Perfil"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600 rounded-3xl -z-0 hidden md:block"></div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Apaixonado por criar soluções que <span className="text-indigo-600">fazem a diferença</span>.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Com mais de 5 anos de experiência, ajudo empresas a construir produtos digitais escaláveis. Meu foco é unir a estética visual com a funcionalidade técnica e segurança.
                        </p>

                        <div className="grid gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 p-2 bg-indigo-50 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;