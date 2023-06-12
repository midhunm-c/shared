const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [],
      },
      webpack(config, options) {
        const {isServer} = options;
          config.plugins.push(
            new  NextFederationPlugin({
              name: "shared",
              filename: "static/chunks/remoteEntry.js",
              exposes: {
                "./header": "./src/components/header/Header.tsx",
              },
              shared: {
                react: {
                  eager: true,
                  singleton: true,
                  requiredVersion: false,
                },
                "react-dom": {
                  eager: true,
                  singleton: true,
                  requiredVersion: false,
                }
              }
            })
          );
        
        return config;
      }
}

module.exports = nextConfig
