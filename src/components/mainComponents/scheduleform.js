import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';


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
      interested_in: [],
      formErrors: {
        name: '',
        email: '',
        phone: '',
        datetime: '',
        subject: '',
        message: '',
        interested_in: [],
      },
      scheduletable: [],
      contact: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios.get("http://www.jaisunhouse.com/wp/wp-json/wp/v2/schedule/79")
        .then(res => this.setState({
        scheduletable: res.data,
        appt_msg: res.data.acf.appt_msg,
        isLoaded: true
        }))
    .catch(error => console.log(error));
    //console.log(this.state.scheduletable);
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
    toast.error('Form failed to send! Please fill out all fields with *', {
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
      const { name, email, phone, datetime, subject, message, interested_in} = this.state;

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

      emailjs.send('service_662pzke', 'template_qdfhleg', templateParams, 'user_5uqyqAaIiZdCW43R2ytVL');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        DateTime: ${datetime}
        Subject: ${subject}
        Message: ${message}
        Interested In: ${interested_in}
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
      interested_in: []
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

  handleCheckboxChange = event => {
    let newArray = [...this.state.interested_in, event.target.id];
    if (this.state.interested_in.includes(event.target.id)) {
      newArray = newArray.filter(day => day !== event.target.id);
    }
    this.setState({
      interested_in: newArray
    });
  };

  render() {
    const { formErrors, isLoaded } = this.state;

    if(isLoaded) {
      return (
        <div className='ContactForm'>
          <form id='contact-form' className="contact-form" onSubmit={this.handleSubmit} noValidate>
            <Row>
              <Col xs={12} md={12}>
                <label htmlFor="name">Name *</label>
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                  onChange={this.handleChange}
                  noValidate
                  required
                ></input>
                {formErrors.name.length > 0 && (
                  <span className='errorMessage'>{formErrors.name}</span>
                )}
              </Col>

              <Col xs={12} md={12}>
                <label htmlFor="email">Email *</label>
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                  onChange={this.handleChange}
                  noValidate
                  required
                ></input>
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}
              </Col>

              <Col xs={12} md={12}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type='number'
                  name='phone'
                  value={this.state.phone}
                  className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                  onChange={this.handleChange}
                  noValidate
                  required
                ></input>
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}
              </Col>

              <Col xs={12} md={12}>
                <label htmlFor="meeting-time">Choose a time for your appointment: *</label>
                <input
                  type='datetime-local'
                  name='datetime'
                  value={this.state.datetime}
                  className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
                  id="meeting-time"
                  onChange={this.handleChange}
                  noValidate
                  required
                ></input>
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}
              </Col>
          
              <Col xs={12} md={12}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type='subject'
                  name='subject'
                  value={this.state.subject}
                  className={`form-control formInput ${
                    formErrors.subject.length > 0 ? 'error' : null
                  }`}
                  onChange={this.handleChange}
                  noValidate
                  required
                ></input>
                {formErrors.subject.length > 0 && (
                  <span className='errorMessage'>{formErrors.subject}</span>
                )}
              </Col>

              <Col xs={12} md={12}>
                <label htmlFor="message">Comments/Questions *</label>
                <textarea
                  rows='5'
                  name='message'
                  value={this.state.message}
                  className={`form-control formInput ${
                    formErrors.message.length > 0 ? 'error' : null
                  }`}
                  onChange={this.handleChange}
                  noValidate
                  required
                ></textarea>
                {formErrors.message.length > 0 && (
                  <span className='errorMessage'>{formErrors.message}</span>
                )}
              </Col>

              <Col xs={12} md={12}>
                {/* <textarea
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
                )} */}

                <label>I am interested in *</label>
                <br/>
                <div className="cbox-right">
                  {this.state.scheduletable.acf.form_brand_6 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_6} name={this.state.scheduletable.acf.form_brand_6} value={this.state.scheduletable.acf.form_brand_6} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_6} className="cbox-label">{this.state.scheduletable.acf.form_brand_6}</label>
                        <br/>
                      </div>
                    ) : null
                  }

                  {this.state.scheduletable.acf.form_brand_7 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_7} name={this.state.scheduletable.acf.form_brand_7} value={this.state.scheduletable.acf.form_brand_7} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_7} className="cbox-label">{this.state.scheduletable.acf.form_brand_7}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_8 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_8} name={this.state.scheduletable.acf.form_brand_8} value={this.state.scheduletable.acf.form_brand_8} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_8} className="cbox-label">{this.state.scheduletable.acf.form_brand_8}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_9 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_9} name={this.state.scheduletable.acf.form_brand_9} value={this.state.scheduletable.acf.form_brand_9} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_9} className="cbox-label">{this.state.scheduletable.acf.form_brand_9}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_10 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_10} name={this.state.scheduletable.acf.form_brand_10} value={this.state.scheduletable.acf.form_brand_10} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_10} className="cbox-label">{this.state.scheduletable.acf.form_brand_10}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_11 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_11} name={this.state.scheduletable.acf.form_brand_11} value={this.state.scheduletable.acf.form_brand_11} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_11} className="cbox-label">{this.state.scheduletable.acf.form_brand_11}</label>
                        <br/>
                      </div>
                    ) : null
                  }  

                  {this.state.scheduletable.acf.form_brand_12 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_12} name={this.state.scheduletable.acf.form_brand_12} value={this.state.scheduletable.acf.form_brand_12} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_12} className="cbox-label">{this.state.scheduletable.acf.form_brand_12}</label>
                        <br/>
                      </div>
                    ) : null
                  }  

                  {this.state.scheduletable.acf.form_brand_13 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_13} name={this.state.scheduletable.acf.form_brand_13} value={this.state.scheduletable.acf.form_brand_13} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_13} className="cbox-label">{this.state.scheduletable.acf.form_brand_13}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_14 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_14} name={this.state.scheduletable.acf.form_brand_14} value={this.state.scheduletable.acf.form_brand_14} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_14} className="cbox-label">{this.state.scheduletable.acf.form_brand_14}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_15 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_15} name={this.state.scheduletable.acf.form_brand_15} value={this.state.scheduletable.acf.form_brand_15} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_15} className="cbox-label">{this.state.scheduletable.acf.form_brand_15}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_16 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_16} name={this.state.scheduletable.acf.form_brand_16} value={this.state.scheduletable.acf.form_brand_16} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_16} className="cbox-label">{this.state.scheduletable.acf.form_brand_16}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_17 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_17} name={this.state.scheduletable.acf.form_brand_17} value={this.state.scheduletable.acf.form_brand_17} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_17} className="cbox-label">{this.state.scheduletable.acf.form_brand_17}</label>
                        <br/>
                      </div>
                    ) : null
                  } 
                </div>  
                <div className="cbox-left">
                  {this.state.scheduletable.acf.form_brand_1 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_1} name={this.state.scheduletable.acf.form_brand_1} value={this.state.scheduletable.acf.form_brand_1} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_1} className="cbox-label">{this.state.scheduletable.acf.form_brand_1}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_2 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_2} name={this.state.scheduletable.acf.form_brand_2} value={this.state.scheduletable.acf.form_brand_2} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_2} className="cbox-label">{this.state.scheduletable.acf.form_brand_2}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_3 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_3} name={this.state.scheduletable.acf.form_brand_3} value={this.state.scheduletable.acf.form_brand_3} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_3} className="cbox-label">{this.state.scheduletable.acf.form_brand_3}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_4 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_4} name={this.state.scheduletable.acf.form_brand_4} value={this.state.scheduletable.acf.form_brand_4} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_4} className="cbox-label">{this.state.scheduletable.acf.form_brand_4}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_5 ? (
                      <div className="checkbox-item">
                        <input type="checkbox" id={this.state.scheduletable.acf.form_brand_5} name={this.state.scheduletable.acf.form_brand_5} value={this.state.scheduletable.acf.form_brand_5} onChange={this.handleCheckboxChange}/>
                        <label htmlFor={this.state.scheduletable.acf.form_brand_5} className="cbox-label">{this.state.scheduletable.acf.form_brand_5}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  <input type="checkbox" id="General Inquiry" name="General Inquiry" value="General Inquiry" onChange={this.handleCheckboxChange}/>
                  <label htmlFor="General Inquiry" className="cbox-label">General Inquiry</label>   
                </div>
              </Col>
            </Row>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <ToastContainer />
        </div>
      );
    } return null;
  }
}

export default ScheduleForm;