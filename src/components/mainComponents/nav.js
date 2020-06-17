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

//import heroOne from './heroImages/hero_1.png';

function Nav() {
    return (
        <div>
            <Router>
                <nav>
                    <Grid fluid className="px-4 py-3">
                        <Row className="mx-0">
                            <Col xs={12} md={2} className="nav-left">
                            <Link to="/">Logo Here</Link>
                            </Col>
                            <Col xs={12} md={10} className="nav-right">
                                <Row end="xs" middle="xs">
                                    <Col xs={12} md className="nav-item"> 
                                        <Link to="/about-us">About</Link>
                                    </Col>
                                    <Col xs={12} md className="nav-item"> 
                                        <Link to="/brands">Brands</Link>
                                    </Col>
                                    <Col xs={12} md className="nav-item"> 
                                        <Link to="/b2b">B2B</Link>
                                    </Col> 
                                    <Col xs={12} md className="nav-item"> 
                                        <Link to="/schedule">Schedule</Link>
                                    </Col>
                                    <Col xs={12} md className="nav-item"> 
                                        <Link to="/contact">Contact</Link>
                                    </Col>
                                    <Col xs={12} md className="nav-item"> 
                                        <Link to="/sign-in">Sign in</Link>
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
                </Switch>          
            </Router>
        </div>
    );
}

export default Nav;