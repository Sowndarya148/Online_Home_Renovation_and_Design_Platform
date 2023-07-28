import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import '../styles/contact.css';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation - checking for empty fields
    const errors = {};
    for (const field in formData) {
      if (formData[field] === '') {
        errors[field] = 'This field is required.';
      }
    }
    setFormErrors(errors);

    // If there are no errors, submit the form data and show the success message
    if (Object.keys(errors).length === 0) {
      // Here, you can perform any necessary actions with the form data, such as submitting it to the server.

      // For this example, we'll just set a flag to indicate that the form is submitted successfully.
      setIsSubmitted(true);
    }
  };

  return (
    <div className="contact-page-con">
    <Container maxWidth="sm">
      <Paper elevation={3} className="contact-page">
        {isSubmitted ? (
          <div className="success-message">
            <h2>Thank you for your submission!</h2>
            <p>We will get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="contact-title">Let’s connect, Shall we?</h2>
            <p>We are always here for you. Write to us regarding your concerns and we will get back to you.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group-con">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
              </div>

              <div className="form-group-con">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
              </div>

              <div className="form-group-con">
                <label htmlFor="mobileNumber">Mobile Number *</label>
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
                {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
              </div>

              <div className="form-group-con">
                <label htmlFor="emailAddress">Email Address *</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
                {formErrors.emailAddress && <span className="error">{formErrors.emailAddress}</span>}
              </div>

              <div className="form-group-con">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
            
          </>
         
        )}
     
      </Paper>
    </Container>
    </div>
  );
};

export default ContactPage;
