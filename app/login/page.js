"use client";
import { useAuth } from "react-oidc-context";

export default function LoginPage() {
  const auth = useAuth();

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  return (
    <div>
      {auth.isAuthenticated ? (
        <div>
          <h1>Welcome, {auth.user?.profile.email}</h1>
          <button onClick={() => auth.removeUser()}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => auth.signinRedirect()}>Sign In</button>
      )}
    </div>
  );
}
