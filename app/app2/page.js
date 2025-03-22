// App.js
"use client";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";

function App() {
  const auth = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    auth.signinRedirect();  // This redirects to AWS Cognito
  };

  const signOutRedirect = () => {
    const clientId = "7n47e85nrdqahvqhoq9d4ttd9j";
    const logoutUri = encodeURIComponent("https://vercel-project-em6n.vercel.app");
    const cognitoDomain = "https://eu-north-1bktrr8b1l.auth.eu-north-1.amazoncognito.com";
    
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${logoutUri}`;
  };
  

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  // if (auth.isAuthenticated) {
  //   return (
  //     <div>
  //       <pre> Hello: {auth.user?.profile.email} </pre>
  //       <pre> ID Token: {auth.user?.id_token} </pre>
  //       <pre> Access Token: {auth.user?.access_token} </pre>
  //       <pre> Refresh Token: {auth.user?.refresh_token} </pre>

  //       <button onClick={() => auth.removeUser()}>Sign out</button>
  //     </div>
  //   );
  // }

  if (auth.isAuthenticated) {
    // After successful login, redirect user to dashboard
    router.push("/dashboard");
    return null; // Prevents rendering unnecessary UI before redirect
  }

  const [welcomeText, setWelcomeText] = useState("Welcome to our system!");

  useEffect(() => {
    setWelcomeText("¡Te damos la bienvenida a nuestro sistema!");
  }, []);

  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      {/* Left Section: Image */}
      <div className="w-1/1 h-screen">
        <img
          src="/logovercel.jpg" // Replace with your actual image path
          alt="Working people"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-[400px] bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#B4C0C8] to-[#233645] mb-4">
            RAISE
          </h1>
          <p className="text-sm text-[#788791] mb-2">by</p>
          <h2 className="text-2xl font-bold text-[#FF0032] mb-6">Matrix Consulting</h2>

          <p className="text-lg text-[#415564] text-center mb-6">
          {welcomeText}
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              </label>
              <button onClick={handleLogin}  className="w-full py-2 bg-[#9B2341] text-white font-bold rounded-md hover:bg-[#7A1C33] transition-colors border border-black">
            Iniciar sesión
              </button>
              {/* <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              /> */}
            </div>

            {/* <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Contraseña"
              />
            </div>
            <button onClick={handleLogin}  className="w-full py-2 bg-[#9B2341] text-white font-bold rounded-md hover:bg-[#7A1C33] transition-colors border border-black">
            Iniciar sesión
              </button> */}
            {/* <button onClick={() => auth.signinRedirect()} className="w-full py-2 bg-[#9B2341] text-white font-bold rounded-md hover:bg-[#7A1C33] transition-colors border border-black">
                Iniciar sesión
                </button> */}
            {/* <button className="w-full py-2 bg-[#9B2341] text-white font-bold rounded-md hover:bg-[#7A1C33] transition-colors border border-black">
              Iniciar sesión
            </button> */}
          </form>

          <div className="mt-4 text-center">
            <button className="w-full mb-2 py-2 bg-white text-black font-bold rounded-md flex justify-center items-center hover:bg-gray-200 transition-colors border border-black">
              <FaMicrosoft className="text-xl mr-2 text-blue-600" />
              Iniciar sesión con Microsoft
            </button>
            <button className="w-full py-2 bg-white text-black font-bold rounded-md flex justify-center items-center hover:bg-gray-200 transition-colors border border-black">
              <FcGoogle className="text-xl mr-2" />
              Iniciar sesión con Google
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-[#233746]">
        <p className="text-center text-white py-2">© 2025 Matrix Consulting</p>
      </div>
    </div>
  );
    // <div>
    //   <button onClick={() => auth.signinRedirect()}>Sign in</button>
    //   <button onClick={() => signOutRedirect()}>Sign out</button>
    // </div>

}

export default App;