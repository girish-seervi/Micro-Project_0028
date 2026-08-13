import React from 'react';

const CardForm = ({
  formData,
  errors,
  onChange,
  onSubmit
}) => {
  const { name, number, month, year, cvc } = formData;

  const handleNumberInput = (e) => {
    let val = e.target.value.replace(/\D/g, ''); // Extract only digits
    if (val.length > 16) val = val.slice(0, 16);
    // Format with space every 4 digits
    const formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    onChange('number', formatted);
  };

  const handleMonthInput = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 2) val = val.slice(0, 2);
    onChange('month', val);
  };

  const handleYearInput = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 2) val = val.slice(0, 2);
    onChange('year', val);
  };

  const handleCvcInput = (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    onChange('cvc', val);
  };

  return (
    <form className="card-form" onSubmit={onSubmit} noValidate>
      {/* CARDHOLDER NAME */}
      <div className="form-group">
        <label htmlFor="card-name" className="form-label">
          CARDHOLDER NAME
        </label>
        <input
          id="card-name"
          type="text"
          className={`form-input ${errors.name ? 'input-error' : ''}`}
          placeholder="e.g. Jane Appleseed"
          value={name}
          onChange={(e) => onChange('name', e.target.value)}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      {/* CARD NUMBER */}
      <div className="form-group">
        <label htmlFor="card-number" className="form-label">
          CARD NUMBER
        </label>
        <input
          id="card-number"
          type="text"
          className={`form-input ${errors.number ? 'input-error' : ''}`}
          placeholder="e.g. 1234 5678 9123 0000"
          value={number}
          onChange={handleNumberInput}
          maxLength={19}
        />
        {errors.number && <span className="error-message">{errors.number}</span>}
      </div>

      {/* EXP DATE & CVC ROW */}
      <div className="form-row">
        {/* EXP DATE */}
        <div className="form-group exp-group">
          <label className="form-label">EXP. DATE (MM/YY)</label>
          <div className="exp-inputs">
            <input
              id="exp-month"
              type="text"
              className={`form-input ${errors.month || errors.date ? 'input-error' : ''}`}
              placeholder="MM"
              value={month}
              onChange={handleMonthInput}
              maxLength={2}
            />
            <input
              id="exp-year"
              type="text"
              className={`form-input ${errors.year || errors.date ? 'input-error' : ''}`}
              placeholder="YY"
              value={year}
              onChange={handleYearInput}
              maxLength={2}
            />
          </div>
          {(errors.month || errors.year || errors.date) && (
            <span className="error-message">
              {errors.month || errors.year || errors.date}
            </span>
          )}
        </div>

        {/* CVC */}
        <div className="form-group cvc-group">
          <label htmlFor="card-cvc" className="form-label">
            CVC
          </label>
          <input
            id="card-cvc"
            type="text"
            className={`form-input ${errors.cvc ? 'input-error' : ''}`}
            placeholder="e.g. 123"
            value={cvc}
            onChange={handleCvcInput}
            maxLength={4}
          />
          {errors.cvc && <span className="error-message">{errors.cvc}</span>}
        </div>
      </div>

      {/* CONFIRM BUTTON */}
      <button type="submit" className="btn-submit">
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
