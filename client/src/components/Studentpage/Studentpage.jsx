import React from "react";
import "./Studentpage.css";
import { Link } from "react-router-dom";


const Studentpage = () => {
return (
   <div className="Appp">
   <header>
      <div className="navbar-z">
         <div className="img-logo-5">
            <img src="https://i.ibb.co/Qm1cqCV/ISM-logo-5.png" alt="logo-5" className="logo-5" />
         </div>
         <div id="clg-name-5">
            <p style={{ color: "white" }}>IIT(ISM) Dhanbad</p>
         </div>
         <div className="navbar-5">
            <ul className="nav_links-5">
               <li>
                  <a href="#services">Overview</a>
               </li>
               <li>
                  <a href="#recruitment">Recruitment Process</a>
               </li>
               <li>
                  <a href="#contact-us">Student</a>
               </li>
            </ul>
         </div>
      </div>
   </header>
   <div className="hero-5">
      <div className="invisible"></div>
      <div className="card-5">
         <h2>Career Development Centre</h2>
         <p>
            <a
               href="https://docs.google.com/document/d/1264ETiWGaPWBiszu078swVY7fj8iEuGXTcrM8mYpOvY/edit"
               target="_none"
            >
               Summer Training 2022 (Online Mode). Click Here .pdf File
            </a>
         </p>
      </div>
   </div>
   <div className="glance">
      <p>Placement session 2021-22 at a glance</p>
      <div className="btn-div-5">
         <button className="btn-5">Download Brochure</button>
      </div>
   </div>
   <h1 style={{ display: "block", textAlign: "center", margin: "2rem" }}>
      Data
      <span style={{ color: "#02428c" }}> Statictics</span>
   </h1>
   <div className="parent-details">
      <div className="child-details">
         <div>
            <img
               src="https://i.ibb.co/C6cDYBD/college-data-1.png"
               alt="logo-5"
               className="logo-5-inside-child-detail"
            />
         </div>
         <div>
            <h2>College Data</h2>
         </div>
         <div>
            <p>
               Need a professional logo-5 with writing underneath for our
               jewellery company
            </p>
         </div>
      </div>
      <div className="child-details">
         <div>
            <img
               src="https://i.ibb.co/C6cDYBD/college-data-1.png"
               alt="logo-5"
               className="logo-5-inside-child-detail"
            />
         </div>
         <div>
            <h2>College Data</h2>
         </div>
         <div>
            <p>
               Need a professional logo-5 with writing underneath for our
               jewellery company
            </p>
         </div>
      </div>
      <div className="child-details">
         <div>
            <img
               src="https://i.ibb.co/C6cDYBD/college-data-1.png"
               alt="logo-5"
               className="logo-5-inside-child-detail"
            />
         </div>
         <div>
            <h2>College Data</h2>
         </div>
         <div>
            <p>
               Need a professional logo-5 with writing underneath for our
               jewellery company
            </p>
         </div>
      </div>
   </div>
   <div className="glance">
      <div className="btn-div-5">
         <button className="btn-5"><Link
            style={{ textDecoration: "none", color: "white" }}
            to="/form">
              Fill Form</Link></button>
      </div>
   </div>
   <div className="parent-container">
      <div className="child-1 child">
         <h2>Placement Statictics:</h2>
         <div className="buttons-container">
            <div>
               <button className="btns-5">2018</button>
               <button className="btns-5">2018</button>
               <button className="btns-5">2018</button>
            </div>
            <div>
               <button className="btns-5">2018</button>
               <button className="btns-5">2018</button>
               <button className="btns-5">2018</button>
            </div>
            <div>
               <button className="btns-5">2018</button>
               <button className="btns-5">2014</button>
               <button className="btns-5">2013</button>
            </div>
            <div>
               <button className="btns-5">2012</button>
               <button className="btns-5">2011</button>
               <button className="btns-5">2010</button>
            </div>
            <div>
               <button className="btns-5">2009</button>
               <button className="btns-5">2008</button>
               <button className="btns-5">2007</button>
            </div>
         </div>
      </div>
      <div className="child-2 child">
         <h2>Departments & Programs :</h2>
      </div>
      <div className="child-3 child"></div>
   </div>
   <div className="parent">
      <div  
         className="child margin card-5-styles"
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <div>
            <div id="svg">
               <svg
                  width="59"
                  height="50"
                  viewBox="0 0 65 58"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#02428C"
               >
                  <path d="M0 54.3728L11.9389 58L16.1747 53.9842L8.1644 46.3899L0 54.3728ZM14.889 27.1844C14.26 27.7107 13.804 28.3975 13.5754 29.1627C13.3468 29.928 13.3553 30.7395 13.5998 31.5004L15.159 36.3521L9.07368 42.1226L20.5717 53.0236L26.6487 47.2622L31.7555 48.7439C33.396 49.2196 35.1787 48.7427 36.3138 47.5227L40.5615 42.8057L19.85 23.1697L14.889 27.1844ZM63.0784 8.98024L55.527 1.82092C53.0788 -0.500189 49.1489 -0.616868 46.5513 1.55471L22.7678 20.8078L43.0528 40.0405L63.3592 17.491C65.651 15.0283 65.5279 11.3025 63.0784 8.98024Z" />
               </svg>
            </div>
            <h3 className="headhover">COMPANY HIGHLIGHTS (PHASE I):</h3>
            <div style={{ textAlign: "center" }}>
               <span style={{ fontWeight: "600" }}>
                  {" "}
                  Registrations :{" "}
               </span>
               <br />
               260 <br />
               <span style={{ fontWeight: "600" }}>
                  Total no. of Offers :
               </span>
               <br />
               929 <br />
               of which 16 International and 194 startups
            </div>
         </div>
      </div>
      <div
         className="child margin card-5-styles"
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <div>
            <div>
               <svg
                  width="59"
                  height="50"
                  viewBox="0 0 65 58"
                  fill="#02428C"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M0 54.3728L11.9389 58L16.1747 53.9842L8.1644 46.3899L0 54.3728ZM14.889 27.1844C14.26 27.7107 13.804 28.3975 13.5754 29.1627C13.3468 29.928 13.3553 30.7395 13.5998 31.5004L15.159 36.3521L9.07368 42.1226L20.5717 53.0236L26.6487 47.2622L31.7555 48.7439C33.396 49.2196 35.1787 48.7427 36.3138 47.5227L40.5615 42.8057L19.85 23.1697L14.889 27.1844ZM63.0784 8.98024L55.527 1.82092C53.0788 -0.500189 49.1489 -0.616868 46.5513 1.55471L22.7678 20.8078L43.0528 40.0405L63.3592 17.491C65.651 15.0283 65.5279 11.3025 63.0784 8.98024Z" />
               </svg>
            </div>
            <h3 className="headhover">
               CTC HIGHLIGHTS IN LAKHS (PHASE I):
            </h3>
            <div style={{ textAlign: "left" }}>
               <span style={{ fontWeight: "600" }}>
                  Highest package :{" "}
               </span>
               50 LPA
               <br />
               <span style={{ fontWeight: "600" }}>
                  Average package :{" "}
               </span>
               19.25 LPA
               <br />
               <span style={{ fontWeight: "600" }}>
                  No. of students with greater than 30 LPA :
               </span>
               128 <br />
               <span style={{ fontWeight: "600" }}>
                  No. of students between 10 to 30 LPA :
               </span>
               489 <br />
               <span style={{ fontWeight: "600" }}>
                  No. of students between 5 to 10 LPA :
               </span>
               199
            </div>
         </div>
      </div>
      <div className="child child3">
         <div className="card-5-styles bigchild">
            <h3>Total Students Placed</h3>
            <h2>940</h2>
            <p>(As on 18th Feb 2022)</p>
         </div>
         <div className="parent-of-two">
            <div className="card-5-styles smallchild">
               <h3>PPOs Offered</h3>
               <h2>137</h2>
            </div>
            <div className="card-5-styles smallchild">
               <h4>Internships Offered</h4>
               <h2>337</h2>
               <p>(As on 18th Feb 2022)</p>
            </div>
         </div>
      </div>
   </div>
   <div id="foot">&#169; IIT(ISM) All Rights Reserved</div>
</div>
);
};
export default Studentpage;