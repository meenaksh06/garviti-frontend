import React from "react";

function RegisterPage({ onLoginRedirect }) {
  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg md:max-w-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        Register for Live Tracking
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Registration successful! Redirecting to login...");
          onLoginRedirect();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter a password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <button
            className="text-blue-600 hover:underline font-medium"
            onClick={onLoginRedirect}
          >
            Login
          </button>
        </p>
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Mock Credentials:
        </h3>
        <p className="text-sm text-gray-700">
          Email: <span className="font-medium">user@gmail.com</span>
        </p>
        <p className="text-sm text-gray-700">
          Password: <span className="font-medium">1234</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
