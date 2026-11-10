"use client";

import React from "react";
import {
    Code2,
    BarChart3,
    Database,
    Container,
    Workflow,
    ShieldCheck,
    Briefcase,
    Award
} from "lucide-react";

const About = () => {
    // Competências alinhadas com o CV
    const features = [
        {
            icon: <Code2 className="w-5 h-5 text-indigo-600" />,
            title: "Desenvolvimento Full Stack",
            description: "Next.js, React, Node.js, TypeScript, Spring Boot e Tailwind CSS",
        },
        {
            icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
            title: "Análise de Dados & BI",
            description: "Pipelines em Python, Dashboards no Metabase e Inteligência de Negócio",
        },
        {
            icon: <Database className="w-5 h-5 text-indigo-600" />,
            title: "Bases de Dados & ORM",
            description: "PostgreSQL, TypeORM, SQL Server, MySQL e SQLite",
        },
        {
            icon: <Workflow className="w-5 h-5 text-indigo-600" />,
            title: "ETL & Integração de APIs",
            description: "WSO2 Platform, Talend Open Studio, GraphQL e APIs RESTful",
        },
        {
            icon: <Container className="w-5 h-5 text-indigo-600" />,
            title: "DevOps & Infraestrutura",
            description: "Docker, Docker Compose, Portainer, Nginx e Servidores Linux",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
            title: "Sistemas Críticos & Segurança",
            description: "Controlo financeiro do Estado, dados policiais e mobilidade",
        },
    ];

    return (
        <section
            id="about"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200/80"
        >
            {/* Luzes de fundo suaves em tons neutros e azuis */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-[140px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Lado Esquerdo – Foto Profissional com Card Flutuante Clean */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            <div>
                                {/* Badge da Secção */}
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-indigo-600 text-sm font-semibold shadow-sm mb-4">
                                    <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                                    Sobre Mim
                                </div>

                                {/* Título Principal */}
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                    Engenharia de Software aliada à{" "}
                                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Inteligência de Dados.
                                </span>
                                </h2>
                            </div>
                            {/* Moldura de Vidro Clara */}
                            <div className="relative rounded-3xl p-3 bg-white border border-slate-200/80 shadow-2xl shadow-slate-200/60 overflow-hidden group">
                                <div className="relative aspect-[1/1] rounded-2xl overflow-hidden bg-slate-100">
                                    <img
                                        src="/assets/fotoeu.png"
                                        alt="Wanderley Perdigão D'Oliveira Neto"
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay gradiente suave na base da foto */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-70" />
                                </div>

                                {/* Badge Flutuante no Canto Inferior da Foto */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 border border-slate-200/90 backdrop-blur-md shadow-lg flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Formação Académica</p>
                                            <p className="text-sm font-bold text-slate-900">Lic. Eng. Informática</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                                        USTP
                                    </span>
                                </div>
                            </div>
                            {/* Brilhos decorativos sutis */}
                            <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-indigo-100 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-56 h-56 bg-purple-100 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>

                    {/* Lado Direito – Conteúdo Estruturado */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Texto de Apresentação extraído do CV */}
                        <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                            <p>
                                Sou profissional de Tecnologias de Informação com <strong className="text-slate-900 font-semibold">+4 anos de experiência</strong> atuando como <strong className="text-indigo-600 font-semibold">Engenheiro de Software</strong> e <strong className="text-purple-600 font-semibold">Analista de Dados</strong>.
                            </p>
                            <p className="text-slate-500 text-base">
                                Tenho contribuído ativamente para o desenvolvimento de APIs escaláveis, estruturação de pipelines ETL, automação de processos complexos e criação de dashboards interativos. O meu foco é otimizar sistemas e apoiar a tomada de decisão estratégica com resultados sólidos.
                            </p>
                        </div>

                        {/* Cards de Métricas / Experiência */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">+4 Anos</div>
                                <div className="text-xs text-slate-500 mt-1 font-medium">De Experiência</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <div className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-1.5">
                                    <Briefcase className="w-4 h-4 text-purple-600" />
                                    IGF & MOE UE
                                </div>
                                <div className="text-xs text-slate-500 mt-1 font-medium">Projetos Governamentais</div>
                            </div>
                            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                                <div className="text-xl sm:text-2xl font-bold text-purple-600">Full Stack & Data</div>
                                <div className="text-xs text-slate-500 mt-1 font-medium">Visão Holística</div>
                            </div>
                        </div>

                        {/* Grid de Competências Técnicas */}
                        <div className="pt-4">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                Especialidades & Capacidades Técnicas
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:text-white transition-colors shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                                                {feature.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;