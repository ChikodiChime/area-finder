import React, { useState } from 'react';

interface RatingProps {
  value: number;
  onChange: (value: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value, onChange }) => {
  const maxRating = 5;
  const [hoverValue, setHoverValue] = useState(0);

  // Function to handle mouse enter event on a star
  const handleMouseEnter = (newValue: number) => {
    setHoverValue(newValue);
  };

  // Function to handle mouse leave event on a star
  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  // Function to handle click event on a star
  const handleClick = (newValue: number) => {
    onChange(newValue);
    // console.log(newValue)
  };

  // Function to generate stars based on the rating value
  const renderStars = () => {
    const starSize = 20;
    const clickedStarSize = 25;
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      const isFilled = i <= (hoverValue || value); // Check if the star should be filled or not
      const starStyle = {
        cursor: 'pointer',
        width: isFilled ? clickedStarSize : starSize, // Set different size for clicked stars
        height: isFilled ? clickedStarSize : starSize, // Set different size for clicked stars
        marginRight: '5px', // Add margin between stars
        transition: 'all ease-in-out .2s'
      };
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isFilled ? '#FFC700' : '#ffc80083'}
          stroke="currentColor"
          strokeWidth="0"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-star"
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
          style={starStyle}
        >
          <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2 z" />
        </svg>
      );
    }
    return <div className=" flex">{stars}</div>;
  };

  return <div className="rating ">{renderStars()}</div>;
};

export default Rating;
