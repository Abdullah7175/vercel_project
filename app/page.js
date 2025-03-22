"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AuthProvider } from "react-oidc-context";

const App = dynamic(() => import("@/app/app2/page"), { ssr: false });

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_BktrR8B1L",
  client_id: "7n47e85nrdqahvqhoq9d4ttd9j",
  redirect_uri: "https://vercel-project-new-lyart.vercel.app/auth/callback",
  response_type: "code",
  scope: "email openid profile",
};

export default function LoginPage() {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  );
}