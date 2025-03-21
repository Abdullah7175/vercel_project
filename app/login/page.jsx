 "use client";
// import { useState, useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { FaMicrosoft } from "react-icons/fa";

// export default function SignIn() {
//   const [welcomeText, setWelcomeText] = useState("Welcome to our system!");

//   useEffect(() => {
//     setWelcomeText("¡Te damos la bienvenida a nuestro sistema!");
//   }, []);

//   return (
//     <div className="min-h-screen flex items-center bg-gray-100">
//       {/* Left Section: Image */}
//       <div className="w-1/1 h-screen">
//         <img
//           src="/logovercel.jpg" // Replace with your actual image path
//           alt="Working people"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Right Section: Form */}
//       <div className="w-1/2 flex justify-center items-center">
//         <div className="w-[400px] bg-white p-8 shadow-lg rounded-lg">
//           <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#B4C0C8] to-[#233645] mb-4">
//             RAISE
//           </h1>
//           <p className="text-sm text-[#788791] mb-2">by</p>
//           <h2 className="text-2xl font-bold text-[#FF0032] mb-6">Matrix Consulting</h2>

//           <p className="text-lg text-[#415564] text-center mb-6">
//           {welcomeText}
//           </p>

//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//                 Email / Usuario
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Email"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//                 Contraseña
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Contraseña"
//               />
//             </div>

//             <button className="w-full py-2 bg-[#9B2341] text-white font-bold rounded-md hover:bg-[#7A1C33] transition-colors border border-black">
//               Iniciar sesión
//             </button>
//           </form>

//           <div className="mt-4 text-center">
//             <button className="w-full mb-2 py-2 bg-white text-black font-bold rounded-md flex justify-center items-center hover:bg-gray-200 transition-colors border border-black">
//               <FaMicrosoft className="text-xl mr-2 text-blue-600" />
//               Iniciar sesión con Microsoft
//             </button>
//             <button className="w-full py-2 bg-white text-black font-bold rounded-md flex justify-center items-center hover:bg-gray-200 transition-colors border border-black">
//               <FcGoogle className="text-xl mr-2" />
//               Iniciar sesión con Google
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="absolute bottom-0 left-0 w-full bg-[#233746]">
//         <p className="text-center text-white py-2">© 2025 Matrix Consulting</p>
//       </div>
//     </div>
//   );
// }
// index.js
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