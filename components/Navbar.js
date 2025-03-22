"use client";
import { useAuth } from "react-oidc-context";

export default function Navbar() {
  const auth = useAuth();

  const handleSignOut = async () => {
    await auth.signoutRedirect();
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <button onClick={handleSignOut} className="bg-red-500 px-4 py-2 rounded">
        Sign Out
      </button>
    </nav>
  );
}
