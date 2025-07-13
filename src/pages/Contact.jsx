import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { AnimatedContainer } from '../Components/AnimatedContainer';
import { ButtonContainer } from '../Components/ButtonContainer';
import { CustomButton } from '../Components/CustomButton';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const saveToGoogleSheet = async (data) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzXXXXXXXXXXXXXXXXXXXX/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.user_name,
          email: data.user_email,
          subject: data.subject,
          message: data.message,
          date: new Date().toISOString()
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to save to Google Sheet');
      }
    } catch (error) {
      console.error('Error saving to Google Sheet:', error);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm('service_2wbpuc9', 'template_2wbpuc9', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        // Save to Google Sheet after successful email send
        saveToGoogleSheet(formData);
        // Reset form
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log(error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatedContainer>
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <ButtonContainer>
            <CustomButton
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </CustomButton>
          </ButtonContainer>
          {submitStatus === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="error-message">Failed to send message. Please try again.</p>
          )}
        </form>

        {/* Admin Link */}
        <div className="admin-link" style={{ marginTop: '20px', textAlign: 'center' }}>
          <a 
            href="https://docs.google.com/spreadsheets/d/119yjE2GHeIXJtJ18jSEB5ZlMTiBeIaK-yA4pwQdClrM/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#4db5ff', textDecoration: 'none' }}
          >
            View Contact Submissions
          </a>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default Contact; 