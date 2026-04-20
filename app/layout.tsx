import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Metadata para SEO (sem themeColor, colorScheme e viewport)
export const metadata: Metadata = {
    title: {
        default: "Meu Portfólio | Wander Perdigão",
        template: "%s | Meu Portfólio"
    },
    description: "Portfólio profissional de Wander Perdigão - Desenvolvedor web especializado em Next.js, React e criação de sites modernos e responsivos.",
    keywords: [
        "portfólio",
        "desenvolvedor web",
        "Next.js",
        "React",
        "Wander Perdigão",
        "frontend",
        "desenvolvimento web"
    ],
    authors: [{ name: "Wander Perdigão" }],
    creator: "Wander Perdigão",
    publisher: "Wander Perdigão",
    formatDetection: {
        email: false,
        address: false,
        telephone: true,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Meu Portfólio | Wander Perdigão",
        description: "Conheça meu trabalho como desenvolvedor web. Projetos modernos, responsivos e com as melhores práticas do mercado.",
        url: "https://meuportfolio.com",
        siteName: "Meu Portfólio",
        images: [
            {
                url: "/assets/Logo.png",
                width: 1200,
                height: 630,
                alt: "Meu Portfólio - Wander Perdigão",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Meu Portfólio | Wander Perdigão",
        description: "Desenvolvedor web especializado em Next.js e React. Veja meus projetos!",
        images: ["/assets/Logo.png"],
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/safari-pinned-tab.svg",
                color: "#ec4899",
            },
        ],
    },
    manifest: "/site.webmanifest",
    verification: {
        google: "seu-google-verification-code",
    },
    alternates: {
        canonical: "https://meuportfolio.com",
        languages: {
            "pt-BR": "https://meuportfolio.com",
            "en-US": "https://meuportfolio.com/en",
        },
    },
    category: "portfolio",
    classification: "Portfólio Profissional",
    referrer: "origin-when-cross-origin",
    appleWebApp: {
        title: "Meu Portfólio",
        statusBarStyle: "black-translucent",
        capable: true,
    },
    applicationName: "Meu Portfólio",
};

// NOVA EXPORTAÇÃO viewport (obrigatória a partir do Next.js 14)
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FFF0F5" },
        { media: "(prefers-color-scheme: dark)", color: "#ec4899" },
    ],
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}