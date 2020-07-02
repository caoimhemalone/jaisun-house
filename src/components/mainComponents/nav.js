import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';


//pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Brands from '../../pages/Brands';
import IndBrand from '../../pages/IndBrand';
import B2B from '../../pages/B2B';
import Schedule from '../../pages/Schedule';
import Contact from '../../pages/Contact';
import Signin from '../../pages/Signin';
import Sitemap from '../../pages/Sitemap';

//import heroOne from './heroImages/hero_1.png';

class Nav extends React.Component {
    state = {
    nav: 'transparent',
    hamburger: '#fff'
    }

    listenScrollEvent = e => {
    if (window.scrollY > 400) {
        this.setState({nav: '#fff', hamburger: '#000'})
    } else {
        this.setState({nav: 'transparent', hamburger: '#fff'})
    }
    }

    componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    }
    render(){
        return (
            <div>
                <Router>
                    <nav style={{backgroundColor: this.state.nav}}>
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger"><div style={{background: this.state.hamburger}}></div></div>
                        <Grid fluid className="px-4 py-3 menu">
                            <Row className="mx-0">
                                <Col xs={12} md={2} className="nav-left">
                                <a href="/">Logo Here</a>
                                </Col>
                                <Col xs={12} md={10} className="nav-right">
                                    <Row end="xs" middle="xs">
                                        <Col xs={12} md className="nav-item"> 
                                            {/* <Link to="/about-us">About</Link> */}
                                            <a href="/about-us">About</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/brands">Brands</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/b2b">B2B</a>
                                        </Col> 
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/schedule">Schedule</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/contact">Contact</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/sign-in">Sign in</a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home}/>          
                        <Route path="/about-us" component={About}/>
                        <Route path="/brands" component={Brands}/>  
                        <Route path="/individual-brand" component={IndBrand}/>    
                        <Route path="/b2b" component={B2B}/>
                        <Route path="/schedule" component={Schedule}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/sign-in" component={Signin}/>
                        <Route path="/sitemap" component={Sitemap}/>
                    </Switch>          
                </Router>
            </div>
        );
    }
}

export default Nav;