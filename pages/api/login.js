import auth0 from '../../lib/auth0';

const Login = async (request, response) => {
  await auth0.handleLogin(request, response);
}
export default Login;
