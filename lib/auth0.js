import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URL,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URL,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
})



                        // const config = {
                        //   required: false,
                        //   auth0Logout: true,
                        //   baseURL: "http://localhost:3000",
                        //   issuerBaseURL: "https://devmydail.auth0.com",
                        //   clientID: "",
                        //   appSessionSecret: "a long, randomly-generated string stored in env"
                        // };