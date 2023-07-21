import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
