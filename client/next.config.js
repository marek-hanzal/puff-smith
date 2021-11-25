module.exports = require("next-compose-plugins")([
	require("next-images"),
	require("@next/bundle-analyzer")({
		enabled: process.env.ANALYZE === "true",
	}),
	require("next-plugin-antd-less"),
], {
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"]
	},
	reactStrictMode: true,
	staticPageGenerationTimeout: 15,
	basePath: process.env.NEXT_PUBLIC_PUBLIC_URL,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: process.env.NEXT_PUBLIC_BACKEND + "/api/:path*",
				basePath: false,
				locale: false,
			},
		];
	}
});
