"use client";
import { AuthProvider, useAuth } from "react-oidc-context";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import the Navbar component

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_BktrR8B1L",
  client_id: "7n47e85nrdqahvqhoq9d4ttd9j",
  redirect_uri: "https://vercel-project-gilt.vercel.app/login",
  response_type: "code",
  scope: "email openid",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <html lang="en">
        <body>
          <AuthWrapper>{children}</AuthWrapper>
        </body>
      </html>
    </AuthProvider>
  );
}

// Wrapper to conditionally show Navbar after login
function AuthWrapper({ children }) {
  const auth = useAuth();

  return (
    <>
      {auth.user && <Navbar />} {/* Show Navbar only if user is authenticated */}
      {children}
    </>
  );
}
