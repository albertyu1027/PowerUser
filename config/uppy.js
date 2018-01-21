// Valid configuration options:
// https://uppy.io/docs/server/#Options

const config = {
	providerOptions: {
	  google: {
		key: 'GOOGLE_KEY',
		secret: 'GOOGLE_SECRET'
	  }
	},
	server: {
	  host: 'localhost:3020',
	  protocol: 'http',
	},
	filePath: '/path/to/folder/'
  };

module.exports = config;