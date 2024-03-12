/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s1.static.brasilescola.uol.com.br" },
    ],
  },
};

export default nextConfig;
