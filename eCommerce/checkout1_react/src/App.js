import React, { useState } from "react";

function App() {

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Card Number Formatting
  const handleCardNumber = (e) => {

    let value = e.target.value.replace(/\D/g, "");

    value = value.replace(/(.{4})/g, "$1 ").trim();

    setCardNumber(value);
  };

  // Expiry Formatting
  const handleExpiry = (e) => {

    let value = e.target.value.replace(/\D/g, "");

    if (value.length >= 3) {
      value =
        value.substring(0, 2) +
        "/" +
        value.substring(2, 4);
    }

    setExpiry(value);
  };

  // CVV Numbers Only
  const handleCVV = (e) => {

    let value = e.target.value.replace(/\D/g, "");

    setCvv(value);
  };

  // Fake Payment Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setSuccess(true);

    }, 1800);
  };

  return (

    <div className="checkout-container">

      {/* Apple Pay */}
      <button className="pay-btn apple-pay">
         Pay
      </button>

      {/* Google Pay */}
      <button className="pay-btn google-pay">
        <span className="google-g">G</span> Pay
      </button>

      {/* Card Section */}
      <div className="payment-card">

        <div className="card-header">

          <div className="left-side">

            <div className="card-icon">
              💳
            </div>

            <div>

              <h2>Card</h2>

              <div className="card-brands">

                <span className="visa">
                  VISA
                </span>

                <span className="mastercard"></span>

                <span className="amex">
                  AMEX
                </span>

              </div>

            </div>

          </div>

          <div className="radio-circle active"></div>

        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="form-group">

            <label>Name on card</label>

            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              required
            />

          </div>

          {/* Card Number */}
          <div className="form-group">

            <label>Card number</label>

            <div className="card-number-wrapper">

              <span className="mini-card"></span>

              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumber}
                maxLength="19"
                placeholder="1234 5678 9012 3456"
                required
              />

            </div>

          </div>

          {/* Bottom Row */}
          <div className="row">

            <div className="form-group half">

              <label>Expiry date</label>

              <span className="helper-text">
                Format is MM/YY
              </span>

              <input
                type="text"
                value={expiry}
                onChange={handleExpiry}
                maxLength="5"
                placeholder="MM/YY"
                required
              />

            </div>

            <div className="form-group half">

              <label>Security code (CVV)</label>

              <span className="helper-text">
                3 or 4 digit code on your card
              </span>

              <input
                type="password"
                value={cvv}
                onChange={handleCVV}
                maxLength="4"
                placeholder="123"
                required
              />

            </div>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-btn ${loading ? "loading" : ""}`}
          >

            {
              loading
                ? "Processing..."
                : success
                ? "Payment Successful ✓"
                : "Pay"
            }

          </button>

        </form>

      </div>

    </div>
  );
}

export default App;