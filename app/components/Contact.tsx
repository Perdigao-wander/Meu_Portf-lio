"use client";

import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vamos conversar?</h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 rounded-2xl">
                                    <Mail className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">E-mail</p>
                                    <p className="font-bold text-gray-900">ola@meuportfolio.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-indigo-50 rounded-2xl">
                                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">WhatsApp</p>
                                    <p className="font-bold text-gray-900">+55 (11) 99999-9999</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Nome</label>
                                    <Input placeholder="Seu nome" className="rounded-xl border-gray-200 focus:ring-indigo-600" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">E-mail</label>
                                    <Input type="email" placeholder="seu@email.com" className="rounded-xl border-gray-200 focus:ring-indigo-600" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Mensagem</label>
                                <Textarea placeholder="Como posso ajudar?" className="min-h-[150px] rounded-xl border-gray-200 focus:ring-indigo-600" required />
                            </div>
                            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-6 text-lg font-bold group">
                                Enviar Mensagem
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;