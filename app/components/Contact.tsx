"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
    Mail,
    MessageSquare,
    Send,
    CheckCircle,
    XCircle,
    Loader2,
    Terminal,
    ChevronRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { email_service, email_template, email_publuc_key } from "@/app/lib/utils";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: "" });

        try {
            const result = await emailjs.sendForm(
                email_service,
                email_template,
                formRef.current!,
                email_publuc_key
            );

            if (result.status === 200) {
                setStatus({
                    type: "success",
                    message: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
                });
                formRef.current?.reset();

                setTimeout(() => {
                    setStatus({ type: null, message: "" });
                }, 5000);
            }
        } catch (error) {
            console.error("Erro ao enviar email:", error);
            setStatus({
                type: "error",
                message: "Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "E-mail",
            value: "oliveirawander1998@gmail.com",
            href: "mailto:oliveirawander1998@gmail.com",
            color: "text-cyan-400",
            bgColor: "bg-cyan-400/10",
            hoverBg: "hover:bg-cyan-400/20",
            borderColor: "border-cyan-400/20",
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            label: "WhatsApp",
            value: "+239 9097911",
            href: "https://wa.me/2399097911",
            color: "text-green-400",
            bgColor: "bg-green-400/10",
            hoverBg: "hover:bg-green-400/20",
            borderColor: "border-green-400/20",
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@Perdigao-wander",
            href: "https://github.com/Perdigao-wander",
            color: "text-[#b0b0c0]",
            bgColor: "bg-[#2a2a3a]/50",
            hoverBg: "hover:bg-[#2a2a3a]",
            borderColor: "border-[#2a2a3a]",
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Wanderley Perdigão Neto",
            href: "https://www.linkedin.com/in/wanderley-perdig%C3%A3o-neto-007263337/",
            color: "text-blue-400",
            bgColor: "bg-blue-400/10",
            hoverBg: "hover:bg-blue-400/20",
            borderColor: "border-blue-400/20",
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 bg-[#0a0a0f] border-t border-[#1a1a2a]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Coluna da esquerda - Informações de contato */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-green-400 font-mono text-sm">$</span>
                            <span className="text-[#4a4a5a] font-mono text-sm">cat contact.md</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4 leading-tight">
                            <span className="text-green-400">//</span> Vamos{" "}
                            <span className="text-cyan-400">conversar</span>?
                        </h2>

                        <p className="text-lg text-[#b0b0c0] font-mono mb-8 leading-relaxed border-l-2 border-green-500/30 pl-4">
                            <span className="text-green-400">/*</span> Estou sempre aberto a novas
                            <br />
                            oportunidades e colaborações.
                            <br />
                            Sinta-se à vontade para entrar em contato! <span className="text-green-400">*/</span>
                        </p>

                        {/* Frase de destaque com estilo de código */}
                        <div className="mb-10 p-6 bg-[#1a1a2a] rounded-2xl border border-[#2a2a3a] relative overflow-hidden">
                            <div className="absolute top-2 right-2 text-[#4a4a5a] font-mono text-[10px]">
                                <span className="text-green-400">●</span> running
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-green-400 font-mono text-lg">$</span>
                                <span className="text-[#b0b0c0] font-mono text-lg md:text-xl leading-relaxed">
                  <span className="text-yellow-300">echo</span>{" "}
                                    <span className="text-green-400">&quot;Transformando</span>
                  <br />
                  <span className="text-cyan-400">código</span>
                  <span className="text-green-400"> em experiências</span>
                  <br />
                  <span className="text-yellow-300">digitais incríveis</span>
                  <span className="text-green-400">&quot;</span>
                  <span className="text-[#4a4a5a]">;</span>
                </span>
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[#4a4a5a]">
                                <span className="text-cyan-400">❯</span> output:{" "}
                                <span className="text-green-400">✔</span> ready
                            </div>
                        </div>

                        {/* Informações de contato */}
                        <div className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className={`flex items-center gap-4 group p-3 rounded-xl border border-[#2a2a3a] ${item.bgColor} ${item.hoverBg} transition-all duration-300`}
                                >
                                    <div className={`p-2.5 rounded-xl ${item.bgColor} border ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <span className={item.color}>{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-mono text-[#4a4a5a]">{item.label}</p>
                                        <p className={`font-mono text-sm truncate group-hover:${item.color} transition-colors ${item.color}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coluna da direita - Formulário */}
                    <div className="bg-[#1a1a2a] p-8 rounded-2xl border border-[#2a2a3a] shadow-2xl shadow-cyan-400/5">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {/* Cabeçalho do formulário com estilo de terminal */}
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#2a2a3a]">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                                </div>
                                <span className="text-xs text-[#4a4a5a] font-mono ml-2">~/contact/email.sh</span>
                                <span className="ml-auto text-[10px] text-cyan-400 font-mono border border-cyan-400/20 px-2 py-0.5 rounded">
                  POST
                </span>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="text-green-400 font-mono text-sm mt-1">$</span>
                                <div>
                                    <h3 className="text-xl font-bold font-mono text-white">
                                        <span className="text-cyan-400">./</span>envie-sua-mensagem
                                    </h3>
                                    <p className="text-[#b0b0c0] font-mono text-sm">
                                        <span className="text-[#4a4a5a]">//</span> Estou a apenas um e-mail de distância
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-[#b0b0c0]">
                                        <span className="text-green-400">❯</span> Nome <span className="text-red-400">*</span>
                                    </label>
                                    <Input
                                        name="user_name"
                                        placeholder="Seu nome"
                                        className="bg-[#0a0a0f] border-[#2a2a3a] text-white font-mono rounded-lg focus:border-cyan-400 focus:ring-cyan-400/20 placeholder:text-[#4a4a5a]"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-[#b0b0c0]">
                                        <span className="text-green-400">❯</span> E-mail <span className="text-red-400">*</span>
                                    </label>
                                    <Input
                                        name="user_email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="bg-[#0a0a0f] border-[#2a2a3a] text-white font-mono rounded-lg focus:border-cyan-400 focus:ring-cyan-400/20 placeholder:text-[#4a4a5a]"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-[#b0b0c0]">
                                    <span className="text-green-400">❯</span> Mensagem <span className="text-red-400">*</span>
                                </label>
                                <Textarea
                                    name="message"
                                    placeholder="Como posso ajudar? Conte-me sobre seu projeto..."
                                    className="min-h-[150px] bg-[#0a0a0f] border-[#2a2a3a] text-white font-mono rounded-lg focus:border-cyan-400 focus:ring-cyan-400/20 placeholder:text-[#4a4a5a] resize-none"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Status messages */}
                            {status.type === "success" && (
                                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-sm font-mono text-green-400">{status.message}</span>
                                </div>
                            )}

                            {status.type === "error" && (
                                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                    <span className="text-sm font-mono text-red-400">{status.message}</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-400 text-black font-bold font-mono rounded-lg py-6 text-lg shadow-lg shadow-green-500/20 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed border border-green-300"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                        <span>./enviando...</span>
                                    </>
                                ) : (
                                    <>
                                        <Terminal className="w-5 h-5 mr-2" />
                                        <span>./enviar-mensagem</span>
                                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;