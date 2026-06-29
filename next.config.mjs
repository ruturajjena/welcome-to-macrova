/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served by GitHub Pages (no Node server).
  output: "export",
  // GitHub Pages can't run Next's image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Emit each route as a folder with index.html (e.g. /download/ -> download/index.html),
  // which is how GitHub Pages resolves clean URLs.
  trailingSlash: true,
};

export default nextConfig;
