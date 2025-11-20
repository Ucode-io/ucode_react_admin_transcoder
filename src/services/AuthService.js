import fetch from 'auth/FetchInterceptor'

const AuthService = {}


AuthService.login = function (data) {
	return fetch({
		url: '/user/login',
		method: 'post',
		data: data
	})
}






export default AuthService;