import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Brands from '../../pages/Brands';
import B2B from '../../pages/B2B';
import Schedule from '../../pages/Schedule';
import Contact from '../../pages/Contact';
import Signin from '../../pages/Signin';

//import heroOne from './heroImages/hero_1.png';

function Nav() {
    return (
        <div>
            <Router>
                <nav className="px-4 py-3">
                    <Grid fluid>
                        <Row>
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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <About />
                    </Route>
                    <Route path="/brands">
                        <Brands />
                    </Route>
                    <Route path="/b2b">
                        <B2B />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/sign-in">
                        <Signin />
                    </Route>
                </Switch>          
            </Router>
        </div>
    );
}

export default Nav;