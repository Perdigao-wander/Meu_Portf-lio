"use client";

import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Footer from '@/app/components/Footer';
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";

export default function Home() {
    return (
        <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
;