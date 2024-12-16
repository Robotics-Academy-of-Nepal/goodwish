import React from "react";
import { useLocation } from "react-router-dom";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";

const Footer = () => {
  const location = useLocation();

  const isAboutUs = location.pathname === "/aboutus";

  return (
    <footer
      className="footer"
      style={{
        padding: "2rem 0",
        backgroundColor: "#000",  // Set background color to black
        color: "white"  // Set text color to white
      }}
    >
      <div style={{ backgroundColor: "#000", padding: "2rem 0" }} className="text-decoration-none text-light"> {/* Black background */}
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold" style={{ color: "white" }}>Good Wish</h5> {/* White text */}
              <p className="text-white" style={{ color: "white" }}>The Good Wish Engineering</p> {/* White text */}
            </div>

            <div className="col-md-3 mb-4 justify-content-center">
              <h5 className="fw-bold" style={{ color: "white" }}>About Us</h5> {/* White text */}
              <ul className="list-unstyled text-white">
                <li><a href="#" className="text-white">Our History</a></li> {/* White text */}
                <li><a href="#" className="text-white">What We Believe</a></li> {/* White text */}
                <li><a href="#" className="text-white">Our Programs</a></li> {/* White text */}
                <li><a href="#" className="text-white">Partners</a></li> {/* White text */}
              </ul>
            </div>

            <div className="col-md-3 mb-4 justify-content-center" style={{ marginLeft: "15px", marginRight: "20px" }}>
              <h5 className="fw-bold" style={{ color: "white" }}>Contact Info</h5> {/* White text */}
              <address className="text-white" style={{ color: "white" }}>
                Kupindol, Lalitpur <br />
                +977 9830456572<br />
                goodwish@56gmail.com
              </address>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <hr className="my-4" style={{ borderColor: "#444" }} />
            </div>

            <div className="col-auto">
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-2" style={{ borderColor: "white" }}>
                <i className="fab fa-facebook-f" style={{ color: "white" }}></i>
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm me-2" style={{ borderColor: "white" }}>
                <i className="fab fa-twitter" style={{ color: "white" }}></i>
              </a>
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm me-2" style={{ borderColor: "white" }}>
                <i className="fab fa-instagram" style={{ color: "white" }}></i>
              </a>
              <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger btn-sm" style={{ borderColor: "white" }}>
                <i className="fab fa-youtube" style={{ color: "white" }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
