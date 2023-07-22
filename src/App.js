import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:countryCode" element={<CountryDetail />} />
          <Route
            path="*"
            element={
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                404 | Page not found
              </h2>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
