import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import AboutUs from './AboutUs.jsx';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-overlay">
            <div className="landing-content">
              <h1>Paradise Nursery</h1>
              <p className="tagline">Where green meets serenity</p>
              <button className="get-started-button" onClick={() => setShowProductList(true)}>
                Get Started
              </button>
            </div>
            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;
