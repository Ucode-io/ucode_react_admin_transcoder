import fetch from 'auth/FetchInterceptor'

const AuthService = {}


AuthService.login = function (data) {
	console.log('daatatatatatatata');
	
	return fetch({
		url: '/user/login',
		method: 'post',
		data: data
	})
}






export default AuthService;