module.exports = require("next-compose-plugins")([
	require("next-images"),
	require("@next/bundle-analyzer")({
		enabled: process.env.ANALYZE === "true",
	}),
	require("next-plugin-antd-less"),
], {
	reactStrictMode: true,
	basePath: process.env.NEXT_PUBLIC_PUBLIC_URL,
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: process.env.BACKEND_HOST + "/api/:path*",
				basePath: false,
				locale: false,
			},
		];
	}
});
