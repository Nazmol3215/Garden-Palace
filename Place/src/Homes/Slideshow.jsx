import React, { useState, useEffect } from 'react';
import picture from "../Images/i1.png";
import picture1 from "../Images/i4.png";
import picture2 from "../Images/i9.png";
import picture3 from "../Images/i12.png";





// Image Data Array
const images = [
    picture,
    picture1,
    picture2,
  picture3,
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change Slide Automatically after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  // Handle Manual Slide Change
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={styles.slideshowContainer}>
      <button style={styles.arrowButton} onClick={goToPrevious}>
        &#10094;
      </button>
      
      <div style={styles.slide}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={styles.slideImage} />
      </div>
      
      <button style={styles.arrowButton} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  slideshowContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    textAlign: 'center',
  },
  slideImage: {
    width: '100%',
    height: '222px',
    borderRadius: '10px',
  },
  arrowButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: 'none',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '20px',
    borderRadius: '50%',
    zIndex: 1,
  },
};

export default Slideshow;
