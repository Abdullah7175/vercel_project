// export const oidcConfig = {
//     authority: "https://your-identity-provider.com",
//     client_id: "7n47e85nrdqahvqhoq9d4ttd9j",
//     redirect_uri: "http://localhost:3000/callback",
//     scope: "openid profile email",
//     response_type: "code",
//   };

  export const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_BktrR8B1L",
    client_id: "7n47e85nrdqahvqhoq9d4ttd9j",
    redirect_uri: "https://vercel-project-em6n.vercel.app/auth/callback",
    response_type: "code",
    scope: "openid email profile",
  };
  