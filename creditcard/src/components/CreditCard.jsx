import React from 'react';

const CreditCard = ({ cardData }) => {
  const {
    name = '',
    number = '',
    month = '',
    year = '',
    cvc = ''
  } = cardData || {};

  // Format card number with spaces (e.g. 0000 0000 0000 0000)
  const formatCardNumber = (num) => {
    if (!num) return '0000 0000 0000 0000';
    const cleanNum = num.replace(/\s+/g, '');
    const padded = cleanNum.padEnd(16, '0');
    return padded.match(/.{1,4}/g)?.join(' ') || '0000 0000 0000 0000';
  };

  const formattedName = name.trim() ? name.toUpperCase() : 'JANE APPLESEED';
  const formattedMonth = month ? month.padStart(2, '0') : '00';
  const formattedYear = year ? year.padStart(2, '0') : '00';
  const formattedCvc = cvc ? cvc : '000';

  return (
    <div className="cards-container">
      {/* Front of Card */}
      <div className="card card-front">
        <div className="card-front-content">
          <div className="card-logo">
            <span className="logo-circle-filled"></span>
            <span className="logo-circle-outlined"></span>
          </div>

          <div className="card-details">
            <div className="card-number-display">
              {formatCardNumber(number)}
            </div>
            <div className="card-info-bottom">
              <span className="card-holder-display">{formattedName}</span>
              <span className="card-expiry-display">
                {formattedMonth}/{formattedYear}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back of Card */}
      <div className="card card-back">
        <div className="card-back-content">
          <div className="magnetic-stripe"></div>
          <div className="cvc-bar">
            <span className="cvc-display">{formattedCvc}</span>
          </div>
          <div className="card-back-pattern">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
