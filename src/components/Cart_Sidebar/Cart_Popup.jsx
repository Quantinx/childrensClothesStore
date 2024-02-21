import React from 'react';
import { usePopup } from '../../providers/useCartPopup';
import './Cart_Popup.css';

const Popup = () => {
  const { isOpen, togglePopup } = usePopup();

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={togglePopup}>Close</button>
      <div className="popup-content">
        {/* Add your content here */}
        <h2>Popup Content</h2>
        <p>This is a pop-up div on the right side of the page.</p>
      </div>
    </div>
  );
};

export default Popup;
