import React from 'react';
import bar from '../assets/Group.png';
import robot from '../assets/DanceBot-3-Med.gif';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-white px-4">
      {/* Full Width First Image */}
      <div className="w-100">
        <img
          src={bar}
          alt="Under Construction"
          className="w-100"
        />
      </div>

      {/* Text and Robot Image in Same Row */}
      <div className="container-fluid py-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-4 font-weight-bold text-black">
              THIS PAGE IS UNDER CONSTRUCTION
            </h1>
            <p className="lead text-gray-700">
              Please come back later!
            </p>
            <Link to="/">
              <button className="mt-4 px-4 py-2 btn btn-dark">
                Return to Home
              </button>
            </Link>
          </div>

          {/* Robot Image Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src={robot}
              alt="Under Construction Robot"
              className="w-50 w-md-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
