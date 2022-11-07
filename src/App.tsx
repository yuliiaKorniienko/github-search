import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import GithubSearch from "./containers/GithubSearch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="search/" />} />
        <Route path="search/" element={<GithubSearch />} />
        <Route path="search/:value" element={<GithubSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
