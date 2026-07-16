/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export lets the founder host anywhere and lets us verify the build + capture screenshots.
  // Remove this line if integrating into an existing server-rendered Next app.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
