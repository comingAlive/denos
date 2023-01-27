/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   reactRoot: true,
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
  i18n: { locales: ["en"], defaultLocale: "en" },
  // webpack(config, { dev, isServer }) {
  //   // Replace React with Preact in client production build
  //   if (!dev && !isServer) {
  //     Object.assign(config.resolve.alias, {
  //       react: "preact/compat",
  //       "react-dom/test-utils": "preact/test-utils",
  //       "react-dom": "preact/compat",
  //     });
  //   }
  //   return config;
  // },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};
