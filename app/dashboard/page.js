"use client";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.isAuthenticated) {
    router.push("/");
    return null; // Prevents rendering before redirect
  }

  return (
    <div>
      <h1>Welcome, {auth.user?.profile.email}</h1>
      <button onClick={() => auth.signoutRedirect()}>Logout</button>
    </div>
  );
};

export default Dashboard;
