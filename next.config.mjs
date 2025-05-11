/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Ensures static export for GitHub Pages
    basePath: '/sahara-portfolio', // Replace with your repository name (for GitHub Pages)
    trailingSlash: true, // This ensures that URLs always end with a trailing slash (e.g., `/mobile-app/`)
  };
  
  export default nextConfig;
  
