// const withTM = require('next-transpile-modules')(['@mui/x-charts']);

const nextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	httpAgentOptions: {
		keepAlive: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	  },
	trailingSlash: true
	// distDir: './build',
};

module.exports = nextConfig;

// module.exports = withTM({
// 	nextConfig
// });
  
