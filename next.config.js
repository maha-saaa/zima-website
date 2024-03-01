/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// const withTM = require('next-transpile-modules')(['somemodule', 'and-another']); // pass the modules you would like to see transpiled
// module.exports = withTM({});
