import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  
  return (
    <div className="an">
      <nav className="fixed-nav-bar">
        <div className="left">
          <img
            id="ops"
            src="https://upload.wikimedia.org/wikipedia/en/b/b0/Indian_Institute_of_Technology_%28Indian_School_of_Mines%29%2C_Dhanbad_Logo.png"
            alt=""
          />
          <div id="iut">IIT(ISM) DHANBAD</div>
        </div>
        

        <div className="mid">
          <button className="butt">Overview</button>
          <button className="butt">Director Message</button>
          <button className="butt">
          <Link
            id="linkui"
            to="/recruitprocess"
          >Recruitment Process
          </Link></button>
          <button className="butt">Contact</button>
        </div>
      </nav>
      <div>
        <button className="bro">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/login"
          >
            RECRUITER
          </Link>
        </button>
        <button className="bruh">
        <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/login"
          >STUDENT
          </Link></button>
      </div>
      <div className="ash">
        <h1>A one stop portal for Placements</h1>
        <p>
          "Welcome to the recruitment website For IIT(ISM) Dhanbad. IIT is
          India's foremost industrial leadership development institution. Our
          Graduates are a combination of rigorous thinking, hardwork and
          fundamental stronghold. They are nurtured by the institute to strive
          for excellence and deliver impact in their field of work. Let us
          begin..."
        </p>
      </div>
      <div className="smart">
        <h3> Academic Facilities</h3>
        <p>
          Academics at IIT(ISM) DHANBAD has the flexibility to evolve with ever
          changing requirements. Various activities are carried out to promote
          reasearch, enhance creativity, learn new skills, implement innovative
          solutions and ...
        </p>
      </div>
      <div className="singhal">
        <h3>Programs at IIT(ISM) DHANBAD</h3>
        <p>
          IIT(ISM) DHANBAD is known as a premier engineering, science and
          technology institute in India. Currently, it offers an opportunity to
          learn in varied departments and pursue programs. This university has
          strived and evolved over years to offer the students finest of its
          facilities for multi dimensional growth. It is a home for design,
          management school and several emerging centres in technical,
          non-technical & entrepreneurial sector
        </p>
      </div>
      <div>
        <button id="mu">See more</button>
        <button id="mt">Know more</button>
      </div>
      <div className="kurrey">
        <h3>Industrial Design Centre</h3>
        <p>
          IDC School of Design is a unique mix of pedagogic experimentation with
          pragmatic design approach. IDC has academic programs in the areas of
          Industrial Design, Visual Communication, Interaction Design, Animation
          and Mobility & Vehicle Design.
        </p>
        <button id="mi">Explore IDC</button>
      </div>
      <div>
        <button className="button">
          <span>Placement Brochure 20-21</span>
        </button>
        <button className="button" id="uix">
          <span>Placement Report 20-21</span>
        </button>
        <button className="button" id="ux">
          <span>Older Placement Report</span>
        </button>
      </div>
      <div className="kcr">
        <h1 id="rt">WHY IIT ISM DHANBAD?</h1>
        <div className="row">
          <div className="column">
            <div className="card">
              <h2>Alumni</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h2>All round development</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h2>Rankings</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sup">
        <img
          id="prof"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div className="direc">
          <h3>DIRECTOR'S MESSAGE:</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <h3>Prof. Rajiv Shekhar</h3>
        </div>
      </div>
      <footer>
      <div class="foot-img">
        <div class="foot-card">
          <div class="text-box">
            <h2>Contact Us!</h2>
            <div class="foot-card-textbox">
              <div class="flex">
                <img class="icon" src="/Images/kindpng_1792811.png" alt="" />
                <p>IIT(ISM) Dhanbad</p>
              </div>
              <div class="flex">
                <img
                  class="icon"
                  src="/Images/pngkit_icono-de-telefono-png_943942.png"
                  alt=""
                />
                <p>+91 32622 35220, +91 94317 11199</p>
              </div>
              <div class="flex">
                <img
                  src="/Images/PngItem_324231.png"
                  class="icon-mail"
                  alt=""
                />
                <p>dean_iraa@iitism.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
       <div class="footer-block">
        <div class="text">
          <h2>About Us</h2>
          <p>
            Situated in the heart of the country’s prime coking coal belt, 260
            kms from Kolkata with a campus spread over an area of 393 acres,
            (with 218 acres of existing campus and 175 acres under acquisition
            and development) the fully residential IIT(ISM) has all the
            facilities of world class academic institute...
          </p>
        </div>
        <div class="text">
          <h2>Explore</h2>
          <p>
            Situated in the heart of the country’s prime coking coal belt, 260
            kms from Kolkata with a campus spread over an area of 393 acres,
            (with 218 acres of existing campus and 175 acres under acquisition
            and development) the fully residential IIT(ISM) has all the
            facilities of world class academic institute...
          </p>
        </div>
        <div class="text">
          <h2>Connect with Us</h2>
        </div>
      </div> 
      <div id="foot">&#169; IIT(ISM) All Rights Reserved</div>
    </footer>
    </div>
  );
};
export default Home;

