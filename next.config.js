/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  // experimental: {
  //   reactRoot: true,
  //   concurrentFeatures: true,
  //   serverComponents: true,
  // },
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
};
