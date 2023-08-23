/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compress: false,
  optimization: {
    minimizer: [],
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
