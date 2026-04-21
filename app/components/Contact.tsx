"use client";

import React, { useRef, useState } from 'react';
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, MessageSquare, Send, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import {email_service, email_template, email_publuc_key} from "@/app/lib/utils";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const result = await emailjs.sendForm(
                email_service,
                email_template,
                formRef.current!,
                email_publuc_key
            );

            if (result.status === 200) {
                setStatus({
                    type: 'success',
                    message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
                });
                formRef.current?.reset();

                // Limpa a mensagem de sucesso após 5 segundos
                setTimeout(() => {
                    setStatus({ type: null, message: '' });
                }, 5000);
            }
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            setStatus({
                type: 'error',
                message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Coluna da esquerda - Informações de contato */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Vamos conversar?
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Estou sempre aberto a novas oportunidades e colaborações.
                            Sinta-se à vontade para entrar em contato!
                        </p>

                        {/* Frase de destaque */}
                        <div className="mb-10 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                            <span className="block text-xl md:text-2xl font-semibold text-gray-700 text-center">
                                Onde a sua
                                <span className="relative inline-block mx-1">
                                    <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                                        ideia
                                    </span>
                                    <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-200 -z-0"></span>
                                </span>
                                <br />
                                se transforma em
                                <span className="font-bold text-indigo-600"> realidade</span>
                            </span>
                        </div>

                        <div className="space-y-4">
                            {/* E-mail */}
                            <a
                                href="mailto:oliveirawander1998@gmail.com"
                                className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all duration-200"
                            >
                                <div className="p-3 bg-indigo-50 rounded-2xl group-hover:bg-indigo-100 transition-colors">
                                    <Mail className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">E-mail</p>
                                    <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                        oliveirawander1998@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/2399097911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all duration-200"
                            >
                                <div className="p-3 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors">
                                    <MessageSquare className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">WhatsApp</p>
                                    <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                                        +239 9097911
                                    </p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Perdigao-wander"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all duration-200"
                            >
                                <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors">
                                    <FaGithub className="w-6 h-6 text-gray-700" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">GitHub</p>
                                    <p className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                        @Perdigao-wander
                                    </p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/wanderley-perdig%C3%A3o-neto-007263337/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-3 rounded-xl transition-all duration-200"
                            >
                                <div className="p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                                    <FaLinkedin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">LinkedIn</p>
                                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        Wanderley Perdigão Neto
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Coluna da direita - Formulário */}
                    <div className="bg-white p-8 rounded-md shadow-xl border border-gray-100">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Nome *</label>
                                    <Input
                                        name="user_name"
                                        placeholder="Seu nome"
                                        className="rounded-md border-gray-200 focus:ring-indigo-600 focus:border-indigo-600"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">E-mail *</label>
                                    <Input
                                        name="user_email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="rounded-md border-gray-200 focus:ring-indigo-600 focus:border-indigo-600"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Mensagem *</label>
                                <Textarea
                                    name="message"
                                    placeholder="Como posso ajudar? Conte-me sobre seu projeto..."
                                    className="min-h-[150px] rounded-md border-gray-200 focus:ring-indigo-600 focus:border-indigo-600"
                                    required
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Status messages */}
                            {status.type === 'success' && (
                                <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-md">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm">{status.message}</span>
                                </div>
                            )}

                            {status.type === 'error' && (
                                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-md">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm">{status.message}</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer rounded-md py-6 text-lg font-bold group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensagem
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