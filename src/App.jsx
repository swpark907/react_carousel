import React from 'react';
import './App.css'
import images from './images';

const App = () => {
  return (
    <div className='App'>
      <div className="container">
      <div className="carousel">
        {images.map((image) => 
          <div className="item">
            <img className="image" src={image} alt={image} />
          </div>
        )}
      </div>
      <div className="btn-container">
        <button className="prev">prev</button>
        <button className="next">next</button>
      </div>
      </div>
    </div>
  );
};

export default App;