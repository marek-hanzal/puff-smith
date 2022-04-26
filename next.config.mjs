import withPlugins from 'next-compose-plugins';
import { patchWebpackConfig } from 'next-global-css';
import images from 'next-images';
import withTM from 'next-transpile-modules';
import { merge } from 'webpack-merge';

export default withPlugins([
	images,
	withTM([]),
], {
	swcMinify:                   true,
	images:                      {
		formats: ['image/avif', 'image/webp']
	},
	productionBrowserSourceMaps: false,
	webpack:                     (config, {
		webpack,
		buildId,
		isServer,
		...options
	}) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.BUILD_ID': JSON.stringify(buildId),
			}),
		);
		if (isServer) {
			return merge(config, {
				entry() {
					return config.entry().then(entry => {
						entry = Object.assign({}, entry, {
							'agenda':    ['./src/agenda/worker.ts'],
							'migration': ['./src/service/migration/worker.ts'],
						});
						Object.keys(entry).map(key => {
							entry[key] = {import: ['./src/service/side-effect/bootstrap.ts', ...entry[key]]};
						});
						return entry;
					});
				}
			});
		}
		return patchWebpackConfig(config, options);
	},
	reactStrictMode:             true,
	staticPageGenerationTimeout: 15,
});
