"use client";

import React from "react";
import { Layout, Server, Database, Cpu, Workflow, CheckCircle2 } from "lucide-react";

const Skills = () => {
    // Competências agrupadas estritamente de acordo com o seu CV
    const skillCategories = [
        {
            name: "Front-end",
            icon: Layout,
            color: "text-cyan-400",
            bgColor: "bg-cyan-950/30",
            borderColor: "border-cyan-800/30",
            skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5/CSS3", "jQuery"],
        },
        {
            name: "Back-end & APIs",
            icon: Server,
            color: "text-indigo-400",
            bgColor: "bg-indigo-950/30",
            borderColor: "border-indigo-800/30",
            skills: ["Node.js", "Express.js", "Spring Boot", "APIs RESTful", "GraphQL", "TypeORM"],
        },
        {
            name: "Bases de Dados",
            icon: Database,
            color: "text-blue-400",
            bgColor: "bg-blue-950/30",
            borderColor: "border-blue-800/30",
            skills: ["PostgreSQL", "SQL Server", "MySQL", "SQLite"],
        },
        {
            name: "Análise de Dados & ETL",
            icon: Workflow,
            color: "text-purple-400",
            bgColor: "bg-purple-950/30",
            borderColor: "border-purple-800/30",
            skills: ["Python", "Metabase", "WSO2 Platform", "Talend Open Studio", "Pipelines ETL"],
        },
        {
            name: "DevOps & Infraestrutura",
            icon: Cpu,
            color: "text-slate-300",
            bgColor: "bg-slate-900/40",
            borderColor: "border-slate-800/60",
            skills: ["Docker", "Docker Compose", "Portainer", "Nginx", "Git", "GitHub / GitLab"],
        },
    ];

    return (
        <section
            id="skills"
            className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#080b14] text-white overflow-hidden border-t border-slate-800/60"
        >
            {/* Fundo Tecnológico DISCRETO */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Grid Digital Muito Suave */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                {/* Brilhos Ultrassuaves (Opacidade reduzida para não distrair) */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-12">

                {/* Cabeçalho da Secção */}
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-sm font-medium shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#22d3ee]" />
                        <span>Resumo Técnico</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Tecnologias &{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            Competências Principais.
                        </span>
                    </h2>

                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                        Ecossistema de ferramentas e linguagens que utilizo no desenvolvimento de software e análise de dados.
                    </p>
                </div>

                {/* Grid de Categoria de Skills */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 bg-[#0c101d] rounded-2xl border border-slate-800/80 hover:border-slate-700 shadow-md transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    {/* Header do Card */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className={`p-2.5 rounded-xl ${category.bgColor} ${category.color} ${category.borderColor} border`}>
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
                                            {category.name}
                                        </h3>
                                    </div>

                                    {/* Lista de Badges de Tecnologias */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-slate-300 text-xs font-medium hover:border-slate-700 transition-colors"
                                            >
                                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Card de Síntese no Rodapé
                <div className="p-5 bg-[#0c101d] rounded-2xl border border-slate-800/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>Práticas ágeis, testes unitários, automação ETL e integração contínua.</span>
                    </div>
                    <span className="font-medium text-slate-300 bg-slate-900 border border-slate-800 px-3.5 py-1 rounded-full text-xs">
                        +4 anos de experiência
                    </span>
                </div>*/}

            </div>
        </section>
    );
};

export default Skills;