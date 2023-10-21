import React from 'react';

const ColorDisplay = ({ selectedColor }) => {
  return (
    <div className='box' style={{ backgroundColor: selectedColor }}>
      <p className='text'>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorDisplay;