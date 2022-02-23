import plugins from 'next-compose-plugins';
import { patchWebpackConfig } from 'next-global-css';
import images from 'next-images';

const config = plugins([
	images,
], {
	swcMinify:                   true,
	images:                      {
		formats: ['image/avif', 'image/webp']
	},
	webpack:                     (config, {
		webpack,
		buildId,
		isServer,
		...options
	}) => {
		!isServer && (config.resolve.fallback = {
			fs:        false,
			path:      false,
			assert:    false,
			process:   false,
			util:      false,
			stream:    false,
			constants: false,
			buffer:    false,
		});
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.BUILD_ID': JSON.stringify(buildId),
			}),
		);
		return patchWebpackConfig(config, options);
	},
	reactStrictMode:             true,
	staticPageGenerationTimeout: 15,
});

export default config;
