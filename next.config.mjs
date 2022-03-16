import withPlugins from 'next-compose-plugins';
import { patchWebpackConfig } from 'next-global-css';
import images from 'next-images';
import withTM from 'next-transpile-modules';
import path from 'path';
import { merge } from 'webpack-merge';

const config = withPlugins([
	images,
	withTM(['@next-auth/prisma-adapter']),
], {
	swcMinify:                   true,
	images:                      {
		formats: ['image/avif', 'image/webp']
	},
	productionBrowserSourceMaps: false,
	// experimental:                {
	// 	outputStandalone: true,
	// },
	webpack: (config, {
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
