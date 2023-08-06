// App.js
import React, { useState, useEffect } from "react";
import GoogleMapComponent from "./GoogleMap";
import './styles.css';

// Component for the loading page with a spinning loader
const LoadingPage = () => {
  return (
    <div className="main">
      <div class="background">
        {/* Placeholder for background content, if any */}
      </div>
      {/* The spinning loader */}
      <span class="loader"></span>
    </div>
  );
};

// Component for the main page displaying the GoogleMapComponent
const MainPage = () => {
  return (
    <div className="box">
      {/* Render the GoogleMapComponent within the box */}
      <GoogleMapComponent />
    </div>
  );
};

// The main App component
const App = () => {
  // State variable to control loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2000 milliseconds (2 seconds)
    setTimeout(() => {
      // Once the loading is done, set the loading state to false
      setLoading(false);
    }, 2000);
  }, []);

  // If loading is true, show the LoadingPage, otherwise show the MainPage
  return loading ? <LoadingPage /> : <MainPage />;
};

export default App;
