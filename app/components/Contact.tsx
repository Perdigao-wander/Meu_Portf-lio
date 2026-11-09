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
    ChevronRight,
    MapPin,
    Clock,
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
                    message: "Mensagem enviada com sucesso! Entrarei em contacto em breve.",
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
                message: "Erro ao enviar mensagem. Tente novamente ou entre em contacto direto pelo WhatsApp.",
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
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-100",
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            label: "WhatsApp / Telemóvel",
            value: "(+239) 9990165",
            href: "https://wa.me/2399990165",
            color: "text-emerald-600",
            bgColor: "bg-emerald-50",
            borderColor: "border-emerald-100",
        },
        {
            icon: <FaLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "Wanderley Perdigão Neto",
            href: "https://www.linkedin.com/in/wanderley-perdigao-neto/",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-100",
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@Perdigao-wander",
            href: "https://github.com/Perdigao-wander",
            color: "text-slate-700",
            bgColor: "bg-slate-100",
            borderColor: "border-slate-200",
        },
    ];

    return (
        <section
            id="contact"
            className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200/80"
        >
            {/* Luzes de Fundo Suaves */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-[140px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Coluna da Esquerda — Informações de Contacto */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-indigo-600 text-sm font-semibold shadow-sm mb-4">
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                                Contacto Directo
                            </div>

                            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Vamos construir algo{" "}
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    extraordinário?
                                </span>
                            </h2>

                            <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed">
                                Estou disponível para novos projetos, desenvolvimento de software por medida, automação de dados ou consultoria técnica.
                            </p>
                        </div>

                        {/* Card de Localização / Status */}
                        <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                            <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                                <span>Água Grande, São Tomé, São Tomé e Príncipe</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>Disponibilidade: Imediata para projetos & consultorias</span>
                            </div>
                        </div>

                        {/* Lista de Canais de Contacto */}
                        <div className="space-y-3">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className={`p-3 rounded-xl ${item.bgColor} border ${item.borderColor} group-hover:scale-105 transition-transform shrink-0`}>
                                        <span className={item.color}>{item.icon}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                                        <p className="text-sm font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Coluna da Direita — Formulário em Card Branco */}
                    <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Enviar Mensagem
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    Preencha os dados abaixo e responderei o mais brevemente possível.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-700">
                                        Nome Completo <span className="text-indigo-600">*</span>
                                    </label>
                                    <Input
                                        name="user_name"
                                        placeholder="Ex: Maria Silva"
                                        className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-indigo-600 focus:ring-indigo-600/20 placeholder:text-slate-400 h-12"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-slate-700">
                                        Endereço de E-mail <span className="text-indigo-600">*</span>
                                    </label>
                                    <Input
                                        name="user_email"
                                        type="email"
                                        placeholder="seu.email@exemplo.com"
                                        className="bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-indigo-600 focus:ring-indigo-600/20 placeholder:text-slate-400 h-12"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-700">
                                    Mensagem <span className="text-indigo-600">*</span>
                                </label>
                                <Textarea
                                    name="message"
                                    placeholder="Descreva brevemente o seu projeto, ideia ou questão..."
                                    className="min-h-[150px] bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-indigo-600 focus:ring-indigo-600/20 placeholder:text-slate-400 resize-none p-4"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Mensagens de Feedback */}
                            {status.type === "success" && (
                                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-medium">
                                    <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                                    <span>{status.message}</span>
                                </div>
                            )}

                            {status.type === "error" && (
                                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-sm font-medium">
                                    <XCircle className="w-5 h-5 shrink-0 text-rose-600" />
                                    <span>{status.message}</span>
                                </div>
                            )}

                            {/* Botão de Envio */}
                            <Button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-6 text-base shadow-md transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed border-0"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        <span>A Enviar Mensagem...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Enviar Mensagem</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
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