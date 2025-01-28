import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
	dest: "public",
});

export default withPWA({
	// Your Next.js config
	reactStrictMode: true,
});

/** @type {import('next').NextConfig} */
//const nextConfig = {
//images: {
//	remotePatterns: [
//		{
//			protocol: "https",
//			hostname: "www.benjerry.co.uk",
//		},
//	],
//},
//};

//export default nextConfig;
