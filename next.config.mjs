/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                //only use selected plugins from svgo to maintain map svg behavior
                // {
                //   name: 'prefixIds',
                //   params: {
                //     delim: '',
                //     prefix: 'svg__',
                //     prefixIds: true,
                //     prefixClassNames: true,
                //   },
                // },
                'removeXlink',
                'removeXMLProcInst',
                'removeXMLNS',
                'removeUnusedNS',
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
