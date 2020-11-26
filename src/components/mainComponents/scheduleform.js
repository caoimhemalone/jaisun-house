import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class ScheduleForm extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      datetime: '',
      subject: '',
      message: '',
      interested_in: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        datetime: '',
        subject: '',
        message: '',
        interested_in: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, phone, datetime, subject, message, interested_in } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        phone: phone,
        datetime: datetime,
        subject: subject,
        message: message,
        interested_in: interested_in
      };

      emailjs.send('jaisunhouse', 'template_q00n2ej', templateParams, 'user_rL2sIdGQmwVgU3jn1H7Rj');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        DateTime: ${datetime}
        Subject: ${subject}
        Message: ${message}
        InterestedIn: ${interested_in}
      `);
      
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      datetime: '',
      subject: '',
      message: '',
      interested_in: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };
  render() {
    const { formErrors } = this.state;

    return (
      <div className='ContactForm'>
        <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
          <Row>
            <Col xs={12} md={12}>
              <input
                type='text'
                name='name'
                value={this.state.name}
                className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Name'
                noValidate
              ></input>
              {formErrors.name.length > 0 && (
                <span className='errorMessage'>{formErrors.name}</span>
              )}
            </Col>

            <Col xs={12} md={12}>
              <input
                type='email'
                name='email'
                value={this.state.email}
                className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Email'
                noValidate
              ></input>
              {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </Col>

            <Col xs={12} md={12}>
              <input
                type='number'
                name='phone'
                value={this.state.phone}
                className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Phone'
                noValidate
              ></input>
              {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </Col>

            <Col xs={12} md={12}>
              <input
                type='datetime-local'
                name='datetime'
                value={this.state.datetime}
                className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                onChange={this.handleChange}
                placeholder='Date and Time'
                noValidate
              ></input>
              {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
            </Col>
        
            <Col xs={12} md={12}>
              <input
                type='subject'
                name='subject'
                value={this.state.subject}
                className={`form-control formInput ${
                  formErrors.subject.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Subject'
                noValidate
              ></input>
              {formErrors.subject.length > 0 && (
                <span className='errorMessage'>{formErrors.subject}</span>
              )}
            </Col>

            <Col xs={12} md={12}>
              <textarea
                rows='5'
                name='message'
                value={this.state.message}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Message'
                noValidate
              ></textarea>
              {formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
              )}
            </Col>

            <Col xs={12} md={12}>
              <textarea
                rows='5'
                name='interested_in'
                value={this.state.interested_in}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? 'error' : null
                }`}
                onChange={this.handleChange}
                placeholder='Interested In'
                noValidate
              ></textarea>
              {formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
              )}
            </Col>
          </Row>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default ScheduleForm;