import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  const roundedRating = Math.round(rating);

  for (let i = 0; i < roundedRating; i++) {
    stars.push(<span key={i}>&#9733;</span>); // Full star
  }

  while (stars.length < 5) {
    stars.push(<span key={stars.length + 1}>&#9734;</span>); // Empty star
  }

  return <div className='text-2xl'>{stars}</div>;
};

export default StarRating;