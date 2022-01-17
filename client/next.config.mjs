import analyzer from '@next/bundle-analyzer';
import plugins from 'next-compose-plugins';
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
		buildId
	}) => {
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env.BUILD_ID': JSON.stringify(buildId),
			})
		);
		return config;
	},
	reactStrictMode:             true,
	staticPageGenerationTimeout: 15,
	basePath:                    process.env.NEXT_PUBLIC_PUBLIC_URL,
	async rewrites() {
		return [
			{
				source:      '/api/:path*',
				destination: process.env.NEXT_PUBLIC_PUFF_SMITH + '/api/:path*',
				basePath:    false,
				locale:      false,
			},
			{
				source:      process.env.NEXT_PUBLIC_PUBLIC_URL + '/api/:path*',
				destination: process.env.NEXT_PUBLIC_PUFF_SMITH + '/api/:path*',
				basePath:    false,
				locale:      false,
			},
		];
	}
});

export default config;
