"use client";
import { useAuth } from "react-oidc-context";

export default function LoginPage() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7n47e85nrdqahvqhoq9d4ttd9j";
    const logoutUri = "http://localhost:3000/login";
    const cognitoDomain = "https://eu-north-1bktrr8b1l.auth.eu-north-1.amazoncognito.com";
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
      <button onClick={() => auth.signinRedirect()}>Sign In</button>
      <button onClick={() => signOutRedirect()}>Sign Out</button>
    </div>
  );
}
