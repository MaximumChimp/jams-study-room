import { useModal } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import JitsiMeet from "../../assets/images/jitsi.png";

function AuthModal() {
  const { isOpen, closeModal, isLogin, setIsLogin } = useModal(); // <-- added
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(isLogin ? "login" : "signup"); // <-- initial mode based on isLogin
  const [showPassword, setShowPassword] = useState(false);

  // Whenever modal opens, reset mode based on isLogin
  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setMode(isLogin ? "login" : "signup"); // automatically switch to signup if isLogin is false
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, isLogin]);

  if (!show) return null;

  const handleClose = () => {
    closeModal();
    setTimeout(() => setMode("login"), 300); // reset mode after fade-out
    setIsLogin(true); // optionally mark user as "login required" after closing
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      } bg-black/20 backdrop-blur-sm`}
    >
      <div className="bg-white flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-3xl transform transition-all duration-300">
        
        {/* LEFT SIDE — LOGIN/SIGNUP FORM */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Welcome to JAMS</h1>
          <p className="text-gray-500 mb-6">
            {mode === "login"
              ? "Log in to join your space and meet others inside. Connect, collaborate, and share ideas."
              : "Create an account to start your own space and connect with others in real-time."}
          </p>

          {/* Email */}
          <label className="block text-gray-700 font-medium mb-1">Email or Username</label>
          <input
            type="email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-fern focus:outline-none"
          />

          {/* Password */}
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-3 mb-4 shadow-sm focus-within:ring-2 focus-within:ring-fern">
            <input
              type={!showPassword ? "password" : "text"}
              className="w-full focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-600"
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot password */}
          {mode === "login" && (
            <button className="text-right block text-fern font-medium mb-6 hover:underline">
              Forgot Password?
            </button>
          )}

          {/* Submit Button */}
          <button className="w-full bg-fern text-white font-semibold py-3 rounded-lg hover:bg-dell transition">
            {mode === "login" ? "Login" : "Sign Up"}
          </button>

          {/* Switch mode */}
          <button
            className="mt-4 text-gray-600 font-medium hover:underline"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {mode === "login" ? "Create an Account" : "Already have an account? Log in"}
          </button>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="mt-4 w-full py-2 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>

        {/* RIGHT SIDE — IMAGE + BLUR OVERLAY */}
        <div className="relative sm:w-1/2 hidden sm:block">
          <img src={JitsiMeet} alt="" className="w-full h-full object-cover" />

          {/* BLUR OVERLAY WITH TEXT */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Semi-transparent blur */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-r-xl"></div>
            <h2 className="relative text-white text-3xl font-bold tracking-wide drop-shadow-lg text-center px-4 flex items-center justify-center space-x-2">
              {/* Pulsing red dot */}
              <span className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
              <span>Live Space</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
