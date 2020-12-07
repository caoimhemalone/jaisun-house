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

class ContactForm extends Component { 

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
      i_require : [],
      company_name: '',
      company_address_name: '',
      formErrors: {
        name: '',
        email: '',
        phone: '',
        datetime: '',
        subject: '',
        message: '',
        interested_in: [],
        i_require:[],
        company_name: '',
        company_address_name: ''
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
      const { name, email, phone, datetime, subject, message, interested_in, i_require, company_name, company_address_name} = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        phone: phone,
        datetime: datetime,
        subject: subject,
        message: message,
        interested_in: interested_in,
        i_require: i_require,
        company_name: company_name,
        company_address_name: company_address_name
      };

      emailjs.send('service_662pzke', 'template_xtc7lrp', templateParams, 'user_5uqyqAaIiZdCW43R2ytVL');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        DateTime: ${datetime}
        Subject: ${subject}
        Message: ${message}
        Interested In: ${interested_in}
        I Require: ${i_require}
        Company Name: ${company_name}
        Company Address: ${company_address_name}
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
      interested_in: [],
      i_require: [],
      company_name: '',
      company_address_name: ''
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
      case 'company_name':
        formErrors.name = value.length < 1 ? 'Please enter your Companies name.' : '';
        break;
      case 'company_address_name':
        formErrors.name = value.length < 1 ? 'Please enter your Companies Address.' : '';
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

  handleCheckboxChangeTwo = event => {
    let newArray = [...this.state.i_require, event.target.id];
    if (this.state.i_require.includes(event.target.id)) {
      newArray = newArray.filter(day => day !== event.target.id);
    }
    this.setState({
      i_require: newArray
    });
  };

  render() {
    const { formErrors, isLoaded } = this.state;

    if(isLoaded) {
      return (
        <div className='ContactForm'>
          <form id='contact-form' className="contact-form" onSubmit={this.handleSubmit} noValidate>
            <div className="form-top">
              <div className="form-left">
                <div className="form-group">
                  <span>Company Details</span>
                  <Row>
                    <Col xs={12} md={12}>
                      {/* Company Name */}
                      <label htmlFor="company_name">Company Name *</label>
                      <input
                        type='text'
                        name='company_name'
                        value={this.state.company_name}
                        className={`form-control formInput ${formErrors.company_name.length > 0 ? 'error' : null}`}
                        onChange={this.handleChange}
                        noValidate
                        required
                      ></input>
                      {formErrors.company_name.length > 0 && (
                        <span className='errorMessage'>{formErrors.company_name}</span>
                      )}
                    </Col>

                    <Col xs={12} md={12}>
                      {/* Company Address */}
                      <label htmlFor="address">Registered Company Address *</label>
                      <input
                        type='text'
                        name='company_address_name'
                        value={this.state.company_address_name}
                        className={`form-control formInput ${formErrors.company_address_name.length > 0 ? 'error' : null}`}
                        onChange={this.handleChange}
                        noValidate
                        required
                      ></input>
                      {formErrors.company_address_name.length > 0 && (
                        <span className='errorMessage'>{formErrors.company_address_name}</span>
                      )}
                    </Col>
                    <Col xs={12} md={12}>
                      <label htmlFor="address 2">Address2</label>
                      <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
                        onChange={this.handleChange}
                        noValidate
                      ></input>
                      {formErrors.name.length > 0 && (
                        <span className='errorMessage'>{formErrors.name}</span>
                      )}

                      <label htmlFor="town">Town/City*</label>
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

                      <label htmlFor="county">County/State</label>
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

                      <label htmlFor="postcode">Postcode/Zip*</label>
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

                      <label htmlFor="country">Country *</label>
                      {/* <input type="text" className="form-control" required/> */}
                      <select id="country" name="country" required>
                        <option value="Ireland">Ireland</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="USA">USA</option>
                      </select>
                    </Col>
                  </Row>

                  <Row>
                  <span>Contact Details</span>
                  <label htmlFor="name">Contact Name *</label>
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
                  </Row>
                </div>
              </div>

              <div className="form-right">
                {/* <div className="form-group">
                  <span>Other Details</span>
                  <Row>
                    <Col xs={12} md={12}>
                      <label className="lbl-heading">I am interested in *</label>
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
                </div> */}

                <div className="form-group">
                  <label>I require</label>
                  <br/>

                  <input type="checkbox" id="To Book an appointment to view our collection" name="To Book an appointment to view our collection" value="To Book an appointment to view our collection" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="To Book an appointment to view our collection">To Book an appointment to view our collection</label>
                  <br/>

                  <input type="checkbox" id="To Arrange a meeting for more information" name="To Arrange a meeting for more information" value="To Arrange a meeting for more information" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="To Arrange a meeting for more information">To Arrange a meeting for more information</label>
                  <br/>

                  <input type="checkbox" id="Brand Marketing & Imagery" name="Brand Marketing & Imagery" value="Brand Marketing & Imagery" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="Brand Marketing & Imagery">Brand Marketing & Imagery</label>
                  <br/>

                  <input type="checkbox" id="Retail Consultancy" name="Retail Consultancy" value="Retail Consultancy" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="Retail Consultancy">Retail Consultancy</label>
                  <br/>

                  <input type="checkbox" id="Long Term Partnership & Wholesale" name="Long Term Partnership & Wholesale" value="Long Term Partnership & Wholesale" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="Long Term Partnership & Wholesale">Long Term Partnership & Wholesale</label>
                  <br/>

                  <input type="checkbox" id="Marketing & PR" name="Marketing & PR" value="Marketing & PR" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="Marketing & PR">Marketing & PR</label>
                  <br/>

                  <input type="checkbox" id="A General Inquiry" name="A General Inquiry" value="A General Inquiry" onChange={this.handleCheckboxChangeTwo}/>
                  <label className="cbox" htmlFor="A General Inquiry">A General Inquiry</label>
                  <br/>
                </div>

              
                <div className="form-group">
                  <Row>
                  <Col xs={12} md={12}>
                    <label htmlFor="message">Other Details</label>
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
                  </Row>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <ToastContainer />
        </div>
      );
    } return null;
  }
}

export default ContactForm;