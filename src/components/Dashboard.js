import React from "react";

const Dashboard = () => {

  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <nav className="bg-white shadow-md py-6 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-blue-600">Live Tracking</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex-grow flex justify-center items-center bg-gray-50 px-6 py-12 lg:px-16 lg:py-20">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl space-y-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">Welcome to Your Dashboard</h2>
          <p className="text-lg text-center text-gray-600">
            Track your real-time location and share it with others.
          </p>

          <div className="flex justify-center items-center">
            <button
              onClick={shareLocation}
              className="bg-purple-500 text-white py-3 px-8 rounded-full hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Share My Location
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Live Tracking App. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

