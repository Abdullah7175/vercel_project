"use client";
import { useAuth } from "react-oidc-context";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const auth = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Redirect to login if not authenticated
//   if (!auth.isAuthenticated) {
//     if (typeof window !== "undefined") {
//       window.location.href = "/";
//     }
//     return null;
//   }

return (
    <nav className="bg-white shadow-md flex justify-between items-center px-6 py-3">
      {/* Left Side - Branding */}
      <div className="flex items-start space-x-2">
  <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#B4C0C8] to-[#233645]">
    RAISE
  </h1>
  <div className="flex flex-col ">
    <span className="text-xs font-semibold text-[#788791] self-start">BY</span>
    <h2 className="text-xl font-bold text-[#FF0032]">Matrix Consulting</h2>
  </div>
</div>

      {/* Right Side - User Info & Bell Icon */}
      <div className="flex items-center space-x-6">
        {/* User Name & Designation */}
        <FiBell className="text-gray-700 text-xl cursor-pointer" />
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                       alt="Profile" 
                       className="h-8 w-8 rounded-full" />
        <div className="relative">
        <div>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 text-gray-800 font-medium"
          >
            <span>{auth.user?.profile.name}</span>
            <span className="text-gray-500 text-sm">{auth.user?.profile.nickname}</span>
            <FiChevronDown />
          </button>
          </div>
          {/* Dropdown for Logout */}
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-2 w-32">
              <button
                onClick={() => auth.signoutRedirect()}
                className="block w-full text-right px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}