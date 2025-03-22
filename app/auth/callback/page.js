"use client";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";

const Callback = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/dashboard");
    }
  }, [auth.isAuthenticated, router]);

  return <div>Processing authentication...</div>;
};

export default Callback;
