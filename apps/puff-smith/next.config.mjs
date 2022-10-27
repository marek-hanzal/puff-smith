import withPlugins from 'next-compose-plugins';
import { patchWebpackConfig } from 'next-global-css';
import images from 'next-images';
import withTM from 'next-transpile-modules';
import { merge } from 'webpack-merge';

export default withPlugins([
	images,
	withTM([
		'antd-mobile',
	]),
], {
	swcMinify:                   true,
	images:                      {
		formats: ['image/avif', 'image/webp']
	},
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
		return patchWebpackConfig(config, options);
	},
	reactStrictMode:             true,
	staticPageGenerationTimeout: 20,
});
