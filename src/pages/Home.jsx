import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from "../assets/image.png";
import elp from "../assets/Ellipse 3.png";
import card from "../assets/card.jpg";
import car from "../assets/card2.jpg";
import ca from "../assets/card3.jpg";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreAboutUs = () => {
    navigate('/aboutus');
  };

  const handleLearnMoreOurwork = () => {
    navigate('/ourwork');
  };

  // Define background for the container
  const containerBackground = {
    backgroundColor: 'black',
  };

  return (
    <>
      {/* Main Section */}
      <main
        className="position-relative"
        style={{
          backgroundColor: 'white',
          minHeight: '65vh',
        }}
      >
        <section
          className="d-flex justify-content-center align-items-center"
          style={{
            height: '60vh',
            position: 'relative',
          }}
        >
          {/* Background Image on the Left */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '40%',
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          {/* Ellipse Image on the Right */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          >
            <img
              src={elp}
              alt="Ellipse"
              style={{
                width: '150px',
                height: 'auto',
              }}
            />
          </div>

          {/* Centered Text Content */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              zIndex: 2,
              color: 'black',
              position: 'absolute',
              left: '45%',
              top: '50%',
              transform: 'translateY(-50%)',
              maxWidth: '600px',
              padding: '20px',
              whiteSpace: 'pre-line',
              textAlign: 'center',
            }}
          >
            <div>
              <h1 style={{ fontWeight: 'bold', fontSize: '36px' }}>About Us</h1>
              <p style={{ fontSize: '18px' }}>
                Goodwish Engineering is a forward-thinking technology company specializing in website development and AI-powered solutions. We are dedicated to creating innovative and user-friendly websites, such as the Guthi Website and Hansadhwani Website, alongside cutting-edge AI products like Document Analysis tools. Our goal is to harness the power of technology to streamline processes and deliver high-impact solutions.  
                As a sister company of RAN (Robotics Academy of Nepal), a pioneer in the field of robotics, Goodwish Engineering integrates expertise from both the world of robotics and AI to build products that not only meet but exceed client expectations. Together, we work towards advancing technology that improves businesses, communities, and industries.
              </p>
              <button
                className="btn btn-dark mt-3"
                onClick={handleLearnMoreAboutUs}
                style={{ border: 'none', display: 'block', margin: '0 auto' }}
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <div
          className="container-fluid mt-4 p-4 mx-auto"
          style={{
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          <h1 className="text-center text-light mb-4">Our Work</h1>

          {/* Centered single row for the cards */}
          <div className="row d-flex justify-content-center align-items-center">
            {/* Card 1 */}
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <Link to="https://ocr.goodwish.com.np/">
                <img
                  src={card}
                  alt="Card 1"
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '8px',
                  }}
                />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <Link to="https://hansadhwani.sanskritigram.org/">
                <img
                  src={car}
                  alt="Card 2"
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '8px',
                  }}
                />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <Link to="https://guthisansthan.org.np/">
                <img
                  src={ca}
                  alt="Card 3"
                  style={{
                    width: '100%',
                    maxWidth: '300px',
                    borderRadius: '8px',
                  }}
                />
              </Link>
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default Home;
