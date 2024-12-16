import { Link } from "react-router-dom";
import homeBg from '../assets/bg.jpg';
import whiteLogo from "../assets/white-logo.png";
import './Header.css';

const Header = ({ currentPage }) => {
  // Set background color and text color for the header
  const backgroundColor = currentPage === '/' ? 'white' : 'white'; // Background color is white for both
  const textColor = currentPage === '/' ? 'white' : 'black'; // Text color: white for home, black for others

  // Background image for home page only
  const backgroundImage = currentPage === '/' ? `url(${homeBg})` : 'none'; // Background image only for home

  // Adjust header height based on the current page
  const headerHeight =
    currentPage === '/' ? '100vh' : '25vh'; // Decreased header height for non-home pages

  return (
    <div
      className="header-container"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        height: headerHeight,
      }}
    >
      <div className="header-content d-flex justify-content-between align-items-center text-center" style={{ color: textColor }}>
        {/* Logo aligned to the left */}
        <div className="logo-container">
          <Link to="/">
            <img src={whiteLogo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Navbar centered */}
        <ul className="main-header-menu d-flex justify-content-center m-0 p-0">
          <li>
            <Link to="/" className={currentPage === '/' ? 'active blur-text' : 'blur-text'} style={{ color: textColor }}>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className={currentPage === '/aboutus' ? 'active blur-text' : 'blur-text'} style={{ color: textColor }}>About Us</Link>
          </li>
          <li>
            <Link to="/ourwork" className={currentPage === '/ourwork' ? 'active blur-text' : 'blur-text'} style={{ color: textColor }}>Our Work</Link>
          </li>
          <li>
            <Link to="/team" className={currentPage === '/team' ? 'active blur-text' : 'blur-text'} style={{ color: textColor }}>Team</Link>
          </li>
        </ul>

        {/* Empty placeholder div for alignment */}
        <div style={{ width: '80px' }}></div>
      </div>
    </div>
  );
};

export default Header;
