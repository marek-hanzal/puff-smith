import plugins from 'next-compose-plugins';
import { patchWebpackConfig } from 'next-global-css';
import images from 'next-images';
import path from 'path';
import { merge } from 'webpack-merge';

const config = plugins([
	images,
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
		config.optimization = {
			...config.optimization,
			runtimeChunk: {
				name: 'commons',
			},
		};
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.BUILD_ID': JSON.stringify(buildId),
			}),
		);
		if (isServer) {
			return merge(config, {
				entry() {
					return config.entry().then(entry => Object.assign({}, entry, {
						'agenda': path.resolve(process.cwd(), 'src/agenda/worker.ts'),
					}));
				}
			});
		}
		return patchWebpackConfig(config, options);
	},
	reactStrictMode:             true,
	staticPageGenerationTimeout: 15,
});

export default config;
