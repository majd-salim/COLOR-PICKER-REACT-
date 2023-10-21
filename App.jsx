import React, { useState } from 'react';
import './App.css';
import ColorPicker from './ColorsPicker.jsx';
import ColorDisplay from './ColorDisplay.jsx';

function App() {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1 className='title'>Color Picker App</h1>
      <ColorPicker onSelectColor={handleColorSelect} />
      <ColorDisplay selectedColor={selectedColor} />
    </div>
  );
}

export default App;