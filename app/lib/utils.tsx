import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes Tailwind com merge inteligente.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(...inputs));
}

/**
 * URL base API do servidor.
 * URL base para imagens
 * URL base para download de ficheiros
 */
export const server: string = process.env.NEXT_PUBLIC_SERVER_API_URL ?? (() => {
    throw new Error("❌ NEXT_PUBLIC_SERVER_API_URL não definida no .env");
})();

export const serverPhoto: string = process.env.NEXT_PUBLIC_SERVER_PHOTO_API_URL ?? (() => {
    throw new Error("❌ NEXT_PUBLIC_SERVER_API_URL não definida no .env");
})();

export const serverFile: string = process.env.NEXT_PUBLIC_SERVER_FILE_API_URL ?? (() => {
    throw new Error("❌ NEXT_PUBLIC_SERVER_API_URL não definida no .env");
})();



/**
 * Divide um array em partes (chunks) menores.
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const results: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
    }
    return results;
}

/**
 * Gera um slug limpo e amigável a partir de uma string.
 */
export function slugify(title: string): string {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/[^a-z0-9]+/g, "-") // substitui por hífens
        .replace(/(^-|-$)+/g, ""); // remove hífens extras
}
