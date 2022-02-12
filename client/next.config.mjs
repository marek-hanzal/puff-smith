import analyzer from '@next/bundle-analyzer';
// import CircularDependencyPlugin from 'circular-dependency-plugin';
import plugins from 'next-compose-plugins';
import { patchWebpackConfig } from 'next-global-css';
import images from 'next-images';

const config = plugins([
	images,
	analyzer({
		enabled: process.env.ANALYZE === 'true',
	}),
], {
	swcMinify:                   true,
	images:                      {
		formats: ['image/avif', 'image/webp']
	},
	webpack:                     (config, {
		webpack,
		buildId,
		...options
	}) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.BUILD_ID': JSON.stringify(buildId),
			}),
		);
		// config.plugins.push(
		// 	new CircularDependencyPlugin({
		// 		exclude:          /node_modules/,
		// 		failOnError:      true,
		// 		allowAsyncCycles: false,
		// 	})
		// );
		return patchWebpackConfig(config, options);
	},
	reactStrictMode:             true,
	staticPageGenerationTimeout: 15,
	basePath:                    process.env.NEXT_PUBLIC_PUBLIC_URL,
	async rewrites() {
		return [
			{
				source:      '/puff-smith/:path*',
				destination: process.env.NEXT_PUBLIC_PUFF_SMITH + '/puff-smith/:path*',
				basePath:    false,
				locale:      false,
			},
			{
				source:      process.env.NEXT_PUBLIC_PUBLIC_URL + '/puff-smith/:path*',
				destination: process.env.NEXT_PUBLIC_PUFF_SMITH + '/puff-smith/:path*',
				basePath:    false,
				locale:      false,
			},
		];
	}
});

export default config;
