/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {
    removeConsole: false,
  },
  experimental: {
    esmExternals: "loose", // required to make Konva & react-konva work
  },
};

module.exports = nextConfig;
