// Importing necessary dependencies and styles
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

// Form component
const Form = () => {
  // State variables for form fields and form validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Form validation function
  const validateForm = () => {
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!subject.trim()) {
      validationErrors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle input field onBlur event to check for errors
  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();

    if (!fieldValue) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: `${fieldName} is required` }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    }
  };

  // Handle input field onChange event and update respective state variables
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));

    if (fieldName === 'name') {
      setName(fieldValue);
    } else if (fieldName === 'email') {
      setEmail(fieldValue);
    } else if (fieldName === 'subject') {
      setSubject(fieldValue);
    } else if (fieldName === 'message') {
      setMessage(fieldValue);
    }
  };

  // Send email function on form submission
  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };

      emailjs
        .send('service_6klu6s6', 'template_x4m4js5', templateParams, 'i6DjiwqfbXB38cR85')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setIsSuccess(true);
          // Reset form fields and clear errors
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setErrors({});
          // Show success toast message
          toast.success('Email sent successfully!', {
            position: toast.POSITION.TOP_CENTER
          });
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Show error toast message
          toast.error('Error sending email. Please try again.', {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }
  };

  // JSX for the form component
  return (
    <div className="form">
      <form onSubmit={sendEmail}>
        {/* Name input field */}
        <label>Your Name</label>
        <input type="text" name="name" value={name} onBlur={handleBlur} onChange={handleChange} />
        {errors.name && <span className="error-message">{errors.name}</span>}

        {/* Email input field */}
        <label>Email Address</label>
        <input type="email" name="email" value={email} onBlur={handleBlur} onChange={handleChange} />
        {errors.email && <span className="error-message">{errors.email}</span>}

        {/* Subject input field */}
        <label>Subject</label>
        <input type="text" name="subject" value={subject} onBlur={handleBlur} onChange={handleChange} />
        {errors.subject && <span className="error-message">{errors.subject}</span>}

        {/* Message textarea */}
        <label>Message</label>
        <textarea name="message" rows="6" value={message} onBlur={handleBlur} onChange={handleChange} placeholder="Type your message here and I will get back to you!" />
        {errors.message && <span className="error-message">{errors.message}</span>}

        {/* Submit button */}
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      {/* Toast container for displaying success/error messages */}
      <ToastContainer />
    </div>
  );
};

// Exporting the Form component to be used elsewhere in the application
export default Form;