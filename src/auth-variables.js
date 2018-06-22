const variables = () => {
  if(process.env.NODE_ENV === 'development'){
    return {
      domain: 'qwinix-saml.auth0.com',
      clientId: '{CLIENT_ID_DEV}',
      callbackUrl: 'http://localhost:3000/callback',
      audience: 'http://localhost:3001'
    }
  }
  else {
    return {
      domain: 'qwinix-saml.auth0.com',
      clientId: '{CLIENT_ID_PROD}',
      callbackUrl: 'http://qblog.qwinix.net:3000/callback',
      audience: 'http://qblog.qwinix.net:3001'
    }
  }
}

export const AUTH_CONFIG = variables();