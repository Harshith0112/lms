import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Login from "./pages/user_login";
import Signup from "./pages/user_signup";
import ViewBooks from "./pages/ViewBooks";
import Borrow from "./pages/borrow_books";
import SearchPage from "./pages/search_page";
import Profile from "./pages/profile";
// import Addbook from "./pages/addbook";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/addbook" element={<Addbook/>} /> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/viewBooks" element={<ViewBooks />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/borrowbooks" element={<Borrow />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
