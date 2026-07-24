/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so this can deploy anywhere the current macrova.in static site does
  // (GitHub Pages, Netlify, etc.). Produces a fully static `out/` folder.
  output: "export",
  reactStrictMode: true,
  images: {
    // Required for `output: export` — we ship no bitmap assets anyway (phone is CSS/SVG).
    unoptimized: true,
  },
  trailingSlash: true, // keep /privacy/ and /support/ style URLs consistent with the live site
};

export default nextConfig;
