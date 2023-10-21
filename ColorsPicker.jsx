import React, { useState } from 'react';

const ColorPicker = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    onSelectColor(color);
  };

  return (
    <div>
      <input className='what'
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker


