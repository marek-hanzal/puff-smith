import withTM from 'next-transpile-modules';

export default {
    swcMinify:                   true,
    poweredByHeader:             false,
    productionBrowserSourceMaps: false,
    webpack:                     (config, {
        webpack,
        buildId,
        isServer,
        nextRuntime,
        ...options
    }) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.BUILD_ID': JSON.stringify(buildId),
			}),
		);
		if (isServer && nextRuntime === 'nodejs') {
			return patchWebpackConfig(merge(config, {
				entry() {
					return config.entry().then(entry => {
						Object.keys(entry).map(key => {
							entry[key] = {import: ['./src/service/side-effect/bootstrap.ts', ...entry[key]]};
                        });
                        return entry;
                    });
                }
            }), options);
        }
        return config;
    },
    reactStrictMode:             true,
    staticPageGenerationTimeout: 20,
    ...withTM([
        'antd-mobile',
    ]),
};
