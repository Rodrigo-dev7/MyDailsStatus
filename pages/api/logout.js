import auth0 from '../../lib/auth0';

const Logout = async (req, res) => {
  await auth0.handleLogout(req, res)
}
export default Logout;