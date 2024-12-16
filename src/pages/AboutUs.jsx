import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import imgs from '../assets/Group.png';
import dance from '../assets/DanceBot-3-Med.gif';

const AboutUs = () => {
   const navigate = useNavigate();
  
    const handleLearnMoreHome = () => {
      navigate('/home');
    };

  return (
    <div className="group" style={{ overflow: 'hidden', position: 'relative' }}>
      <img src={imgs} alt="Groups" />

      <div className="text">
        <strong>
          <h1>
            THIS PAGE IS <br />
            UNDER CONSTRUCTION
          </h1>
        </strong>
        <h3>Please come back later!</h3>
        
        <img 
          src={dance} 
          alt="Dance" 
          style={{ float: 'right', marginLeft: '20px' }} 
        />
      </div>

      <Link to ="/">
      <button
        className="btn btn-dark mt-3"
        onClick={handleLearnMoreHome}
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          border: 'none',
          display: 'block'
        }}
      >
        Learn More
      </button>
      </Link>

      <div className="end">
        <img src={imgs} alt="ended" />
      </div>
    </div>
  );
};

export default AboutUs;
