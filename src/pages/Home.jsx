import React from "react";
import { Link } from "react-router-dom";
import Loadinglogo from "../assets/loading.jpg";

import "../style/home.css";

function App() {
  return (
    <>
      <div className="logo">
        <img src={Loadinglogo} alt="logo" />
      </div>
      <div className="jumbotron">
        <h1>Eezi-Codez</h1>
        <h2>Student Management System</h2>
        <br />
        <Link to="/users">
          <button>View Our Students</button>
        </Link>
      </div>
    </>
  );
}

export default App;