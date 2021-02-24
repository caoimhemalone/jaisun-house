import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactGA from "react-ga";



//pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Brands from '../../pages/Brands';
import IndBrand from '../../pages/IndBrand';
import Schedule from '../../pages/Schedule';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import Sitemap from '../../pages/Sitemap';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import Terms from '../../pages/Terms';

//images
import Logo from '../../assets/images/logos/logo192.png';



class Nav extends React.Component {
    state = {
        isSubNavVisible: false
    }


    componentDidMount() {
        const brandUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand';
    
        fetch(brandUrl)
        .then(response => response.json())
        .then(response => {
          //console.log(response);
          response.sort((a, b) => parseFloat(a.acf['order_no']) - parseFloat(b.acf['order_no']));
          this.setState({
            brands: response,
            isLoaded: true
          })
        })
    }

    constructor() {
        super();
        ReactGA.initialize("UA-111422776-1");
        ReactGA.pageview(window.location.pathname);
        this.state = {
            brands: [],
            isLoaded: false,
        }
    }

    toggleSubNav = () => {
        this.setState(prevState => ({ isSubNavVisible: !prevState.isSubNavVisible }));
      };

    render(){
        const hist = createBrowserHistory();

        const {brands, isLoaded } = this.state;

        const { isSubNavVisible } = this.state;

        let brandLoop = brands.map((brand, index)=> {
            let link = brand.slug
            return (
                <li className="sub-nav-item" key={ Math.random().toString(36).substr(2, 9) }>
                    <a href={link}>
                        <img src={brand.acf.tile_image} alt={brand.title.rendered}/>
                        <span><u>{brand.title.rendered}</u></span>
                    </a>
                </li>
            )
        })
        console.log(this.state.hamburger);

        return (
            <div>
                <BrowserRouter history={hist}>
                    <nav>
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger">
                            {/* <div style={{background: this.state.hamburger}}></div> */}
                            <div></div>
                        </div>
                        <Grid fluid className="menu">
                            <Row className="mx-0">
                                <Col xs={12} md={2} className="nav-left">
                                <a href="/">
                                    <img src={Logo} alt="logo" style={{height: this.state.logo, transition: '4s ease-in'}}/>
                                </a>
                                </Col>
                                <Col xs={12} md={10} className="nav-right">
                                    <Row end="xs" middle="xs">
                                    <Col xs={12} md className="nav-item home-link"> 
                                            <a href="/">Home</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/about">About</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item brands-link"> 
                                            <a className="brands-link__desktop" href="/brands">Brands</a>
                                            <a className="brands-link__mobile" onClick={this.toggleSubNav}>Brands</a>

                                            <ul className={`sub-menu ${isSubNavVisible ? "" : "hidden"}`}>
                                                <li className="sub-nav-item all-brands">
                                                    <a href="/brands">
                                                        <span>ALL BRANDS</span>
                                                    </a>
                                                </li>
                                                {brandLoop}
                                            </ul>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/services">Services</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/schedule">Schedule</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/contact">Contact</a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>          
                        <Route path="/about" component={About}/>
                        <Route path="/brands" component={Brands}/>  
                        <Route path="/services" component={Services}/>
                        <Route path="/schedule" component={Schedule}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/sitemap" component={Sitemap}/>
                        <Route path="/privacy-policy" component={PrivacyPolicy}/>
                        <Route path="/terms-and-conditions" component={Terms}/>
                        <Route exact path="/:slug" component={IndBrand}/>
                    </Switch>          
                </BrowserRouter>
            </div>
        );
    }
}

export default Nav;