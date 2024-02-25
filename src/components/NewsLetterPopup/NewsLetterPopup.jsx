import React, { useState } from 'react';
import './NewsLetterPopup.css';


const NewsletterPopup = () => {
  const [email, setEmail] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setShowPopup(false);
    setShowMessage(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      {showPopup && (
        <div className="modal-overlay">
          <div className="newsletter-popup">
            <button className="close-button" onClick={closePopup}>
              X
            </button>

            <div className="popup-content">
            <div className="popup-image">
  <img src='./src/assets/baby.png' alt='girl' />
</div>


              <div className="popup-text">
                <h className="newsletter-heading">Subscribe & Save 20%!</h>
                <p className='newsletter-paragraph'>
                  Join Primark´s newsletter for exclusive offers, updates, and a 20%
                  discount on your first purchase!
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    aria-label="Email Address"
                  />

                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consentGiven}
                      onChange={() => setConsentGiven(!consentGiven)}
                      aria-checked={consentGiven}
                    />
                    <label htmlFor="consent" id="consentLabel">
                      I consent to my email being used for exclusive offers and
                      updates only.
                    </label>
                  </div>

                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {showMessage && (
        <div className="subscription-message">
          <button className="close-button" onClick={closeMessage}>
            X
          </button>
          Thank you for your subscription! Your unique discount code will be
          sent via your email.
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;