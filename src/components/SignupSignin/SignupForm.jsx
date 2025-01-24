import React, { useState } from "react";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "./../../redux/features/auth/authapi";
import { useDispatch } from "react-redux";
import { setUser } from "./../../redux/features/auth/authslice";
import { useNavigate } from "react-router-dom";

const SignInSignUp = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle sign up
// FIX handleSignUp:
const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const response = await registerUser(formData).unwrap();
    dispatch(setUser({ user: response.user, token: response.token }));
    alert("Registration Successful!");

    // Navigate based on role
    const role = response.user.role;
    navigate(role === "admin" ? "/admin-dashboard" : "/user-dashboard");
  } catch (error) {
    alert(error?.data?.message || "Registration Failed!");
  }
};

  
const handleSignIn = async (e) => {
  e.preventDefault();
  try {
    const response = await loginUser({
      email: formData.email,
      password: formData.password,
    }).unwrap();

    console.log('Login response:', response);

    // Save token in localStorage
    localStorage.setItem('authToken', response.token);

    // Dispatch user data to Redux store
    dispatch(setUser({ user: response.user, token: response.token }));

    alert('Login Successful!');

    // Navigate based on role
    const role = response.user.role;
    navigate(role === 'admin' ? '/admin-dashboard' : '/user-dashboard');
  } catch (error) {
    alert(error?.data?.message || 'Login Failed!');
  }
};

  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="relative w-full max-w-md h-[480px] overflow-hidden rounded-xl shadow-xl border border-gray-200 bg-white">
        {/* 
          A wide "slides wrapper" that transitions left or right 
          to show Sign In (left) or Sign Up (right).
        */}
        <div
          className={`absolute top-0 left-0 w-[200%] h-full transition-transform duration-700 ease-in-out ${
            isSignUpMode ? "-translate-x-1/2" : ""
          }`}
        >
          {/* Sign In Slide */}
          <div className="w-1/2 float-left h-full flex flex-col items-center justify-center p-6 bg-white">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleSignIn} className="space-y-4 w-3/4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-100 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-100 rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>
            <p className="mt-6">
              New here?{" "}
              <button
                onClick={() => setIsSignUpMode(true)}
                className="text-blue-600 hover:underline"
              >
                Create an account
              </button>
            </p>
          </div>

          {/* Sign Up Slide */}
          <div className="w-1/2 float-left h-full flex flex-col items-center justify-center p-6 bg-white">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignUp} className="space-y-4 w-3/4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-100 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-100 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-100 rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-6">
              Already have an account?{" "}
              <button
                onClick={() => setIsSignUpMode(false)}
                className="text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
