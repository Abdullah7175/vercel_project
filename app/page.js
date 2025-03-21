"use client";
import { useAuth } from "react-oidc-context";

export default function LoginPage() {
  const auth = useAuth();

  const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
  const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
  const logoutUri = process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI;

  const signOutRedirect = () => {
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  if (auth.isAuthenticated) {
    return (
      <div>
        <h1>Welcome, {auth.user?.profile.email}</h1>
        <button onClick={() => auth.removeUser()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => auth.signinRedirect()}>Sign In</button>
      <button onClick={() => signOutRedirect()}>Sign Out</button>
    </div>
  );
}
