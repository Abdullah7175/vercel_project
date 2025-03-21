import { AuthProvider, cognitoAuthConfig } from "./auth/CognitoConfig";

export default function MyApp({ children }) {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      {children}
    </AuthProvider>
  );
}
