import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import ReviewPage from "./components/ReviewPage";
import Error from "./components/Error";

function App() {
  const [loggedIn] = useState("cooljmessy");

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/category/:category" element={<Reviews />} />
          <Route
            path="/reviews/:review_id"
            element={<ReviewPage loggedIn={loggedIn} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
