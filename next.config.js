/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compress: false,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
