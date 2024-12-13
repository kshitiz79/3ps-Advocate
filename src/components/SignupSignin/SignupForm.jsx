import React, { useState } from "react";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Main Container */}
      <div className="relative w-full md:max-w-5xl h-[500px] bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Gradient Circle */}
        <div
          className={`absolute top-[-100%] md:top-[-50%] right-[50%] w-[2000px] h-[2000px] rounded-full bg-gradient-to-r from-blue-500 to-blue-400 backdrop-blur-lg transition-all duration-1000 ease-in-out ${
            isSignUpMode ? "translate-x-full" : ""
          }`}
          style={{ zIndex: 5 }}
        ></div>

        {/* Forms Container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out">
          {/* Sign In Form */}


        

          <form  className={`absolute right-0 w-2/5 flex flex-col space-y-6 text-center p-8 transition-transform duration-700 ease-in-out ${
              isSignUpMode ? "translate-x-[100%]" : "translate-x-0"
            }`}
            style={{ zIndex: 10 }}>
         
            <h2 className="text-3xl font-bold text-gray-700">Sign In</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 bg-gray-100 rounded-full outline-none shadow-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-100 rounded-full outline-none shadow-md"
            />
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </form>

          {/* Sign Up Form */}
  
           
          
            <form className={`absolute left-8 w-2/5 flex flex-col space-y-6 text-center p-8 transition-transform duration-700 ease-in-out ${
              isSignUpMode ? "translate-x-100%" : "-translate-x-[100%]"
            }`}
            style={{ zIndex: 10 }}
            >
            <h2 className="text-3xl font-bold text-gray-700  ">Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 bg-gray-100 rounded-full outline-none flex  shadow-md"
            />
            <input
              type="email"
              placeholder="Email"
            className="w-full p-2 bg-gray-100 rounded-full outline-none shadow-md"
            />
            
            <input
              type="password"
              placeholder="Password"
            className="w-full p-2 bg-gray-100 rounded-full outline-none shadow-md"
            />
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ">
              Sign Up
            </button>
            </form>
          </div>
       

        {/* Panels */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          {/* Left Panel */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center text-center p-8 transition-transform duration-700 ${
              isSignUpMode ? "-translate-x-full" : "translate-x-0"
            }`}
            style={{ zIndex: 8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">New Here?</h3>
            <p className="mb-6 text-white">Join us and start your journey today.</p>
            <button
              className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign Up
            </button>
          </div>

          {/* Right Panel */}
          <div
            className={`w-1/2 flex flex-col justify-center items-center text-center p-8 transition-transform duration-700 ${
              isSignUpMode ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ zIndex: 8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">One of Us?</h3>
            <p className="mb-6 text-white">Sign in and continue your journey with us.</p>
            <button
              className="border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-500 transition duration-300"
              onClick={() => setIsSignUpMode(false)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
