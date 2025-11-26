const dev = {
  API_ENDPOINT_URL: 'https://transcoder-api.u-code.io/v1/'
};

const getEnv = () => {
	console.log("Here brother", process.env.REACT_APP_API_BASE_URL)

	return { API_ENDPOINT_URL: process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : dev.API_ENDPOINT_URL}
}

export const env = getEnv()
