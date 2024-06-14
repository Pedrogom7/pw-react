/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'raw.githubusercontent.com', // PokeAPI sprites
            'archives.bulbagarden.net',  // Bulbagarden images
            'assets.pokemon.com'         // Official Pokemon assets
        ],
    },
};

export default nextConfig;
