import React, { useState, useEffect } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

function App() {
  // Load data from localStorage, or start with an empty array
  const [countries, setCountries] = useState(() => {
    const savedCountries = localStorage.getItem("countries");
    return savedCountries ? JSON.parse(savedCountries) : [];
  });

  // Save data to localStorage whenever countries change
  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  return (
    <div className="main-container">
      <h1 className="main-heading">Country, State, and City Management</h1>
      <div className="app-container">
        <CountryList countries={countries} setCountries={setCountries} />
      </div>
    </div>
  );
}

export default App;
