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
      item1: '',
      item2: '',
      item3: '',
      item4: '',
      item5: '',
      item6: '',
      item7: '',
      item8: '',
      item9: '',
      item10: '',
      item11: '',
      item12: '',
      item13: '',
      item14: '',
      item15: '',
      item16: '',
      item17: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        datetime: '',
        subject: '',
        message: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
        item8: '',
        item9: '',
        item10: '',
        item11: '',
        item12: '',
        item13: '',
        item14: '',
        item15: '',
        item16: '',
        item17: '',
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
      const { name, email, phone, datetime, subject, message,  item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17 } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        phone: phone,
        datetime: datetime,
        subject: subject,
        message: message,
        item1: item1,
        item2: item2,
        item3: item3,
        item4: item4,
        item5: item5,
        item6: item6,
        item7: item7,
        item8: item8,
        item9: item9,
        item10: item10,
        item11: item11,
        item12: item12,
        item13: item13,
        item14: item14,
        item15: item15,
        item16: item16,
        item17: item17,
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
        Item_1: ${item1}
        Item_2: ${item2}
        Item_3: ${item3}
        Item_4: ${item4}
        Item_5: ${item5}
        Item_6: ${item6}
        Item_7: ${item7}
        Item_8: ${item8}
        Item_9: ${item9}
        Item_10: ${item10}
        Item_11: ${item11}
        Item_12: ${item12}
        Item_13: ${item13}
        Item_14: ${item14}
        Item_15: ${item15}
        Item_16: ${item16}
        Item_17: ${item17}
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
      item1: '',
      item2: '',
      item3: '',
      item4: '',
      item5: '',
      item6: '',
      item7: '',
      item8: '',
      item9: '',
      item10: '',
      item11: '',
      item12: '',
      item13: '',
      item14: '',
      item15: '',
      item16: '',
      item17: '',
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
    const { formErrors, isLoaded } = this.state;

    if(isLoaded) {
      return (
        <div className='ContactForm'>
          <form id='contact-form' onSubmit={this.handleSubmit} noValidate>
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
                ></input>
                {formErrors.email.length > 0 && (
                  <span className='errorMessage'>{formErrors.email}</span>
                )}
              </Col>

              <Col xs={12} md={12}>
                <label htmlFor="meeting-time">Choose a time for your appointment:</label>
                <input
                  type='datetime-local'
                  name='datetime'
                  value={this.state.datetime}
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
                <label htmlFor="message">Comments/Questions</label>
                <textarea
                  rows='5'
                  name='message'
                  value={this.state.message}
                  className={`form-control formInput ${
                    formErrors.message.length > 0 ? 'error' : null
                  }`}
                  onChange={this.handleChange}
                  noValidate
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
                      <div>
                        <input type="checkbox" id="item1" name="item1" value={this.state.scheduletable.acf.form_brand_6} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item1" className="cbox-label">{this.state.scheduletable.acf.form_brand_6}</label>
                        <br/>
                      </div>
                    ) : null
                  }

                  {this.state.scheduletable.acf.form_brand_7 ? (
                      <div>
                        <input type="checkbox" id="item2" name="item2" value={this.state.scheduletable.acf.form_brand_7} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item2" className="cbox-label">{this.state.scheduletable.acf.form_brand_7}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_8 ? (
                      <div>
                        <input type="checkbox" id="item3" name="item3" value={this.state.scheduletable.acf.form_brand_8} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item3" className="cbox-label">{this.state.scheduletable.acf.form_brand_8}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_9 ? (
                      <div>
                        <input type="checkbox" id="item4" name="item4" value={this.state.scheduletable.acf.form_brand_9} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item4" className="cbox-label">{this.state.scheduletable.acf.form_brand_9}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_10 ? (
                      <div>
                        <input type="checkbox" id="item5" name="item5" value={this.state.scheduletable.acf.form_brand_10} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item5" className="cbox-label">{this.state.scheduletable.acf.form_brand_10}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_11 ? (
                      <div>
                        <input type="checkbox" id="item6" name="item6" value={this.state.scheduletable.acf.form_brand_11} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item6" className="cbox-label">{this.state.scheduletable.acf.form_brand_11}</label>
                        <br/>
                      </div>
                    ) : null
                  }  

                  {this.state.scheduletable.acf.form_brand_12 ? (
                      <div>
                        <input type="checkbox" id="item7" name="item7" value={this.state.scheduletable.acf.form_brand_12} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item7" className="cbox-label">{this.state.scheduletable.acf.form_brand_12}</label>
                        <br/>
                      </div>
                    ) : null
                  }  

                  {this.state.scheduletable.acf.form_brand_13 ? (
                      <div>
                        <input type="checkbox" id="item8" name="item8" value={this.state.scheduletable.acf.form_brand_13} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item8" className="cbox-label">{this.state.scheduletable.acf.form_brand_13}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_14 ? (
                      <div>
                        <input type="checkbox" id="item9" name="item9" value={this.state.scheduletable.acf.form_brand_14} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item9" className="cbox-label">{this.state.scheduletable.acf.form_brand_14}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_15 ? (
                      <div>
                        <input type="checkbox" id="item10" name="item10" value={this.state.scheduletable.acf.form_brand_15} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item10" className="cbox-label">{this.state.scheduletable.acf.form_brand_15}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_16 ? (
                      <div>
                        <input type="checkbox" id="item11" name="item11" value={this.state.scheduletable.acf.form_brand_16} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item11" className="cbox-label">{this.state.scheduletable.acf.form_brand_16}</label>
                        <br/>
                      </div>
                    ) : null
                  } 

                  {this.state.scheduletable.acf.form_brand_17 ? (
                      <div>
                        <input type="checkbox" id="item12" name="item12" value={this.state.scheduletable.acf.form_brand_17} onChange={this.handleChange} noValidate/>
                        <label htmlFor="item7" className="cbox-label">{this.state.scheduletable.acf.form_brand_17}</label>
                        <br/>
                      </div>
                    ) : null
                  } 
                </div>  
                <div className="cbox-left">
                        {this.state.scheduletable.acf.form_brand_1 ? (
                            <div>
                              <input type="checkbox" id="item13" name="item13" value={this.state.scheduletable.acf.form_brand_1} onChange={this.handleChange} noValidate/>
                              <label htmlFor="item13" className="cbox-label">{this.state.scheduletable.acf.form_brand_1}</label>
                              <br/>
                            </div>
                          ) : null
                        } 

                        {this.state.scheduletable.acf.form_brand_2 ? (
                            <div>
                              <input type="checkbox" id="item14" name="item14" value={this.state.scheduletable.acf.form_brand_2} onChange={this.handleChange} noValidate/>
                              <label htmlFor="item14" className="cbox-label">{this.state.scheduletable.acf.form_brand_2}</label>
                              <br/>
                            </div>
                          ) : null
                        } 

                        {this.state.scheduletable.acf.form_brand_3 ? (
                            <div>
                              <input type="checkbox" id="item15" name="item15" value={this.state.scheduletable.acf.form_brand_3} onChange={this.handleChange} noValidate/>
                              <label htmlFor="item15" className="cbox-label">{this.state.scheduletable.acf.form_brand_3}</label>
                              <br/>
                            </div>
                          ) : null
                        } 

                        {this.state.scheduletable.acf.form_brand_4 ? (
                            <div>
                              <input type="checkbox" id="item16" name="item16" value={this.state.scheduletable.acf.form_brand_4} onChange={this.handleChange} noValidate/>
                              <label htmlFor="item16" className="cbox-label">{this.state.scheduletable.acf.form_brand_4}</label>
                              <br/>
                            </div>
                          ) : null
                        } 

                        {this.state.scheduletable.acf.form_brand_5 ? (
                            <div>
                              <input type="checkbox" id="item17" name="item17" value={this.state.scheduletable.acf.form_brand_5} onChange={this.handleChange} noValidate/>
                              <label htmlFor="item17" className="cbox-label">{this.state.scheduletable.acf.form_brand_5}</label>
                              <br/>
                            </div>
                          ) : null
                        } 

                        <input type="checkbox" id="item12" name="item12" value="General Inquiry" onChange={this.handleChange} noValidate/>
                        <label htmlFor="item12" className="cbox-label">General Inquiry</label>   
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