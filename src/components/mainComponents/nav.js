import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect, BrowserRouter, Link } from "react-router-dom";

import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactGA from "react-ga";



//pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Brands from '../../pages/Brands';
import IndBrand from '../../pages/IndBrand';
//import B2B from '../../pages/B2B';
import Schedule from '../../pages/Schedule';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
//import Signin from '../../pages/Signin';
import Sitemap from '../../pages/Sitemap';

//images
import Logo from '../../assets/images/logos/logo_6_transparent.png';



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
            isLoaded: false
        }
    }
    render(){
        const hist = createBrowserHistory();

        const brandLoop = this.state.brands.map((brand, index)=> {
            return (
                <li>
                <a href={brand.slug} className="brands-link__item" key={index}>
                    <span>
                        {brand.title.rendered}
                    </span>
                </a>  
                </li>    
            )
        })

        //console.log(this.props.navColor);
        if(this.props.navColor === 'apricot') {
            this.setState({color: 'apricot'})
        } else if(this.props.navColor === 'blueberry'){
            this.setState({color: 'blueberry'})
        }

        const {brands, isLoaded } = this.state;

        // let brandLoop = brands.map((brand, index)=> {
        //     let link = brand.slug
        //     return ( 
        //         <Route exact path={"/"+link} component={IndBrand} key={brand.id} navColor="apricot"/>
        //     )
        // })
        //console.log(brandLoop);
        return (
            <div>
                <BrowserRouter history={hist}>
                    <nav style={{backgroundColor: this.state.nav, transition: this.state.trans}} className={this.state.color}>
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger"><div style={{background: this.state.hamburger}}></div></div>
                        <Grid fluid className="menu">
                            <Row className="mx-0">
                                <Col xs={12} md={2} className="nav-left">
                                <a href="/">
                                    <img src={Logo} alt="logo" style={{height: this.state.logo, transition: '4s ease-in'}}/>
                                </a>
                                  {/* <div className="header-logo">
                                        <a href="/">
                                            <img src={Logo} alt="logo"/>
                                        </a>
                                    </div> */}
                                </Col>
                                <Col xs={12} md={10} className="nav-right">
                                    <Row end="xs" middle="xs">
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/about-us">About</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item brands-link"> 
                                            <a href="/brands">Brands <ion-icon name="chevron-down-outline"></ion-icon></a>
                                            <ul className="nav-brands">
                                                {brandLoop}
                                            </ul>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/services">Services</a>
                                        </Col>
                                        {/* <Col xs={12} md className="nav-item"> 
                                            <a href="/b2b">B2B</a>
                                        </Col>  */}
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/schedule">Schedule</a>
                                        </Col>
                                        <Col xs={12} md className="nav-item"> 
                                            <a href="/contact">Contact</a>
                                        </Col>
                                        {/* <Col xs={12} md className="nav-item"> 
                                            <a href="/sign-in">Sign in</a>
                                        </Col> */}
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} navColor="apricot"/>          
                        <Route path="/about-us" component={About} navColor="apricot"/>
                        <Route path="/brands" component={Brands} navColor="blueberry"/>  
                        <Route path="/services" component={Services} navColor="blueberry"/>
                        {/* <Route path="/b2b" component={B2B} navColor="blueberry"/> */}
                        <Route path="/schedule" component={Schedule} navColor="blueberry"/>
                        <Route path="/contact" component={Contact} navColor="blueberry"/>
                        {/* <Route path="/sign-in" component={Signin} navColor="blueberry"/> */}
                        <Route path="/sitemap" component={Sitemap} navColor="apricot"/>
                        <Route exact path="/:slug" component={IndBrand} navColor="apricot"/>
                        {/* {brandLoop} */}
                    </Switch>          
                </BrowserRouter>
            </div>
        );
    }
}

export default Nav;