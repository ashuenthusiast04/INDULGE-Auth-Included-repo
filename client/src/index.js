import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Login from "./Login";
import Home from "./components/Home";
//import Login1 from "./Login1";
import Recruitprocess from "./components/Recruitmentprocess/Recruitprocess";
import Recruiterpage from "./components/Recruiterpage/Recruiterpage";
import Studentpage from "./components/Studentpage/Studentpage";
import Form from "./components/Form/Form";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <App />
        
        <Route path="/" element={<Home />} />
        <Route path="/recruitprocess" element={<Recruitprocess />} />
        <Route path="/recruiterpage" element={<Recruiterpage />} />
        <Route path="/studentpage" element={<Studentpage />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);