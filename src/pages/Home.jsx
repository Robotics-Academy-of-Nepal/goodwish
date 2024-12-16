import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/image.png";
import elp from "../assets/Ellipse 3.png";
import card from "../assets/card.jpg";
import car from "../assets/card2.jpg"
import ca from "../assets/card3.jpg"

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMoreAboutUs = () => {
    navigate('/aboutus');
  };

  const handleLearnMoreOurwork = () => {
    navigate('/ourwork');
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
            height: '60vh', // Section height
            position: 'relative',
          }}
        >
          {/* Background Image on the Left */}
          <div
            style={{
              position: 'absolute',
              left: 0, // Move image to the left
              top: 0,
              bottom: 0,
              width: '40%', // Occupies 40% of the width
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
              right: 0, // Align ellipse to the right
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1, // Keeps ellipse on top of background
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
              zIndex: 2, // Make sure text is above the ellipse
              color: 'black',
              position: 'absolute',
              left: '45%', // Push the text further right to bring part inside the ellipse
              top: '50%',
              transform: 'translateY(-50%)', // Center vertically
              maxWidth: '600px',
              padding: '20px',
              whiteSpace: 'pre-line', // Ensure text formatting (line breaks)
              textAlign: 'center', // Ensure the text is centered
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
                style={{ border: 'none', display: 'block', margin: '0 auto' }} // Center the button
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* card */}
        <div className="container" style={{background}}>
          <h1 className='text-center text-light '>Our Work</h1>
          <div className="row">
      <div className="col-6 col-md-4">
        <img src={card} alt='cards'></img>
      </div>
      <div className="col-6 col-md-4">
        <img src={car} alt='cards'></img>
      </div>
      <div className="col-6 col-md-4">
       <img src={ca} alt='cardss'></img>
      </div>
    </div>
        </div>
      </main>
    </>
  );
};

export default Home;
