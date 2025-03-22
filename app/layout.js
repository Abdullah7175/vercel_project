"use client";
import { AuthProvider, useAuth } from "react-oidc-context";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import "./globals.css";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_BktrR8B1L",
  client_id: "7n47e85nrdqahvqhoq9d4ttd9j",
  redirect_uri: "https://vercel-project-em6n.vercel.app//dashboard",
  response_type: "code",
  scope: "openid email profile",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/"; // Check if the user is on the root route (login page)

  return (
    <AuthProvider {...cognitoAuthConfig}>
      <html lang="en">
        <body className="flex h-screen bg-gray-100">
          {!isLoginPage && <Sidebar />} {/* Sidebar only if not on login page */}
          <div className="flex flex-col flex-1 min-h-screen">
            {!isLoginPage && <Navbar />} {/* Navbar only if not on login page */}
            <main className="flex-1 overflow-auto p-4">{children}</main>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}