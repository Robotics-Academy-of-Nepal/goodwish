import React from 'react';
import './BackgroundImage.css';

const BackgroundImage = ({ currentPage }) => {
  // Check if the current page is not the homepage to apply a smaller background
  const isShrinkingBg = currentPage !== '/';

  return (
    <div
      className={`background-image ${isShrinkingBg ? 'shrinking' : ''}`}
    >
      {/* You can add content inside if needed */}
    </div>
  );
};

export default BackgroundImage;
