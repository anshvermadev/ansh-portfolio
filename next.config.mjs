/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'api.microlink.io', // Microlink Image Preview
			'res.cloudinary.com', // Cloudinary Images
		],
	},
	transpilePackages: [
		'@react-three/fiber',
		'@react-three/drei'
	],
};

export default nextConfig;
