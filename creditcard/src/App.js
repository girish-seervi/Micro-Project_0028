import React, { useState } from 'react';
import CreditCard from './components/CreditCard';
import CardForm from './components/CardForm';
import SuccessView from './components/SuccessView';
import Toast from './components/Toast';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });

  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Can't be blank";
    }

    const rawNumber = formData.number.replace(/\s+/g, '');
    if (!formData.number.trim()) {
      newErrors.number = "Can't be blank";
    } else if (!/^\d+$/.test(rawNumber)) {
      newErrors.number = "Wrong format, numbers only";
    } else if (rawNumber.length !== 16) {
      newErrors.number = "Must be 16 digits";
    }

    if (!formData.month.trim()) {
      newErrors.month = "Can't be blank";
    } else {
      const monthNum = parseInt(formData.month, 10);
      if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
        newErrors.month = "Must be valid month (01-12)";
      }
    }

    if (!formData.year.trim()) {
      newErrors.year = "Can't be blank";
    } else if (formData.year.length !== 2) {
      newErrors.year = "Must be 2 digits";
    }

    if (!formData.cvc.trim()) {
      newErrors.cvc = "Can't be blank";
    } else if (!/^\d+$/.test(formData.cvc)) {
      newErrors.cvc = "Wrong format, numbers only";
    } else if (formData.cvc.length < 3 || formData.cvc.length > 4) {
      newErrors.cvc = "Must be 3 or 4 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setCardData({ ...formData });
      setIsSubmitted(true);
      setShowToast(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: ''
    });
    setCardData({
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {showToast && (
        <Toast
          message="Card details updated and saved successfully!"
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Left Sidebar Background */}
      <section className="sidebar" aria-label="Sidebar background" />

      {/* Credit Cards Overlay (positioned over border between sidebar & main content) */}
      <CreditCard cardData={isSubmitted ? cardData : formData} />

      {/* Right Main Content Form */}
      <main className="main-content">
        <div className="form-wrapper">
          {isSubmitted ? (
            <SuccessView onReset={handleReset} />
          ) : (
            <CardForm
              formData={formData}
              errors={errors}
              onChange={handleInputChange}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
