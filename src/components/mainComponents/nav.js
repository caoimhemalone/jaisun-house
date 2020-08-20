import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactGA from "react-ga";



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



class Nav extends React.Component {
    state = {
        nav: 'transparent',
        hamburger: '#fff',
    }

    listenScrollEvent = e => {
        if (window.scrollY > 300) {
            this.setState({nav: '#fff', hamburger: '#000', trans: '2s ease-in'})
        } else {
            this.setState({nav: 'transparent', hamburger: '#fff', trans: 'unset'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        //console.log(this.props.navColor);
        // if(this.props.navColor === 'apricot') {
        //     this.setState({color: 'apricot'})
        // } else if(this.props.navColor === 'blueberry'){
        //     this.setState({color: 'blueberry'})
        // }
    }

    constructor() {
        super();
        ReactGA.initialize("UA-111422776-1");
        ReactGA.pageview(window.location.pathname);
    }
    render(){
        //console.log(this.props.navColor);
        if(this.props.navColor === 'apricot') {
            this.setState({color: 'apricot'})
        } else if(this.props.navColor === 'blueberry'){
            this.setState({color: 'blueberry'})
        }
        return (
            <div>
                <Router>
                    <nav style={{backgroundColor: this.state.nav, transition: this.state.trans}} className={this.state.color}>
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger"><div style={{background: this.state.hamburger}}></div></div>
                        <Grid fluid className="px-4 py-3 menu">
                            <Row className="mx-0">
                                <Col xs={12} md={2} className="nav-left">
                                {/* <a href="/">
                                    <img src={Logo} alt="logo" style={{height: this.state.logo, transition: '4s ease-in'}}/>
                                </a> */}
                                </Col>
                                <Col xs={12} md={10} className="nav-right">
                                    <Row end="xs" middle="xs">
                                        <Col xs={12} md className="nav-item"> 
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
                        <Route exact path="/" component={Home} navColor="apricot"/>          
                        <Route path="/about-us" component={About} navColor="apricot"/>
                        <Route path="/brands" component={Brands} navColor="blueberry"/>  
                        <Route path="/b2b" component={B2B} navColor="blueberry"/>
                        <Route path="/schedule" component={Schedule} navColor="blueberry"/>
                        <Route path="/contact" component={Contact} navColor="blueberry"/>
                        <Route path="/sign-in" component={Signin} navColor="blueberry"/>
                        <Route path="/sitemap" component={Sitemap} navColor="apricot"/>
                        <Route exact path="/:id" component={IndBrand} navColor="apricot"/>
                    </Switch>          
                </Router>
            </div>
        );
    }
}

export default Nav;