import React from 'react';
import axios from 'axios';


class Welcome extends React.Component {
     constructor(){
        super();
        this.state = {
            hometable: [],
            isLoaded: false
        }
    }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
        .then(res => this.setState({
           hometable: res.data,
           isLoaded: true
        }))
        .catch(err => console.log(err)); 
    }

    render() {
        const {hometable, isLoaded } = this.state;
        return (
            <div className="welcome-container">
                <div className="title-container">
                    <div className="title-seperator title-seperator-container-left">
                        <div className="title-sep"></div>
                    </div>
                    <h1>Welcome to Jaisun House</h1>
                    <div className="title-seperator title-seperator-container-right">
                        <div className="title-sep"></div>
                    </div>
                </div>

                <div className="welcome-text">
                    {/* <p>Welcome to Jaisun House, a leading distributor in high end fashion.  With collections stocked in retail stores throughout Ireland Jaisun House have a strong history and reputation for their offering within the high end fashion business.</p> */}
                    <p>{hometable.map(welcome => (
                        <div key={welcome.id} dangerouslySetInnerHTML={{ __html:welcome.acf.welcome}}/>
                    ))}</p>
                    {/* {
                        data.Home.map((weldata, i) => {
                            if(weldata.field_name === 'welcome'){
                                return (
                                    <div key={i}>
                                        <p>
                                            {weldata.text}
                                        </p>
                                    </div>
                                );
                            }
                        })
                    } */}
                </div>
            </div>
        );
    }
}
export default Welcome;