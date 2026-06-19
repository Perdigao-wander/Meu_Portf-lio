import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.137.1',
    '192.168.137.*',  // Permite toda faixa
    'localhost',
    '127.0.0.1',
  ],
};

export default nextConfig;